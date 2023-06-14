DROP DATABASE IF EXISTS pizzaria;
CREATE DATABASE pizzaria;
USE pizzaria;

CREATE TABLE clientes(
    id_cliente INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    telefone VARCHAR(15) NOT NULL,
    nome VARCHAR(50) NOT NULL,
    endereco VARCHAR(30) NOT NULL,
    numero DECIMAL(5,0) NOT NULL,
    complemento VARCHAR(30),
    bairro VARCHAR(30) NOT NULL   
);

CREATE TABLE pedidos(
    id_pedido INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_cliente INT NOT NULL,
    data DATETIME NOT NULL,
    valor DECIMAL(5,2),
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
);

CREATE TABLE pizzas(
    id_pizza INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    descricao VARCHAR(30) NOT NULL,
    valor DECIMAL(4,2)
);

CREATE TABLE item_pedido(
    id_pizza INT NOT NULL,
    id_pedido INT NOT NULL,
    quantidade DECIMAL(2,0),
    valor DECIMAL(5,2),
    FOREIGN KEY (id_pedido) REFERENCES pedidos(id_pedido),
    FOREIGN KEY (id_pizza) REFERENCES pizzas(id_pizza)
);