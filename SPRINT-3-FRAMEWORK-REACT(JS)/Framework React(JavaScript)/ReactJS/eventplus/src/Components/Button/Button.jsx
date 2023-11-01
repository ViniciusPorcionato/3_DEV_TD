import React from 'react';

const Button = (props) => {
    return (
        <button type={props.tipoBotao}>{props.textoBotao}</button>
    );
};

export default Button;