--DML - INSERIRI DADOS NAS TABELAS

-- USAR BD
USE Exercicio_1_1

--INSERIR DADOS NA TABELA
INSERT INTO Pessoa(Nome,CNH)
VALUES('Vinicius','1234567890'),('Vitor','0963852741')

INSERT INTO Telefone(IdPessoa,NumeroTelefone)
VALUES(1,'11932052496'),(2,'11963258741')


INSERT INTO Email(IdPessoa, Email)
VALUES(1,'vinicius@email'), (2,'vitor@email')

SELECT * FROM Pessoa
SELECT * FROM Telefone
SELECT * FROM Email