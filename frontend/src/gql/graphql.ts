/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** BigDecimal */
  BigDecimal: any;
  /** BigInteger */
  BigInteger: any;
  /** Byte */
  Byte: any;
  /** Char */
  Char: any;
  /** Date */
  Date: any;
  /** DateTime */
  DateTime: any;
  /** LocalDate */
  LocalDate: any;
  /** LocalDateTime */
  LocalDateTime: any;
  /** LocalTime */
  LocalTime: any;
  /** Long */
  Long: any;
  /** OffsetDateTime */
  OffsetDateTime: any;
  /** OffsetTime */
  OffsetTime: any;
  /** Short */
  Short: any;
  /** Time */
  Time: any;
  /** UUID */
  UUID: any;
  /** Void */
  Void: any;
};

export type AuthorDto = {
  __typename?: "AuthorDto";
  email?: Maybe<Scalars["String"]>;
  firstName?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Long"]>;
  lastName?: Maybe<Scalars["String"]>;
};

export type AuthorDtoInput = {
  email?: InputMaybe<Scalars["String"]>;
  firstName?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["Long"]>;
  lastName?: InputMaybe<Scalars["String"]>;
};

export type BookDto = {
  __typename?: "BookDto";
  authors?: Maybe<Array<Maybe<AuthorDto>>>;
  genre?: Maybe<GenreDto>;
  id?: Maybe<Scalars["String"]>;
  releaseYear: Scalars["Int"];
  title?: Maybe<Scalars["String"]>;
};

export type BookDtoInput = {
  authors?: InputMaybe<Array<InputMaybe<AuthorDtoInput>>>;
  genre?: InputMaybe<GenreDtoInput>;
  id?: InputMaybe<Scalars["String"]>;
  releaseYear: Scalars["Int"];
  title?: InputMaybe<Scalars["String"]>;
};

export type BookFilterDtoInput = {
  filter?: InputMaybe<Scalars["String"]>;
};

export type GenreDto = {
  __typename?: "GenreDto";
  allowedForChildren?: Maybe<Scalars["Boolean"]>;
  id?: Maybe<Scalars["Long"]>;
  name?: Maybe<Scalars["String"]>;
};

export type GenreDtoInput = {
  allowedForChildren?: InputMaybe<Scalars["Boolean"]>;
  id?: InputMaybe<Scalars["Long"]>;
  name?: InputMaybe<Scalars["String"]>;
};

/** Mutation root */
export type Mutation = {
  __typename?: "Mutation";
  deleteAuthor: Scalars["Boolean"];
  deleteBook: Scalars["Boolean"];
  deleteGenre: Scalars["Boolean"];
  deletePublisher: Scalars["Boolean"];
  updateAuthor?: Maybe<AuthorDto>;
  updateBook?: Maybe<BookDto>;
  updateGenre?: Maybe<GenreDto>;
  updatePublisher?: Maybe<PublisherDto>;
};

/** Mutation root */
export type MutationDeleteAuthorArgs = {
  id: Scalars["Long"];
};

/** Mutation root */
export type MutationDeleteBookArgs = {
  id: Scalars["String"];
};

/** Mutation root */
export type MutationDeleteGenreArgs = {
  id: Scalars["Long"];
};

/** Mutation root */
export type MutationDeletePublisherArgs = {
  id: Scalars["String"];
};

/** Mutation root */
export type MutationUpdateAuthorArgs = {
  input?: InputMaybe<AuthorDtoInput>;
};

/** Mutation root */
export type MutationUpdateBookArgs = {
  input?: InputMaybe<BookDtoInput>;
};

/** Mutation root */
export type MutationUpdateGenreArgs = {
  input?: InputMaybe<GenreDtoInput>;
};

/** Mutation root */
export type MutationUpdatePublisherArgs = {
  input?: InputMaybe<PublisherDtoInput>;
};

export type PublisherDto = {
  __typename?: "PublisherDto";
  companyName?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  taxCode?: Maybe<Scalars["String"]>;
};

