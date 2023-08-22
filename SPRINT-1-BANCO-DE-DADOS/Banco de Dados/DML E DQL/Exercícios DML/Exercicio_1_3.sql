--DML - INSERIRI DADOS NAS TABELAS

USE Exercicio_1_3

--INSERIR DADOS NA TABELA

INSERT INTO Clinica(Nome,Endereco)
VALUES('PetClinica','Rua Niterói - SP'),('PetClinica','Rua Balaclava - SP')

INSERT INTO Dono(NomeDono,RG)
VALUES('Gabrielle CLementino','4852694122'),('Izabella Viscente','9647523548')

INSERT INTO TipoPet(NomeTipoPet)
VALUES('Cachorro'),('Gato'),('Tartaruga'),('Peixe')

INSERT INTO Raca(NomeRaca)
VALUES('Pastor Alemão'),('Gato Persa'),('Tartaruga pintada'),('Peixe Palhaço')


INSERT INTO Veterinario(IdClinica,NomeVeterinario,CRMV)
VALUES (1,'Vinicius Porcionato','74253654128452'),(2,'Vitor Porcionato','98521458745213')

INSERT INTO Pet(IdDono,IdTipoPet,IdRaca,NomePet,DataNascimento)
VALUES(2,1,1,'Amora','14/08/2021'),(3,4,4,'Nemo','25/12/2022')

INSERT INTO Atendimento(IdVeterinario,IdPet,Descricao,DataAtentimento)
VALUES(1,3,'Cirurgia ortopédica','28/11/2021'),(2,4,'Nutrição','10/02/2023')


