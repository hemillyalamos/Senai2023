DROP DATABASE IF EXISTS restaurantes;
CREATE DATABASE restaurantes;
USE restaurantes;

CREATE TABLE clientes(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    telefone VARCHAR(11) NOT NULL,
    email VARCHAR(50) NOT NULL,
    senha VARCHAR(50) NOT NULL
);
CREATE TABLE categorias(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
);
CREATE TABLE restaurantes(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    categoriaId INT NOT NULL,
    endereco VARCHAR(50) NOT NULL,
    FOREIGN KEY (categoriaId) REFERENCES categorias(id)
);
CREATE TABLE cardapio(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    restauranteId INT NOT NULL,
    descricao VARCHAR(50) NOT NULL,
    valor DECIMAL(5,2) NOT NULL,
    FOREIGN KEY (restauranteId) REFERENCES restaurantes(id)
);
CREATE TABLE avaliacao(
    restauranteId INT NOT NULL,
    clienteId INT NOT NULL,
    data DATE NOT NULL,
    nota INT NOT NULL,
    descricao VARCHAR(50) NOT NULL,
    FOREIGN KEY (restauranteId) REFERENCES restaurantes(id),
    FOREIGN KEY (clienteId) REFERENCES clientes(id)
);

INSERT INTO categorias VALUES
("","Massas"),
("","Prato feito"),
("","Japonesa"),
("","Sobremesas"),
("","Hambúrguers");

INSERT INTO restaurantes VALUES
("","La massa", 1, "Rua das Sucupiras, 559"),
("","Prato bom", 2, "Rua dos Prédios, 777"),
("","Japayang", 3, "Rua do Peixe, 200"),
("","Mil Maravilhas",4, "Rua dos Alamos, 248"),
("","Tudo delícia", 5 , "Rua verde, 202");

INSERT INTO cardapio VALUES
("", 1, "Ravioli ao molho de nozes", 59.90),
("", 2, "Filé de frango à parmegiana", 20.00),
("", 3, "Missoshiru", 29.00),
("", 4, "Bomba de chocolate", 12.50),
("", 5, "California burger", 17.99);