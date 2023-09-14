USE inlock_games_codeFirst_tarde

INSERT INTO Estudio VALUES(NEWID(),'EpicGames'),(NEWID(),'RiotGames')
SELECT * FROM Estudio

INSERT INTO Jogo VALUES(NEWID(),'Fortnite', 'Jogo de Batlle Royale','2017-07-21',39.99,'C6250437-5074-4749-B193-B039179A33BF'),
(NEWID(),'VALORANT', 'Jogo de FPS','2020-06-02',19.99,'1DD8F161-6347-4302-ABA4-E7C92120B301'),
(NEWID(),'Rocket League', 'Jogo de Futebol entre carros','2015-07-07',99.99,'C6250437-5074-4749-B193-B039179A33BF'),
(NEWID(),'League Of Legends', 'Jogos multijogador','2009-10-27',59.99,'1DD8F161-6347-4302-ABA4-E7C92120B301')
SELECT * FROM Jogo

INSERT INTO TiposUsuario VALUES(NEWID(),'Comum'),(NEWID(),'Administrador')
SELECT * FROM TiposUsuario

INSERT INTO Usuario VALUES(NEWID(),'comum1@email.com','comum123','5E6DB66B-97CE-4C7F-B7BF-6F44B7206003'),(NEWID(),'administrador1@email.com','administrador123','9A422DC5-0EC2-4C16-A9FD-B822570A69CE')
SELECT * FROM Usuario


SELECT * FROM Estudio
SELECT * FROM Jogo
SELECT * FROM TiposUsuario
SELECT * FROM Usuario