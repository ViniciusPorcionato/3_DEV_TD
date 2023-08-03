--DML - INSERIRI DADOS NAS TABELAS

USE Exercicio_1_2

--INSERIR DADOS NA TABELA
INSERT INTO Empresa(NomeEmpresa,Endereco)
VALUES('Auto Veiculos','Rua Niterói - SP'),('Auto Veiculos','Rua Balaclava - SP')

INSERT INTO Marca(NomeMarca)
VALUES('BMW'),('Fiat'),('GM'),('Ford')

INSERT INTO Modelo(NomeModelo)
VALUES('BWM X5'),('Argo'),('Onix'),('Fiesta')

INSERT INTO Cliente(NomeCliente,CPF)
VALUES('Vinicius', '12365478912'),('Vitor', '96325874115'),('Tiago', '65412398745')

INSERT INTO Veiculos(IdEmpresa,IdMarca,IdModelo,Placa)
VALUES (2,1,1,'QTP5F71'),(1,2,2,'MLK7Y56'),(2,3,3,'PAS5H22'),(1,4,4,'FEZ4R17')

INSERT INTO Aluguel(IdVeiculo,IdCliente,Protocolo,DataRetirada,DataEntrega)
VALUES(3,1,'DG19BDBR195BWER96P','2023-08-01','2023-08-31'),(1,2,'LK9HN2NH634HEFGT94','2019-04-01','2019-04-30'),
(2,1,'WSCV452VBG87HYR632D','2015-01-01','2015-03-31'),(4,2,'FSVH742D7HJ8K236DG','2014-08-1','2014-09-30')


SELECT * FROM Empresa
SELECT * FROM Marca
SELECT * FROM Modelo
SELECT * FROM Cliente
SELECT * FROM Veiculos
SELECT * FROM Aluguel