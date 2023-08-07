--DQL EXERCICIO_1_2 
-- listar todos os alugueis mostrando as datas de início e fim, o nome do cliente que alugou e nome do modelo do carro
-- listar os alugueis de um determinado cliente mostrando seu nome, as datas de início e fim e o nome do modelo do carro

USE Exercicio_1_2

SELECT Aluguel.IdAluguel, Aluguel.DataRetirada,Aluguel.DataEntrega,Cliente.NomeCliente, Modelo.NomeModelo
FROM Aluguel
INNER JOIN Cliente ON Aluguel.IdCliente = Cliente.IdCliente
INNER JOIN Veiculos ON Aluguel.IdVeiculo = Veiculos.IdVeiculo
INNER JOIN Modelo ON Veiculos.IdModelo = Modelo.IdModelo


SELECT Aluguel.IdAluguel, Aluguel.DataRetirada,Aluguel.DataEntrega,Cliente.NomeCliente, Modelo.NomeModelo
FROM Aluguel
INNER JOIN Cliente ON Aluguel.IdCliente = Cliente.IdCliente
INNER JOIN Veiculos ON Aluguel.IdVeiculo = Veiculos.IdVeiculo
INNER JOIN Modelo ON Veiculos.IdModelo = Modelo.IdModelo
WHERE NomeCliente LIKE '%Vinicius%'

