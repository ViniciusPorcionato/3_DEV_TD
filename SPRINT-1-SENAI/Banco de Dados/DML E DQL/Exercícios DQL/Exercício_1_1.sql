--DQL EXERCICIO_1_1 

USE Exercicio_1_1

--- listar as pessoas em ordem alfabética reversa, mostrando seus telefones, seus e-mails e suas CNHs

--SCRIPT SEM USAR JOIN

SELECT P.Nome AS NomePessoa,Telefone.NumeroTelefone, E.Email AS Email, P.CNH AS CNH
FROM Pessoa AS P, Email AS E, Telefone
WHERE P.IdPessoa = E.IdPessoa AND P.IdPessoa = Telefone.IdPessoa
ORDER BY Nome DESC


INSERT INTO Pessoa (Nome, CNH) VALUES('Gustavo','7521489632'),('Eduardo','9637415820'),('Tiago','3478512048');

INSERT INTO Telefone(IdPessoa,NumeroTelefone) VALUES(3,'11587422685'),(4,'11254782365'),(5,'111472853698')

INSERT INTO Email(IdPessoa, Email) VALUES(3,'gustavo@email'), (4,'edu@email'),(5,'tigas@email')

SELECT * FROM Pessoa;



--SCRIPT USANDO JOIN

SELECT Nome,CNH,NumeroTelefone, Email
FROM Pessoa
INNER JOIN Telefone ON Pessoa.IdPessoa = Telefone.IdPessoa
INNER JOIN Email ON Pessoa.IdPessoa = Email.IdPessoa
ORDER BY Nome DESC
