USE inlock_games_td;

SELECT * FROM TiposUsuario;

SELECT * FROM Usuario;

SELECT * FROM Estudio;

SELECT * FROM Jogo;

SELECT Jogo.Nome AS Jogo,Estudio.Nome AS Estudio From Jogo
INNER JOIN Estudio
ON Jogo.IdEstudio = Estudio.IdEstudio;

SELECT Estudio.Nome AS Estudio,Jogo.Nome AS Jogo FROM Estudio
LEFT JOIN Jogo
ON Estudio.IdEstudio = Jogo.IdEstudio;

SELECT * FROM Usuario WHERE Email = 'cliente@cliente.com' AND Senha = 'cliente';

SELECT * FROM Jogo WHERE IdJogo = 4;

SELECT * FROM Estudio WHERE IdEstudio = 2;

SELECT Jogo.IdJogo,Jogo.Nome AS NomeJogo,Estudio.IdEstudio,Estudio.Nome AS NomeEstudio FROM Estudio
LEFT JOIN Jogo
ON Estudio.IdEstudio = Jogo.IdEstudio;

SELECT Jogo.IdJogo,Jogo.Nome AS NomeJogo,Jogo.DataLancamento,Jogo.Descricao,Estudio.Nome AS NomeEstudio, Jogo.Valor FROM Estudio
INNER JOIN Jogo
ON Estudio.IdEstudio = Jogo.IdEstudio;

SELECT Usuario.IdUsuario,Usuario.IdTipoUsuario,TiposUsuario.Titulo, Usuario.Email FROM Usuario
INNER JOIN TiposUsuario ON TiposUsuario.IdTipoUsuario = Usuario.IdTipoUsuario


