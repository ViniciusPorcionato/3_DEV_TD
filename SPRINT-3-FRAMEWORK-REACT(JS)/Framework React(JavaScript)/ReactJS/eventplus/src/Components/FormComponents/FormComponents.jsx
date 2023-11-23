import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import './FormComponents.css';

export const Input = ({
type,
id,
value,
required,
additionalClass,
name,
placeholder,
manipulationFunction

}) => {
    return(
        <input 
        type={type}
        id={id}
        name={name}
        value={value}
        required={required}
        className={`input-component ${additionalClass}`}
        placeholder={placeholder}
        onChange={manipulationFunction}
        autoComplete='off'
        
        />
    );
}

export const Button = ({ 
    textButton, 
    id, 
    name, 
    type, 
    additionalClass = "",
    manipulationFunction 
}) => {

    return(
        <button 
        type={type}
        name={name}
        id={id}
        className={`button-component ${additionalClass}`}
        onClick={manipulationFunction}
        >{textButton}
        </button>
    );
}

export const Select = ({
    options = [],
    id,
    name,
    required,
    additionalClass = "",
    manipulationFunction,
    defaultValue
}) => {
    return(
        <select 
        name={name} 
        required={required}
        className={`input-component ${additionalClass}`}
        onChange={manipulationFunction}
        value={defaultValue}
        id={id}
        >
            <option value="">Selecione</option>
            {options.map((opt) => {
                return(
                    <option key={opt.idTiposEvento} value={opt.idTiposEvento}>{opt.titulo}</option>
                );
            })}
        </select>
    );
}