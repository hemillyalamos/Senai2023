DROP DATABASE IF EXISTS cadastrar;
CREATE DATABASE cadastrar CHARSET=UTF8 COLLATE=utf8_general_ci;
USE cadastrar;

CREATE TABLE pacientes(
    nome VARCHAR(50) NOT NULL,
    data_nascimento DATE NOT NULL,
    peso FLOAT(10,2) NOT NULL,
    altura FLOAT(10,2) NOT NULL
);

INSERT INTO pacientes
VALUES ('Jair Rodrigues', '1981-01-03', 85.5, 1.75),
       ('Marieta Severo', '1995-03-04', 44.3, 1.55),
       ('Karina Silva', '2002-05-13', 88.0, 1.73),
       ('Solange Nascimento','2005-12-01',95,1.58),
       ('Marcos Pontes','2001-12-03',60,1.98);
