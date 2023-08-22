-- DQL - Data Query Language

USE Exercicio_1_4


-------------------------------------------------------------------------------------------------------------

SELECT * FROM Albuns

-- listar todos os usu�rios administradores, sem exibir suas senhas
SELECT
	Usuarios.NomeUsuario,
	Usuarios.Email,
	Usuarios.Permiss�o
FROM Usuarios
WHERE Usuarios.Permiss�o = '1'

-------------------------------------------------------------------------------------------------------------

-- listar todos os �lbuns lan�ados ap�s o um determinado ano de lan�amento
SELECT
	Albuns.Titulo AS 'T�tulo do �lbum',
	Albuns.DataLancamento AS 'Data de Lan�amento',
	Albuns.Localizacao AS 'Localiza��o',
	Albuns.QtdMinutos AS 'Dura��o',
	Albuns.Ativo AS 'Ativo?',
	Artistas.NomeArtista,
	Estilos.NomeEstilo
FROM Albuns
	INNER JOIN Artistas ON Albuns.IdArtista = Artistas.IdArtista
	INNER JOIN AlbunsEstilos ON Albuns.IdAlbum = AlbunsEstilos.IdAlbum
	INNER JOIN Estilos ON AlbunsEstilos.IdAEstilo = Estilos.IdEstilo
WHERE
	-- Mostra somente os �lbuns lan�ados em 2023 e em diante
	Albuns.DataLancamento > '2023'


-------------------------------------------------------------------------------------------------------------

-- listar os dados de um usu�rio atrav�s do e-mail e senha
SELECT
	Usuarios.NomeUsuario,
	Usuarios.Email,
	Usuarios.Senha,
	Usuarios.Permiss�o
FROM Usuarios
WHERE Usuarios.Email LIKE 'vinicius@email.com'
	AND Usuarios.Senha LIKE '158742'

-------------------------------------------------------------------------------------------------------------

-- listar todos os �lbuns ativos, mostrando o nome do artista e os estilos do �lbum
SELECT
	Albuns.Titulo AS 'T�tulo do �lbum',
	Albuns.DataLancamento AS 'Data de Lan�amento',
	Albuns.Localizacao AS 'Localiza��o',
	Albuns.QtdMinutos AS 'Dura��o',
	Albuns.Ativo AS 'Ativo?',
	Artistas.NomeArtista AS 'Artista',
	Estilos.NomeEstilo AS 'Estilo'
FROM Albuns
	INNER JOIN Artistas ON Albuns.IdArtista = Artistas.IdArtista
	INNER JOIN AlbunsEstilos ON Albuns.IdAlbum = AlbunsEstilos.IdAlbum
	INNER JOIN Estilos ON AlbunsEstilos.IdAEstilo = Estilos.IdEstilo
WHERE
	-- Mostra somente os �lbuns ativos
	Albuns.Ativo LIKE 1


