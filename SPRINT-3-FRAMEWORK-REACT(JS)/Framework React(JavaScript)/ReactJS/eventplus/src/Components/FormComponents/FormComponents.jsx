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