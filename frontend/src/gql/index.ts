/* eslint-disable */
import * as graphql from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

const documents = {
  "\n  query findAuthor($id: Long!) {\n    findAuthor(id: $id) {\n      email\n      firstName\n      id\n      lastName\n    }\n  }\n":
    graphql.FindAuthorDocument,
  "\n  mutation updateAuthor($input: AuthorDtoInput) {\n    updateAuthor(input: $input) {\n      email\n      firstName\n      id\n      lastName\n    }\n  }\n":
    graphql.UpdateAuthorDocument,
  "\n              fragment New_AuthorDto on AuthorDto {\n                id\n              }\n            ":
    graphql.New_AuthorDtoFragmentDoc,
  "\n  query listAuthors {\n    listAuthors {\n      email\n      firstName\n      id\n      lastName\n    }\n  }\n":
    graphql.ListAuthorsDocument,
  "\n  mutation deleteAuthor($id: Long!) {\n    deleteAuthor(id: $id)\n  }\n":
    graphql.DeleteAuthorDocument,
  "\n  query findBook($id: String!) {\n    findBook(id: $id) {\n      authors {\n        email\n        firstName\n        id\n        lastName\n      }\n      genre {\n        allowedForChildren\n        id\n        name\n      }\n      id\n      releaseYear\n      title\n    }\n  }\n":
    graphql.FindBookDocument,
  "\n  mutation updateBook($input: BookDtoInput) {\n    updateBook(input: $input) {\n      authors {\n        email\n        firstName\n        id\n        lastName\n      }\n      genre {\n        allowedForChildren\n        id\n        name\n      }\n      id\n      releaseYear\n      title\n    }\n  }\n":
    graphql.UpdateBookDocument,
  "\n  query listGenres {\n    listGenres {\n      allowedForChildren\n      id\n      name\n    }\n  }\n":
    graphql.ListGenresDocument,
  "\n              fragment New_BookDto on BookDto {\n                id\n              }\n            ":
    graphql.New_BookDtoFragmentDoc,
  "\n  query listBooks($filter: String) {\n    listBooks(filterDto: {filter: $filter}) {\n      authors {\n        email\n        firstName\n        id\n        lastName\n      }\n      genre {\n        allowedForChildren\n        id\n        name\n      }\n      id\n      releaseYear\n      title\n    }\n  }\n":
    graphql.ListBooksDocument,
  "\n  mutation deleteBook($id: String!) {\n    deleteBook(id: $id)\n  }\n":
    graphql.DeleteBookDocument,
  "\n  query findGenre($id: Long!) {\n    findGenre(id: $id) {\n      allowedForChildren\n      id\n      name\n    }\n  }\n":
    graphql.FindGenreDocument,
  "\n  mutation updateGenre($input: GenreDtoInput) {\n    updateGenre(input: $input) {\n      allowedForChildren\n      id\n      name\n    }\n  }\n":
    graphql.UpdateGenreDocument,
  "\n              fragment New_GenreDto on GenreDto {\n                id\n              }\n            ":
    graphql.New_GenreDtoFragmentDoc,
  "\n  query listGenres2 {\n    listGenres {\n      id\n      name\n    }\n  }\n":
    graphql.ListGenres2Document,
  "\n  mutation deleteGenre($id: Long!) {\n    deleteGenre(id: $id)\n  }\n":
    graphql.DeleteGenreDocument,
  "\n  query findPublisher($id: String!) {\n    findPublisher(id: $id) {\n      companyName\n      id\n      taxCode\n    }\n  }\n":
    graphql.FindPublisherDocument,
  "\n  mutation updatePublisher($input: PublisherDtoInput) {\n    updatePublisher(input: $input) {\n      companyName\n      id\n      taxCode\n    }\n  }\n":
    graphql.UpdatePublisherDocument,
  "\n              fragment New_PublisherDto on PublisherDto {\n                id\n              }\n            ":
    graphql.New_PublisherDtoFragmentDoc,
  "\n  query listPublishers {\n    listPublishers {\n      companyName\n      id\n      taxCode\n    }\n  }\n":
    graphql.ListPublishersDocument,
  "\n  mutation deletePublisher($id: String!) {\n    deletePublisher(id: $id)\n  }\n":
    graphql.DeletePublisherDocument,
};

