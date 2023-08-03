USE Exercicio_1_4

INSERT INTO Artistas(NomeArtista)
VALUES('Thiago Veigh'),('Kyan'),('Wiu'),('MC Ryan SP'),('Shalon Israel')

INSERT INTO Usuarios(NomeUsuario,Email,Senha,Permissão)
VALUES('Vinicius','vinicius@email.com','158742',1),('Vitor','vitor@email.com','458219',0)

INSERT INTO Estilos(NomeEstilo)
VALUES('Trap'),('Funk'),('Reggae'),('Gospel')


INSERT INTO Albuns(IdArtista,Titulo,DataLancamento,Localizacao,QtdMinutos,Ativo)
VALUES(1,'Dos Prédios','2022-11-18','SP','39min5s',1),
(2,'Um Quebrada Inteligente','2023-07-13','SP','18min50s',1),
(3,'Manual de Como Amar Errado','2023-11-29','SP','40min37s',1)


INSERT INTO AlbunsEstilos(IdAlbum,IdAEstilo)
VALUES(1,1),(2,1),(3,1)

SELECT * FROM Artistas
SELECT * FROM Albuns
SELECT * FROM Estilos
SELECT * FROM AlbunsEstilos