export type PublisherDtoInput = {
  companyName?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  taxCode?: InputMaybe<Scalars["String"]>;
};

/** Query root */
export type Query = {
  __typename?: "Query";
  findAuthor?: Maybe<AuthorDto>;
  findBook?: Maybe<BookDto>;
  findGenre?: Maybe<GenreDto>;
  findPublisher?: Maybe<PublisherDto>;
  hello?: Maybe<Scalars["String"]>;
  listAuthors?: Maybe<Array<Maybe<AuthorDto>>>;
  listBooks?: Maybe<Array<Maybe<BookDto>>>;
  listGenres?: Maybe<Array<Maybe<GenreDto>>>;
  listPublishers?: Maybe<Array<Maybe<PublisherDto>>>;
};

/** Query root */
export type QueryFindAuthorArgs = {
  id: Scalars["Long"];
};

/** Query root */
export type QueryFindBookArgs = {
  id: Scalars["String"];
};

/** Query root */
export type QueryFindGenreArgs = {
  id: Scalars["Long"];
};

/** Query root */
export type QueryFindPublisherArgs = {
  id: Scalars["String"];
};

/** Query root */
export type QueryListBooksArgs = {
  filterDto?: InputMaybe<BookFilterDtoInput>;
};

export type FindAuthorQueryVariables = Exact<{
  id: Scalars["Long"];
}>;

export type FindAuthorQuery = {
  __typename?: "Query";
  findAuthor?:
    | {
        __typename?: "AuthorDto";
        email?: string | null | undefined;
        firstName?: string | null | undefined;
        id?: any | null | undefined;
        lastName?: string | null | undefined;
      }
    | null
    | undefined;
};

export type UpdateAuthorMutationVariables = Exact<{
  input?: InputMaybe<AuthorDtoInput>;
}>;

export type UpdateAuthorMutation = {
  __typename?: "Mutation";
  updateAuthor?:
    | {
        __typename?: "AuthorDto";
        email?: string | null | undefined;
        firstName?: string | null | undefined;
        id?: any | null | undefined;
        lastName?: string | null | undefined;
      }
    | null
    | undefined;
};

export type New_AuthorDtoFragment = {
  __typename?: "AuthorDto";
  id?: any | null | undefined;
};

export type ListAuthorsQueryVariables = Exact<{ [key: string]: never }>;

