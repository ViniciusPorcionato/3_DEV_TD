USE Clinicas;

--consulta de todos os campos das tabelas do bd
SELECT * FROM Pets;

SELECT * FROM Donos;

SELECT * FROM Racas;

SELECT * FROM Tipos;

SELECT * FROM Clinicas;

SELECT * FROM Veterinarios;

SELECT * FROM Atendimentos;

--DQL

-- listar todos os veterin�rios (nome e CRMV) de uma cl�nica (raz�o social)
SELECT Veterinarios.Nome,Veterinarios.CRMV,Clinicas.Nome AS [Raz�o Social] FROM Veterinarios
INNER JOIN Clinicas
ON Veterinarios.IdClinica = Clinicas.IdClinica
WHERE Clinicas.IdClinica = 1;

-- listar todas as ra�as que come�am com a letra S
SELECT Racas.NomeRaca FROM Racas
WHERE NomeRaca LIKE 'S%'

-- listar todos os tipos de pet que terminam com a letra O
SELECT Tipos.TipoPEt FROM Tipos
WHERE TipoPEt LIKE'%O'

-- listar todos os pets mostrando os nomes dos seus donos
SELECT Donos.Nome AS NomeDono,Pets.Nome AS NomePet,Racas.NomeRaca,Pets.Telefone FROM Donos
INNER JOIN Pets
ON Donos.IdDono = Pets.IdDono
INNER JOIN Racas
ON Racas.IdRaca = Pets.IdRaca;

-- listar todos os atendimentos mostrando o nome do veterin�rio que atendeu, o nome, a ra�a e o tipo do pet que foi atendido, o nome do dono do pet e o nome da cl�nica onde o pet foi atendido
SELECT Atendimentos.Servico AS [Servi�o],Veterinarios.Nome AS [Veterin�rio],Pets.Nome AS NomePet,Racas.NomeRaca,Tipos.TipoPEt AS Tipo,Donos.Nome AS NomeDono,Clinicas.Nome AS [Cl�nica] FROM Atendimentos
INNER JOIN Pets
ON Pets.IdPet = Atendimentos.IdPet
INNER JOIN Racas
ON Racas.IdRaca = Pets.IdRaca
INNER JOIN Veterinarios
ON Veterinarios.IdVeterinario = Atendimentos.IdVeterinario
INNER JOIN Tipos
ON Tipos.IdTipo = Racas.IdTipo
INNER JOIN Donos
ON Donos.IdDono = Pets.IdDono
INNER JOIN Clinicas
ON Clinicas.IdClinica = Veterinarios.IdClinica;