export function gql(
  source: "\n  query findAuthor($id: Long!) {\n    findAuthor(id: $id) {\n      email\n      firstName\n      id\n      lastName\n    }\n  }\n"
): typeof documents["\n  query findAuthor($id: Long!) {\n    findAuthor(id: $id) {\n      email\n      firstName\n      id\n      lastName\n    }\n  }\n"];
export function gql(
  source: "\n  mutation updateAuthor($input: AuthorDtoInput) {\n    updateAuthor(input: $input) {\n      email\n      firstName\n      id\n      lastName\n    }\n  }\n"
): typeof documents["\n  mutation updateAuthor($input: AuthorDtoInput) {\n    updateAuthor(input: $input) {\n      email\n      firstName\n      id\n      lastName\n    }\n  }\n"];
export function gql(
  source: "\n              fragment New_AuthorDto on AuthorDto {\n                id\n              }\n            "
): typeof documents["\n              fragment New_AuthorDto on AuthorDto {\n                id\n              }\n            "];
export function gql(
  source: "\n  query listAuthors {\n    listAuthors {\n      email\n      firstName\n      id\n      lastName\n    }\n  }\n"
): typeof documents["\n  query listAuthors {\n    listAuthors {\n      email\n      firstName\n      id\n      lastName\n    }\n  }\n"];
export function gql(
  source: "\n  mutation deleteAuthor($id: Long!) {\n    deleteAuthor(id: $id)\n  }\n"
): typeof documents["\n  mutation deleteAuthor($id: Long!) {\n    deleteAuthor(id: $id)\n  }\n"];
export function gql(
  source: "\n  query findBook($id: String!) {\n    findBook(id: $id) {\n      authors {\n        email\n        firstName\n        id\n        lastName\n      }\n      genre {\n        allowedForChildren\n        id\n        name\n      }\n      id\n      releaseYear\n      title\n    }\n  }\n"
): typeof documents["\n  query findBook($id: String!) {\n    findBook(id: $id) {\n      authors {\n        email\n        firstName\n        id\n        lastName\n      }\n      genre {\n        allowedForChildren\n        id\n        name\n      }\n      id\n      releaseYear\n      title\n    }\n  }\n"];
export function gql(
  source: "\n  mutation updateBook($input: BookDtoInput) {\n    updateBook(input: $input) {\n      authors {\n        email\n        firstName\n        id\n        lastName\n      }\n      genre {\n        allowedForChildren\n        id\n        name\n      }\n      id\n      releaseYear\n      title\n    }\n  }\n"
): typeof documents["\n  mutation updateBook($input: BookDtoInput) {\n    updateBook(input: $input) {\n      authors {\n        email\n        firstName\n        id\n        lastName\n      }\n      genre {\n        allowedForChildren\n        id\n        name\n      }\n      id\n      releaseYear\n      title\n    }\n  }\n"];
export function gql(
  source: "\n  query listGenres {\n    listGenres {\n      allowedForChildren\n      id\n      name\n    }\n  }\n"
): typeof documents["\n  query listGenres {\n    listGenres {\n      allowedForChildren\n      id\n      name\n    }\n  }\n"];
export function gql(
  source: "\n              fragment New_BookDto on BookDto {\n                id\n              }\n            "
): typeof documents["\n              fragment New_BookDto on BookDto {\n                id\n              }\n            "];
export function gql(
  source: "\n  query listBooks($filter: String) {\n    listBooks(filterDto: {filter: $filter}) {\n      authors {\n        email\n        firstName\n        id\n        lastName\n      }\n      genre {\n        allowedForChildren\n        id\n        name\n      }\n      id\n      releaseYear\n      title\n    }\n  }\n"
): typeof documents["\n  query listBooks($filter: String) {\n    listBooks(filterDto: {filter: $filter}) {\n      authors {\n        email\n        firstName\n        id\n        lastName\n      }\n      genre {\n        allowedForChildren\n        id\n        name\n      }\n      id\n      releaseYear\n      title\n    }\n  }\n"];
export function gql(
  source: "\n  mutation deleteBook($id: String!) {\n    deleteBook(id: $id)\n  }\n"
): typeof documents["\n  mutation deleteBook($id: String!) {\n    deleteBook(id: $id)\n  }\n"];
export function gql(
  source: "\n  query findGenre($id: Long!) {\n    findGenre(id: $id) {\n      allowedForChildren\n      id\n      name\n    }\n  }\n"
): typeof documents["\n  query findGenre($id: Long!) {\n    findGenre(id: $id) {\n      allowedForChildren\n      id\n      name\n    }\n  }\n"];
export function gql(
  source: "\n  mutation updateGenre($input: GenreDtoInput) {\n    updateGenre(input: $input) {\n      allowedForChildren\n      id\n      name\n    }\n  }\n"
): typeof documents["\n  mutation updateGenre($input: GenreDtoInput) {\n    updateGenre(input: $input) {\n      allowedForChildren\n      id\n      name\n    }\n  }\n"];
export function gql(
  source: "\n              fragment New_GenreDto on GenreDto {\n                id\n              }\n            "
): typeof documents["\n              fragment New_GenreDto on GenreDto {\n                id\n              }\n            "];
export function gql(
  source: "\n  query listGenres2 {\n    listGenres {\n      id\n      name\n    }\n  }\n"
): typeof documents["\n  query listGenres2 {\n    listGenres {\n      id\n      name\n    }\n  }\n"];
export function gql(
  source: "\n  mutation deleteGenre($id: Long!) {\n    deleteGenre(id: $id)\n  }\n"
): typeof documents["\n  mutation deleteGenre($id: Long!) {\n    deleteGenre(id: $id)\n  }\n"];
export function gql(
  source: "\n  query findPublisher($id: String!) {\n    findPublisher(id: $id) {\n      companyName\n      id\n      taxCode\n    }\n  }\n"
): typeof documents["\n  query findPublisher($id: String!) {\n    findPublisher(id: $id) {\n      companyName\n      id\n      taxCode\n    }\n  }\n"];
export function gql(
  source: "\n  mutation updatePublisher($input: PublisherDtoInput) {\n    updatePublisher(input: $input) {\n      companyName\n      id\n      taxCode\n    }\n  }\n"
): typeof documents["\n  mutation updatePublisher($input: PublisherDtoInput) {\n    updatePublisher(input: $input) {\n      companyName\n      id\n      taxCode\n    }\n  }\n"];
export function gql(
  source: "\n              fragment New_PublisherDto on PublisherDto {\n                id\n              }\n            "
): typeof documents["\n              fragment New_PublisherDto on PublisherDto {\n                id\n              }\n            "];
export function gql(
  source: "\n  query listPublishers {\n    listPublishers {\n      companyName\n      id\n      taxCode\n    }\n  }\n"
): typeof documents["\n  query listPublishers {\n    listPublishers {\n      companyName\n      id\n      taxCode\n    }\n  }\n"];
export function gql(
  source: "\n  mutation deletePublisher($id: String!) {\n    deletePublisher(id: $id)\n  }\n"
): typeof documents["\n  mutation deletePublisher($id: String!) {\n    deletePublisher(id: $id)\n  }\n"];

export function gql(source: string): unknown;
export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
