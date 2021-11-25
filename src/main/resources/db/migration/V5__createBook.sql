CREATE TABLE book
(
    isbn         VARCHAR(255) NOT NULL,
    title        VARCHAR(255) NOT NULL,
    release_year INTEGER      NOT NULL,
    genre_id     BIGINT       NOT NULL,
    CONSTRAINT pk_book PRIMARY KEY (isbn)
);

CREATE TABLE book_author
(
    author_id BIGINT       NOT NULL,
    book_isbn VARCHAR(255) NOT NULL,
    CONSTRAINT pk_book_author PRIMARY KEY (author_id, book_isbn)
);

ALTER TABLE book
    ADD CONSTRAINT FK_BOOK_ON_GENRE FOREIGN KEY (genre_id) REFERENCES genre (id);

ALTER TABLE book_author
    ADD CONSTRAINT fk_booaut_on_author FOREIGN KEY (author_id) REFERENCES author (id);

ALTER TABLE book_author
    ADD CONSTRAINT fk_booaut_on_book FOREIGN KEY (book_isbn) REFERENCES book (isbn);