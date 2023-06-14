DROP DATABASE IF EXISTS estacionamento;
CREATE DATABASE estacionamento CHARSET=UTF8 COLLATE utf8_general_ci;
USE estacionamento;

CREATE TABLE Cliente (
  cpf VARCHAR(11) PRIMARY KEY,
  nome_cliente VARCHAR(50) NOT NULL,
  endereco VARCHAR(100) NOT NULL
);


CREATE TABLE Telefone (
  id_telefone INT PRIMARY KEY,
  id_cliente VARCHAR(11) REFERENCES Cliente(cpf),
  numero_telefone VARCHAR(15) NOT NULL
);


CREATE TABLE Estacionamento (
  id_estacionamento INT PRIMARY KEY,
  valor_estacionamento DECIMAL(10, 2) NOT NULL
);


CREATE TABLE Vaga (
  id_vaga INT PRIMARY KEY,
  id_estac INT REFERENCES Estacionamento(id_estacionamento),
  tipo_vaga VARCHAR(20) NOT NULL,
  descricao_vaga VARCHAR(50) NOT NULL,
  valor_vaga DECIMAL(10, 2) NOT NULL
);


CREATE TABLE Veiculo (
  placa VARCHAR(8) PRIMARY KEY,
  entrada DATETIME NOT NULL,
  saida DATETIME,
  id_vaga INT REFERENCES Vaga(id_vaga),
  modelo VARCHAR(50) NOT NULL,
  marca VARCHAR(50) NOT NULL,
  cor VARCHAR(20) NOT NULL
);
