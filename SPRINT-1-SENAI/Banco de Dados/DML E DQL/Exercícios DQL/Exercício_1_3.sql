--DQL EXERCICIO_1_3 

-- listar todos os veterinários (nome e CRMV) de uma clínica (razão social)
-- listar todas as raças que começam com a letra S
-- listar todos os tipos de pet que terminam com a letra O
-- listar todos os pets mostrando os nomes dos seus donos
-- listar todos os atendimentos mostrando o nome do veterinário que atendeu, o nome, a raça e o tipo do pet que foi atendido, o nome do dono do pet e o nome da clínica onde o pet foi atendido

USE Exercicio_1_3

---------------------------------------------------------------------------------------------------
SELECT Veterinario.NomeVeterinario, Veterinario.CRMV, Clinica.Nome AS NomeClinica
FROM Atendimento
INNER JOIN Veterinario ON Atendimento.IdVeterinario = Veterinario.IdVeterinario
INNER JOIN Clinica ON Clinica.IdClinica = Veterinario.IdClinica
---------------------------------------------------------------------------------------------------

---------------------------------------------------------------------------------------------------
SELECT Raca.NomeRaca
FROM Raca WHERE NomeRaca LIKE 's%'
 ---------------------------------------------------------------------------------------------------



---------------------------------------------------------------------------------------------------
 SELECT TipoPet.NomeTipoPet
 FROM TipoPet WHERE NomeTipoPet LIKE '%o'
---------------------------------------------------------------------------------------------------

---------------------------------------------------------------------------------------------------
SELECT Pet.NomePet, Dono.NomeDono
FROM Pet
INNER JOIN Dono ON Pet.IdDono = Dono.IdDono

---------------------------------------------------------------------------------------------------


---------------------------------------------------------------------------------------------------
SELECT Atendimento.IdAtendimento, Veterinario.NomeVeterinario, Pet.NomePet, Raca.NomeRaca, TipoPet.NomeTipoPet AS TiposPet, Dono.NomeDono, Clinica.Nome AS NomeClinica
FROM Atendimento
INNER JOIN Veterinario ON Atendimento.IdVeterinario = Veterinario.IdVeterinario
INNER JOIN Pet ON Atendimento.IdPet = Pet.IdPet
INNER JOIN Raca ON Pet.IdRaca = Raca.IdRaca
INNER JOIN TipoPet ON Pet.IdTipoPet = TipoPet.IdTipoPet
INNER JOIN Dono ON Pet.IdDono = Dono.IdDono
INNER JOIN Clinica ON Veterinario.IdClinica = Clinica.IdClinica
---------------------------------------------------------------------------------------------------

