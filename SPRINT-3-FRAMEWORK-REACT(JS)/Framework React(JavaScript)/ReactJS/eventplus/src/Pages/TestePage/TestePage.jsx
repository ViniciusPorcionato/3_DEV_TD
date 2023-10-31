import React from 'react';
import Button from '../../Components/Button/Button';
import Header from '../../Components/Header/Header';
import Input from '../../Components/Input/Input';

const TestePage = () => {
    return (
        <>
        <Header />
        <h1>Página de Testes</h1>
        <h2>Calculator</h2>
        <form>
            <Input/>
            <Input/>
            <br />
            <Button/>
        </form>
        </>
    );
};

export default TestePage;