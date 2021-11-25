CREATE TABLE publisher
(
    id           VARCHAR(255) NOT NULL,
    company_name VARCHAR(255),
    tax_code     VARCHAR(255),
    CONSTRAINT pk_publisher PRIMARY KEY (id)
);