-- DML - DATA MANIPULATION LANGUAGE

INSERT INTO Funcionarios(Name)
VALUES('VITOR')

UPDATE Funcionarios
SET Name = 'Vitor' WHERE [Name] = 'VITOR'

DELETE FROM Funcionarios WHERE IdFuncionario = 6



---------------------------------------------------------

INSERT INTO Empresas(IdFuncionario, [Name])
VALUES (4,'Yahoo')