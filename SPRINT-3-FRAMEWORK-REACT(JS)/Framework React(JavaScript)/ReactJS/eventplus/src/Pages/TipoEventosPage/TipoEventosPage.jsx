import React, { useState } from 'react';
import MainContent from '../../Components/MainContent/MainContent';
import Title from '../../Components/Title/Title';
import ImageIllustrator from '../../Components/ImageIllustrator/ImageIllustrator';
import eventTypeImage from "../../Assets/images/tipo-evento.svg";
import './TipoEventosPage.css';
import Container from '../../Components/Container/Container';
import { Input  } from "../../Components/FormComponents/FormComponents";

const [titulo, setTitulo] = useState();
const [frmEdit, setFrmEdit] = useState(false);//esta em modo de edição??

function handleSubmit() {
    alert('Bora cadastrar !')
}
function handleUpdate() {
    alert('Bora Editar !')
}

const TipoEventosPage = () => {
    return (
        <MainContent>
            <section className='cadastro-evento-section'>
                <Container>
                    <div className='cadastro-evento__box'>
                        <Title titleText={"Página Tipos de Eventos"}/>
                        <ImageIllustrator 
                            alterText={""}
                            imageRender={eventTypeImage}
                        />
                        <form onSubmit={frmEdit ? handleUpdate : handleSubmit}>
                            <Input
                                type={"text"}
                                placeholder={"Titulo"}
                                required={"required"}
                                value={titulo}
                                manipulationFunction={(e) => {
                                    setTitulo=(e.target.value)
                                }}
                            />
                        </form>
                    </div>
                </Container>

            </section>
        </MainContent>
    );
};

export default TipoEventosPage;