import React, { useState } from 'react';

const Input = (props) => {

    return (
        <div>
            <input 
            type={props.tipo} 
            placeholder={props.dicaCampo}
            id={props.id}
            name={props.nome}
            value={props.valor}
            onChange={(e) => {
                
                props.fnAltera(e.target.value)

            }}
            />
            <span>{props.valor}</span>
        </div>
    );
};

export default Input;