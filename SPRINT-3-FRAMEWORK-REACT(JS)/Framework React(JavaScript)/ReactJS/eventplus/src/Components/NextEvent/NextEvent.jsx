import React from 'react';
import { dateFormatDbToView } from "../../Utils/stringFunction";
import './NextEvent.css';
import { Tooltip } from "react-tooltip";

const NextEvent = ({title, description, eventDate, idEvento}) => {

    function conectar(idEvento) {
        alert(`Conectando ao evento : ${idEvento}`)
    }

    return (
        <article className='event-card'>
            <h2 
                className='event-card__title'
                data-tooltip-id="my-tooltip1"
                data-tooltip-content={title}
                data-tooltip-place="top"
            >
                <Tooltip className='tooltip' id="my-tooltip1" />
                {title.substr(0,16)}...
                </h2>

            <p className='event-card__description'

                data-tooltip-id="my-tooltip2"
                data-tooltip-content={description}
                data-tooltip-place="top"
            
            >
                <Tooltip className='tooltip' id="my-tooltip2" />
                {description .substr(0, 16)}...
                </p>    
            <p className='event-card__description'>{dateFormatDbToView(eventDate)}</p>    

            <a 
            onClick={() => {conectar(idEvento)}}
            href="" className='event-card__connect-link'>Conectar</a>
        </article>
    );
};

export default NextEvent;