CREATE SEQUENCE IF NOT EXISTS hibernate_sequence START WITH 1 INCREMENT BY 1;

CREATE TABLE genre
(
    id                   BIGINT       NOT NULL,
    name                 VARCHAR(255) NOT NULL,
    allowed_for_children BOOLEAN      NOT NULL,
    CONSTRAINT pk_genre PRIMARY KEY (id)
);

ALTER TABLE genre
    ADD CONSTRAINT uc_genre_name UNIQUE (name);