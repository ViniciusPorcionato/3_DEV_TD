//primeiro import React
import React, { useState } from "react";

//Segundo Import CSS
import './Contador.css';

const Contador = () => {

    //criar hook
    const [contador, setContador] = useState(0);

    function handleIncrementar() {
        setContador(contador + 1);

    }

    function handleDecrementar() {

        setContador(contador - 1);

        if (contador <= 0 ) { 
            setContador(0)
        }
        
    }

    function handleReset() {
        setContador(0);
    }

    function Terminar() {
        alert('FIM')
    }

    return (
        //fragment <> </>
        <>
            <p>{contador}</p>
            <button onClick={() => {handleIncrementar()}}>Incrementar</button>
            <button onClick={() => {handleDecrementar()}}>Decrementar</button>
            <button onClick={() => {handleReset()}}>Reset</button>
        </>
    );

};

//exportar componente
export default Contador;