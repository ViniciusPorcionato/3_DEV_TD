USE Clinicas;

INSERT INTO Donos (Nome)
VALUES ('Carlos'),('Paulo');

INSERT INTO Tipos (TipoPEt)
VALUES ('Su�no'),('Reptil'),('Ave');

INSERT INTO Racas (IdTipo,NomeRaca)
VALUES ('1','Shiba Inu'),('2','Siberiano');

INSERT INTO Pets (IdDono,IdRaca,Nome,DataNascimento,Telefone)
VALUES (1,2,'Doug','2019-02-20','997472686'),(2,3,'Fred','2018-05-05','947589659');

INSERT INTO Clinicas (Nome,Endereco)
VALUES ('PetShop','Av Paulista,1200,Jd Paulista,S�o Paulo'),('DogPet','Av Faria Lima,500,Jd Europa');

INSERT INTO Veterinarios (IdClinica,Nome,CRMV)
VALUES (1,'Dr Takae','RJ5000'),(2,'Dra Simone','SP3650');

INSERT INTO Atendimentos (IdPet,IdVeterinario,Servico,DataAtendimento,ValorConsulta)
VALUES (1,1,'Castra��o','2019-05-15','575'),(2,2,'Cirurgia Card�aca','2019-05-15','1350');

--fazendo update da tabela clinicas
UPDATE Clinicas
SET Endereco = 'Av Faria Lima,500,Jd Europa,S�o Paulo'
WHERE IdClinica = 2;

