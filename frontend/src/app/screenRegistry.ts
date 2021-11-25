import { PublisherList } from "./publishers/PublisherList";
import { BookList } from "./books/BookList";
import { GenreList } from "./genres/GenreList";
import { AuthorList } from "./authors/AuthorList";
import { Home } from "./home/Home";
import { screenStore } from "@amplicode/react-core";

screenStore.registerScreen("home", {
  component: Home,
  captionKey: "screen.home"
});

screenStore.registerScreen("author-list", {
  component: AuthorList,
  captionKey: "screen.AuthorList"
});

screenStore.registerScreen("genre-list", {
  component: GenreList,
  captionKey: "screen.GenreList"
});

screenStore.registerScreen("book-list", {
  component: BookList,
  captionKey: "screen.BookList"
});

screenStore.registerScreen("publisher-list", {
  component: PublisherList,
  captionKey: "screen.PublisherList"
});
