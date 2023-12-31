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

export const SelectEvt = ({
    dados = [],
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
            {dados.map((opt) => {
                return(
                    <option key={opt.idTipoEvento} value={opt.idTipoEvento}>{opt.titulo}</option>
                );
            })}
        </select>
    );
}
export const Select = ({
    dados = [],
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
            {dados.map((opt) => {
                return(
                    <option key={opt.value} value={opt.value}>{opt.text}</option>
                );
            })}
        </select>
    );
}