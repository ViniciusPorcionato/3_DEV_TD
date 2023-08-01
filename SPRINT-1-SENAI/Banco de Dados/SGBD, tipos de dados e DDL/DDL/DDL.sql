--DDL - Data Definittion Language
--Cria banco de Dados
CREATE DATABASE BancoTarde;

-------------------------------------
--Usa o Banco de Dados
USE BancoTarde;

-------------------------------------
--Cria Tabela
CREATE TABLE Funcionarios(

IdFuncionario INT PRIMARY KEY IDENTITY,
[Name] VARCHAR(10)
);


-------------------------------------
CREATE TABLE Empresas(

IdEmpresa INT PRIMARY KEY IDENTITY,
IdFuncionario INT FOREIGN KEY REFERENCES Funcionarios(IdFuncionario),
[Name] VARCHAR(20)

);



-------------------------------------
--Alterar tabela
ALTER TABLE Funcionarios
ADD Cpf VARCHAR(11)



ALTER TABLE Funcionarios
DROP COLUMN Cpf



DROP TABLE Empresas;

DROP DATABASE BancoTarde;