import {useCallback, useEffect, useState} from "react";
import {gql} from "@amplicode/gql";
import {ApolloCache, ApolloError, FetchResult, useLazyQuery, useMutation, useQuery} from "@apollo/client";
import {Alert, Button, Card, Form, Input, message, Result, Select, Spin} from "antd";
import {useForm} from "antd/es/form/Form";
import {observer} from "mobx-react";
import {FormattedMessage, useIntl} from "react-intl";
import {useHistory} from "react-router-dom";
import {EntityDetailsScreenProps, useDefaultEditorHotkeys, useScreens} from "@amplicode/react-core";
import {BookDto} from "../../gql/graphql";

const FIND_BOOK = gql(/* GraphQL */ `
  query findBook($id: String!) {
    findBook(id: $id) {
      authors {
        email
        firstName
        id
        lastName
      }
      genre {
        allowedForChildren
        id
        name
      }
      id
      releaseYear
      title
    }
  }
`);

const UPDATE_BOOK = gql(/* GraphQL */ `
  mutation updateBook($input: BookDtoInput) {
    updateBook(input: $input) {
      authors {
        email
        firstName
        id
        lastName
      }
      genre {
        allowedForChildren
        id
        name
      }
      id
      releaseYear
      title
    }
  }
`);

const LIST_GENRES = gql(/* GraphQL */ `
  query listGenres {
    listGenres {
      allowedForChildren
      id
      name
    }
  }
`);

export const BookDetails = observer(({ id }: EntityDetailsScreenProps) => {
  const [form] = useForm();
  const intl = useIntl();
  const screens = useScreens();
  const history = useHistory();

  const [
    loadItem,
    { loading: queryLoading, error: queryError, data }
  ] = useLazyQuery(FIND_BOOK, {
    variables: {
      id: id || ""
    }
  });

  const [executeUpsertMutation, { loading: upsertInProcess }] = useMutation(
    UPDATE_BOOK
  );

  const { data: dataGenres } = useQuery(LIST_GENRES);

  const [formError, setFormError] = useState<string | undefined>();

  const goToParentScreen = useCallback(() => {
    history.push("."); // Remove entity id part from url
    screens.closeActiveBreadcrumb();
  }, [screens, history]);

  const handleSubmit = useCallback(
    values => {
      executeUpsertMutation({
        variables: {
          input: formValuesToData(values, id)
        },
        update: getUpdateFn(values)
      })
        .then(({ errors }: FetchResult) => {
          if (errors == null || errors.length === 0) {
            goToParentScreen();
            message.success(
              intl.formatMessage({
                id: "EntityDetailsScreen.savedSuccessfully"
              })
            );
            return;
          }
          setFormError(errors.join("\n"));
          console.error(errors);
          message.error(intl.formatMessage({ id: "common.requestFailed" }));
        })
        .catch((e: Error | ApolloError) => {
          setFormError(e.message);
          console.error(e);
          message.error(intl.formatMessage({ id: "common.requestFailed" }));
        });
    },
    [executeUpsertMutation, id, intl, goToParentScreen]
  );

  const handleSubmitFailed = useCallback(() => {
    message.error(
      intl.formatMessage({ id: "EntityDetailsScreen.validationError" })
    );
  }, [intl]);

  useEffect(() => {
    if (id != null) {
      loadItem();
    }
  }, [loadItem, id]);

  const item = data?.findBook;

  const genreItems = dataGenres && dataGenres.listGenres ? dataGenres.listGenres : [];

  useEffect(() => {
    if (item != null) {
      if (item) {
        form.setFieldsValue(dataToFormValues(item as BookDto));
      }
    }
  }, [item, form]);

  function dataToFormValues(data: BookDto): any {
    let map = { ...data };
    map["genre"] = data?.genre ? data?.genre?.id : null;
    return map;
  }

  useDefaultEditorHotkeys({ saveEntity: form.submit });

  if (queryLoading) {
    return <Spin />;
  }

  if (queryError) {
    return (
      <Result
        status="error"
        title={<FormattedMessage id="common.requestFailed" />}
      />
    );
  }

  return (
    <Card className="narrow-layout">
      <Form
        onFinish={handleSubmit}
        onFinishFailed={handleSubmitFailed}
        layout="vertical"
        form={form}
      >
        <Form.Item name="id" label="ISBN" style={{marginBottom: "12px"}}>
          <Input/>
        </Form.Item>
        <Form.Item name="title" label="Title" style={{marginBottom: "12px"}}>
          <Input/>
        </Form.Item>
        <Form.Item
            name="releaseYear"
            label="Release Year"
            style={{marginBottom: "12px"}}
        >
          <Input/>
        </Form.Item>
        <Form.Item name="genre" label="Genre" style={{marginBottom: "12px"}}>
          <Select>
            {genreItems.map((genre) => (
                <Select.Option key={genre?.id} value={genre?.id}>
                  {genre?.name}
                </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="authors"
          label="Authors"
          style={{ marginBottom: "12px" }}
        >
          <Input />
        </Form.Item>

        {formError && (
          <Alert
            message={formError}
            type="error"
            style={{ marginBottom: "18px" }}
          />
        )}

        <Form.Item style={{ textAlign: "center" }}>
          <Button htmlType="button" onClick={goToParentScreen}>
            <FormattedMessage id="common.cancel" />
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            loading={upsertInProcess}
            style={{ marginLeft: "8px" }}
          >
            <FormattedMessage id={"common.submit"} />
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
});

function formValuesToData(values: any, id?: string): any {
  let map = {
    ...values,
    id: (id ? id : values['id'])
  }
  let formGenre = map["genre"] as number;
  map["genre"] = {"id": formGenre};
  return map;
}


function getUpdateFn(values: any) {
  return (cache: ApolloCache<any>, result: FetchResult) => {
    const updateResult = result.data?.updateBook;
    // Reflect the update in Apollo cache
    cache.modify({
      fields: {
        listBooks(existingRefs = []) {
          const updatedItemRef = cache.writeFragment({
            id: `BookDto:${updateResult.id}`,
            data: values,
            fragment: gql(`
              fragment New_BookDto on BookDto {
                id
              }
            `)
          });
          return [...existingRefs, updatedItemRef];
        }
      }
    });
  };
}
