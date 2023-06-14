DROP DATABASE IF EXISTS alugueis;
CREATE DATABASE alugueis CHARSET=UTF8 COLLATE utf8_general_ci;
USE alugueis;

CREATE TABLE Clientes (
  cpf VARCHAR(11) PRIMARY KEY,
  nome VARCHAR(50) NOT NULL,
  endereco VARCHAR(100) NOT NULL,
  telefone VARCHAR(15) NOT NULL
);

CREATE TABLE Carros (
  placa VARCHAR(8) PRIMARY KEY,
  modelo VARCHAR(50) NOT NULL,
  marca VARCHAR(50) NOT NULL,
  diaria DECIMAL(10, 2) NOT NULL
);

CREATE TABLE Aluguel(   
  cpf_Clientes VARCHAR(11) NOT NULL,
  id_aluguel VARCHAR(100) NOT NULL,
  aluguel DATE NOT NULL,
  devolucao DATE NOT NULL,
  valor DECIMAL(10, 2) NOT NULL,
  observacao TEXT NOT NULL,
  placa_Carros VARCHAR(8) NOT NULL,
  FOREIGN KEY (cpf_Clientes) REFERENCES Clientes(cpf),
  FOREIGN KEY (placa_Carros) REFERENCES Carros(placa)
);



LOAD DATA INFILE 'C:/Users/Aluno/Documents/Hemilly Nicole Alamos Droguetti/Senai2023 2des/03-bcd/recuperacao/carros.CSV'
INTO TABLE Carros
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Aluno/Documents/Hemilly Nicole Alamos Droguetti/Senai2023 2des/03-bcd/recuperacao/clientess.CSV'
INTO TABLE Clientes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Aluno/Documents/Hemilly Nicole Alamos Droguetti/Senai2023 2des/03-bcd/recuperacao/aluguel.CSV'
INTO TABLE Aluguel
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;