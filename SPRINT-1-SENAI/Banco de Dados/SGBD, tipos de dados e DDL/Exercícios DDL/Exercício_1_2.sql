--CRIAR BD
CREATE DATABASE Exerc�cio_1_2

--USAR BD
USE Exercicio_1_2

--CRIAR TABELAS

CREATE TABLE Empresa(

IdEmpresa INT PRIMARY KEY IDENTITY,
NomeEmpresa VARCHAR(30) NOT NULL,
Endereco VARCHAR(50) NOT NULL

);

CREATE TABLE Marca(

IdMarca INT PRIMARY KEY IDENTITY,
NomeMarca VARCHAR(20) NOT NULL

);

CREATE TABLE Modelo(

IdModelo INT PRIMARY KEY IDENTITY,
NomeModelo VARCHAR(20) NOT NULL

);

CREATE TABLE Cliente(

IdCliente INT PRIMARY KEY IDENTITY,
NomeCliente VARCHAR(50) NOT NULL,
CPF VARCHAR(11) NOT NULL UNIQUE

);

CREATE TABLE Veiculos(

IdVeiculo INT PRIMARY KEY IDENTITY,
IdEmpresa INT FOREIGN KEY REFERENCES Empresa(IdEmpresa) NOT NULL,
IdMarca INT FOREIGN KEY REFERENCES Marca(IdMarca) NOT NULL,
IdModelo INT FOREIGN KEY REFERENCES Modelo(IdModelo) NOT NULL,
Placa VARCHAR(20) NOT NULL UNIQUE

);

CREATE TABLE Aluguel(

IdAluguel INT PRIMARY KEY IDENTITY,
IdVeiculo INT FOREIGN KEY REFERENCES Veiculos(IdVeiculo) NOT NULL,
IdCliente INT FOREIGN KEY REFERENCES Cliente(IdCliente) NOT NULL,
Protocolo VARCHAR(20)

);

SELECT * FROM Empresa
SELECT * FROM Marca
SELECT * FROM Modelo
SELECT * FROM Cliente
SELECT * FROM Veiculos
SELECT * FROM Aluguel