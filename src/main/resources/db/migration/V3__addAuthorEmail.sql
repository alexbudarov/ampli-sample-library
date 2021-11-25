ALTER TABLE author
    ADD email VARCHAR(255);

ALTER TABLE author
    ADD CONSTRAINT uc_author_email UNIQUE (email);