export type ListAuthorsQuery = {
  __typename?: "Query";
  listAuthors?:
    | Array<
        | {
            __typename?: "AuthorDto";
            email?: string | null | undefined;
            firstName?: string | null | undefined;
            id?: any | null | undefined;
            lastName?: string | null | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
};

export type DeleteAuthorMutationVariables = Exact<{
  id: Scalars["Long"];
}>;

export type DeleteAuthorMutation = {
  __typename?: "Mutation";
  deleteAuthor: boolean;
};

export type FindBookQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type FindBookQuery = {
  __typename?: "Query";
  findBook?:
    | {
        __typename?: "BookDto";
        id?: string | null | undefined;
        releaseYear: number;
        title?: string | null | undefined;
        authors?:
          | Array<
              | {
                  __typename?: "AuthorDto";
                  email?: string | null | undefined;
                  firstName?: string | null | undefined;
                  id?: any | null | undefined;
                  lastName?: string | null | undefined;
                }
              | null
              | undefined
            >
          | null
          | undefined;
        genre?:
          | {
              __typename?: "GenreDto";
              allowedForChildren?: boolean | null | undefined;
              id?: any | null | undefined;
              name?: string | null | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type UpdateBookMutationVariables = Exact<{
  input?: InputMaybe<BookDtoInput>;
}>;

export type UpdateBookMutation = {
  __typename?: "Mutation";
  updateBook?:
    | {
        __typename?: "BookDto";
        id?: string | null | undefined;
        releaseYear: number;
        title?: string | null | undefined;
        authors?:
          | Array<
              | {
                  __typename?: "AuthorDto";
                  email?: string | null | undefined;
                  firstName?: string | null | undefined;
                  id?: any | null | undefined;
                  lastName?: string | null | undefined;
                }
              | null
              | undefined
            >
          | null
          | undefined;
        genre?:
          | {
              __typename?: "GenreDto";
              allowedForChildren?: boolean | null | undefined;
              id?: any | null | undefined;
              name?: string | null | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type ListGenresQueryVariables = Exact<{ [key: string]: never }>;

export type ListGenresQuery = {
  __typename?: "Query";
  listGenres?:
    | Array<
        | {
            __typename?: "GenreDto";
            allowedForChildren?: boolean | null | undefined;
            id?: any | null | undefined;
            name?: string | null | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
};

export type New_BookDtoFragment = {
  __typename?: "BookDto";
  id?: string | null | undefined;
};

export type ListBooksQueryVariables = Exact<{
  filter?: InputMaybe<Scalars["String"]>;
}>;

export type ListBooksQuery = {
  __typename?: "Query";
  listBooks?:
    | Array<
        | {
            __typename?: "BookDto";
            id?: string | null | undefined;
            releaseYear: number;
            title?: string | null | undefined;
            authors?:
              | Array<
                  | {
                      __typename?: "AuthorDto";
                      email?: string | null | undefined;
                      firstName?: string | null | undefined;
                      id?: any | null | undefined;
                      lastName?: string | null | undefined;
                    }
                  | null
                  | undefined
                >
              | null
              | undefined;
            genre?:
              | {
                  __typename?: "GenreDto";
                  allowedForChildren?: boolean | null | undefined;
                  id?: any | null | undefined;
                  name?: string | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
};

export type DeleteBookMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type DeleteBookMutation = {
  __typename?: "Mutation";
  deleteBook: boolean;
};

export type FindGenreQueryVariables = Exact<{
  id: Scalars["Long"];
}>;

export type FindGenreQuery = {
  __typename?: "Query";
  findGenre?:
    | {
        __typename?: "GenreDto";
        allowedForChildren?: boolean | null | undefined;
        id?: any | null | undefined;
        name?: string | null | undefined;
      }
    | null
    | undefined;
};

export type UpdateGenreMutationVariables = Exact<{
  input?: InputMaybe<GenreDtoInput>;
}>;

export type UpdateGenreMutation = {
  __typename?: "Mutation";
  updateGenre?:
    | {
        __typename?: "GenreDto";
        allowedForChildren?: boolean | null | undefined;
        id?: any | null | undefined;
        name?: string | null | undefined;
      }
    | null
    | undefined;
};

export type New_GenreDtoFragment = {
  __typename?: "GenreDto";
  id?: any | null | undefined;
};

export type ListGenres2QueryVariables = Exact<{ [key: string]: never }>;

export type ListGenres2Query = {
  __typename?: "Query";
  listGenres?:
    | Array<
        | {
            __typename?: "GenreDto";
            id?: any | null | undefined;
            name?: string | null | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
};

export type DeleteGenreMutationVariables = Exact<{
  id: Scalars["Long"];
}>;

export type DeleteGenreMutation = {
  __typename?: "Mutation";
  deleteGenre: boolean;
};

export type FindPublisherQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type FindPublisherQuery = {
  __typename?: "Query";
  findPublisher?:
    | {
        __typename?: "PublisherDto";
        companyName?: string | null | undefined;
        id?: string | null | undefined;
        taxCode?: string | null | undefined;
      }
    | null
    | undefined;
};

export type UpdatePublisherMutationVariables = Exact<{
  input?: InputMaybe<PublisherDtoInput>;
}>;

export type UpdatePublisherMutation = {
  __typename?: "Mutation";
  updatePublisher?:
    | {
        __typename?: "PublisherDto";
        companyName?: string | null | undefined;
        id?: string | null | undefined;
        taxCode?: string | null | undefined;
      }
    | null
    | undefined;
};

export type New_PublisherDtoFragment = {
  __typename?: "PublisherDto";
  id?: string | null | undefined;
};

export type ListPublishersQueryVariables = Exact<{ [key: string]: never }>;

export type ListPublishersQuery = {
  __typename?: "Query";
  listPublishers?:
    | Array<
        | {
            __typename?: "PublisherDto";
            companyName?: string | null | undefined;
            id?: string | null | undefined;
            taxCode?: string | null | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
};

export type DeletePublisherMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type DeletePublisherMutation = {
  __typename?: "Mutation";
  deletePublisher: boolean;
};

export const New_AuthorDtoFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "New_AuthorDto" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "AuthorDto" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
      },
    },
  ],
} as unknown as DocumentNode<New_AuthorDtoFragment, unknown>;
export const New_BookDtoFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "New_BookDto" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "BookDto" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
      },
    },
  ],
} as unknown as DocumentNode<New_BookDtoFragment, unknown>;
export const New_GenreDtoFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "New_GenreDto" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "GenreDto" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
      },
    },
  ],
} as unknown as DocumentNode<New_GenreDtoFragment, unknown>;
export const New_PublisherDtoFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "New_PublisherDto" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "PublisherDto" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
      },
    },
  ],
} as unknown as DocumentNode<New_PublisherDtoFragment, unknown>;
export const FindAuthorDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "findAuthor" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Long" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "findAuthor" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "firstName" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "lastName" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FindAuthorQuery, FindAuthorQueryVariables>;
export const UpdateAuthorDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "updateAuthor" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "AuthorDtoInput" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateAuthor" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "firstName" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "lastName" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateAuthorMutation,
  UpdateAuthorMutationVariables
