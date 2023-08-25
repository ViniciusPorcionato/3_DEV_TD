CREATE DATABASE Filmes_TD
USE Filmes_TD

CREATE TABLE Genero
(
	IdGenero INT PRIMARY KEY IDENTITY,
	Nome VARCHAR(50)
)

CREATE TABLE Filme
(
	IdFilme INT PRIMARY KEY IDENTITY,
	IdGenero INT FOREIGN KEY REFERENCES Genero(IdGenero),
	Titulo VARCHAR(50)
)

INSERT INTO Genero(Nome)
VALUES ('Joana D Arc')
SELECT * FROM Genero

INSERT INTO Genero(Nome)
VALUES ('Terror'),('Romance'),('Comédia'),('Drama')
SELECT * FROM Genero


INSERT INTO Filme(IdGenero,Titulo)
VALUES(1,'Invocação do Mal'),(3,'Gente Grande')

SELECT * FROM Genero WHERE IdGenero = 1
SELECT * FROM Genero

