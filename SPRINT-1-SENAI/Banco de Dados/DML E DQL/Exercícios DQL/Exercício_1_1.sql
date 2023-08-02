--DQL EXERCICIO_1_1 

USE Exercicio_1_1

--- listar as pessoas em ordem alfabética reversa, mostrando seus telefones, seus e-mails e suas CNHs

--SCRIPT SEM USAR JOIN

SELECT P.Nome AS NomePessoa,Telefone.NumeroTelefone, E.Email AS Email, P.CNH AS CNH
FROM Pessoa AS P, Email AS E, Telefone
WHERE P.IdPessoa = E.IdPessoa AND P.IdPessoa = Telefone.IdPessoa
ORDER BY Nome DESC


INSERT INTO Pessoa (Nome, CNH) VALUES('Gustavo','7521489632'),('Eduardo','9637415820'),('Tiago','3478512048');

SELECT * FROM Pessoa;