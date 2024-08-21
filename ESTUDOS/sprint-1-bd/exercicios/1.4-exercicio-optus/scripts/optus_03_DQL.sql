USE Optus;

SELECT * FROM Artistas;

SELECT * FROM Estilos;

SELECT * FROM Albuns;

SELECT * FROM TipoDeUsuarios;

SELECT * FROM Usuarios;

--DQL
-- listar todos os usu�rios administradores, sem exibir suas senhas
SELECT TipoDeUsuarios.Descricao,Usuarios.Nome,Usuarios.Email
FROM Usuarios,TipoDeUsuarios
WHERE TipoDeUsuarios.IdTipoDeUsuario = Usuarios.IdTipoDeUsuario AND TipoDeUsuarios.IdTipoDeUsuario = 1;

-- listar todos os �lbuns lan�ados ap�s o um determinado ano de lan�amento
SELECT Artistas.Nome AS Artista,Albuns.Titulo,Estilos.Nome AS Estilo,Albuns.DataLancamento,Albuns.Localizacao,Albuns.Minutos,Albuns.Vizualizacao FROM Albuns
INNER JOIN Estilos
ON Albuns.IdEstilo = Estilos.IdEstilo
INNER JOIN Artistas
ON Albuns.IdArtista = Artistas.IdArtista
WHERE Albuns.DataLancamento > '1993-06-20';

-- listar os dados de um usu�rio atrav�s do e-mail e senha
SELECT TipoDeUsuarios.Descricao,Usuarios.Nome,Usuarios.Email,Usuarios.Senha
FROM Usuarios,TipoDeUsuarios
WHERE Usuarios.Email = 'bruno@admin.com.br' AND Usuarios.Senha = '1234' AND TipoDeUsuarios.IdTipoDeUsuario = Usuarios.IdTipoDeUsuario;

-- listar todos os �lbuns ativos, mostrando o nome do artista e os estilos do �lbum
SELECT Artistas.Nome AS Artista,Albuns.Titulo,Estilos.Nome AS Estilo FROM Albuns
INNER JOIN Estilos
ON Albuns.IdEstilo = Estilos.IdEstilo
INNER JOIN Artistas
ON Albuns.IdArtista = Artistas.IdArtista;
