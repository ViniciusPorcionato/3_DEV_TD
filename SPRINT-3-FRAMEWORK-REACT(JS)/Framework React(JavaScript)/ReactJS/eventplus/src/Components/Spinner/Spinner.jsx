import React from 'react';
import spinner from '../../Assets/images/spinner-loading.svg';
import './Spinner.css'

const Spinner = ({ alt = '', width ='35px', height ='35px' }) => {
    return (
        <img
        className='spinner'
        src={spinner}
        alt={alt}
        width={width}
        height={height}
        />
            

    );
};

export default Spinner;