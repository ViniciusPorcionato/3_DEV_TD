import React, { useState } from 'react';
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';

const TestePage = () => {

    const [total, setTotal] = useState();
    const [n1, setN1] = useState();
    const [n2, setN2] = useState();

    function handleCalcular(e) {
        e.preventDefault();
        setTotal(parseFloat(n1) + parseFloat(n2));
    }
    

    return (
        <>
        <h1>Página de Testes</h1>
        <h2>Calculator</h2>
        <form onSubmit={handleCalcular}>
            <Input
                tipo="number"
                dicaCampo="Insira o primeiro número"
                id="num1"
                nome="num1"
                valor={n1}
                fnAltera={setN1}
            />
            <br />
            <Input
                tipo="number"
                dicaCampo="Insira o segundo número"
                id="num2"
                nome="num2"
                valor={n2}
                fnAltera={setN2}
                

            />
            <br />
            <Button
            tipoBotao="submit"
            textoBotao="Calcular"
            />
            <p>Resultado: <strong>{total}</strong></p>
        </form>
        </>
    );
};

export default TestePage;