>;
export const ListAuthorsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "listAuthors" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "listAuthors" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "firstName" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "lastName" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ListAuthorsQuery, ListAuthorsQueryVariables>;
export const DeleteAuthorDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "deleteAuthor" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Long" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteAuthor" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteAuthorMutation,
  DeleteAuthorMutationVariables
>;
export const FindBookDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "findBook" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "findBook" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "authors" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "firstName" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "lastName" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "genre" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "allowedForChildren" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "releaseYear" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FindBookQuery, FindBookQueryVariables>;
export const UpdateBookDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "updateBook" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "BookDtoInput" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateBook" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "authors" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "firstName" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "lastName" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "genre" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "allowedForChildren" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "releaseYear" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateBookMutation, UpdateBookMutationVariables>;
export const ListGenresDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "listGenres" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "listGenres" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "allowedForChildren" },
                },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ListGenresQuery, ListGenresQueryVariables>;
export const ListBooksDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "listBooks" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filter" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "listBooks" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filterDto" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "filter" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "filter" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "authors" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "firstName" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "lastName" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "genre" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "allowedForChildren" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "releaseYear" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ListBooksQuery, ListBooksQueryVariables>;
export const DeleteBookDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "deleteBook" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteBook" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DeleteBookMutation, DeleteBookMutationVariables>;
export const FindGenreDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "findGenre" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Long" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "findGenre" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "allowedForChildren" },
                },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FindGenreQuery, FindGenreQueryVariables>;
export const UpdateGenreDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "updateGenre" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "GenreDtoInput" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateGenre" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "allowedForChildren" },
                },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateGenreMutation, UpdateGenreMutationVariables>;
export const ListGenres2Document = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "listGenres2" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "listGenres" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ListGenres2Query, ListGenres2QueryVariables>;
export const DeleteGenreDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "deleteGenre" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Long" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteGenre" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DeleteGenreMutation, DeleteGenreMutationVariables>;
export const FindPublisherDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "findPublisher" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "findPublisher" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "companyName" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "taxCode" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FindPublisherQuery, FindPublisherQueryVariables>;
export const UpdatePublisherDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "updatePublisher" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "PublisherDtoInput" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updatePublisher" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "companyName" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "taxCode" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdatePublisherMutation,
  UpdatePublisherMutationVariables
>;
export const ListPublishersDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "listPublishers" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "listPublishers" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "companyName" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "taxCode" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ListPublishersQuery, ListPublishersQueryVariables>;
export const DeletePublisherDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "deletePublisher" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deletePublisher" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeletePublisherMutation,
  DeletePublisherMutationVariables
>;
