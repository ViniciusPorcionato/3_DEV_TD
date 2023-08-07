-- DQL - Data Query Language

USE Exercicio_1_4


-------------------------------------------------------------------------------------------------------------

SELECT * FROM Albuns

-- listar todos os usuários administradores, sem exibir suas senhas
SELECT
	Usuarios.NomeUsuario,
	Usuarios.Email,
	Usuarios.Permissão
FROM Usuarios
WHERE Usuarios.Permissão = '1'

-------------------------------------------------------------------------------------------------------------

-- listar todos os álbuns lançados após o um determinado ano de lançamento
SELECT
	Albuns.Titulo AS 'Título do Álbum',
	Albuns.DataLancamento AS 'Data de Lançamento',
	Albuns.Localizacao AS 'Localização',
	Albuns.QtdMinutos AS 'Duração',
	Albuns.Ativo AS 'Ativo?',
	Artistas.NomeArtista,
	Estilos.NomeEstilo
FROM Albuns
	INNER JOIN Artistas ON Albuns.IdArtista = Artistas.IdArtista
	INNER JOIN AlbunsEstilos ON Albuns.IdAlbum = AlbunsEstilos.IdAlbum
	INNER JOIN Estilos ON AlbunsEstilos.IdAEstilo = Estilos.IdEstilo
WHERE
	-- Mostra somente os álbuns lançados em 2023 e em diante
	Albuns.DataLancamento > '2023'


-------------------------------------------------------------------------------------------------------------

-- listar os dados de um usuário através do e-mail e senha
SELECT
	Usuarios.NomeUsuario,
	Usuarios.Email,
	Usuarios.Senha,
	Usuarios.Permissão
FROM Usuarios
WHERE Usuarios.Email LIKE 'vinicius@email.com'
	AND Usuarios.Senha LIKE '158742'

-------------------------------------------------------------------------------------------------------------

-- listar todos os álbuns ativos, mostrando o nome do artista e os estilos do álbum
SELECT
	Albuns.Titulo AS 'Título do Álbum',
	Albuns.DataLancamento AS 'Data de Lançamento',
	Albuns.Localizacao AS 'Localização',
	Albuns.QtdMinutos AS 'Duração',
	Albuns.Ativo AS 'Ativo?',
	Artistas.NomeArtista AS 'Artista',
	Estilos.NomeEstilo AS 'Estilo'
FROM Albuns
	INNER JOIN Artistas ON Albuns.IdArtista = Artistas.IdArtista
	INNER JOIN AlbunsEstilos ON Albuns.IdAlbum = AlbunsEstilos.IdAlbum
	INNER JOIN Estilos ON AlbunsEstilos.IdAEstilo = Estilos.IdEstilo
WHERE
	-- Mostra somente os álbuns ativos
	Albuns.Ativo LIKE 1


