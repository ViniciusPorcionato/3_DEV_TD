import React, { useState } from 'react';
import MainContent from '../../Components/MainContent/MainContent';
import Title from '../../Components/Title/Title';
import ImageIllustrator from '../../Components/ImageIllustrator/ImageIllustrator';
import eventTypeImage from "../../Assets/images/tipo-evento.svg";
import './TipoEventosPage.css';
import Container from '../../Components/Container/Container';
import { Button, Input  } from "../../Components/FormComponents/FormComponents";
import api from "../../Services/Service";



const TipoEventosPage = () => {

    const [frmEdit, setFrmEdit] = useState(false);
    const [titulo, setTitulo] = useState("");

    async function handleSubmit(e) {
        //parar o submit do formulário
        e.preventDefault();
        //validar pelo menos 3 caracteres
        if (titulo.trim().length < 3) {
            alert('O Titulo deve ter no minimo 3 caracteres')
            return;
        }
        //chamar API
        try {
            const retorno = await api.post('/TiposEvento', {titulo: titulo})
            console.log("Cadastrado com sucesso !");
            console.log(retorno.data);
            setTitulo("");//limpa a variavel 
        } catch (error) {
            console.log("Deu ruim na API");
            console.log(error);
        }
    }
    function handleUpdate() {
        alert('Bora atualizar')
    }

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
                        <form className='ftipo-evento' onSubmit={frmEdit ? handleUpdate : handleSubmit}>
                            {!frmEdit?
                                (<>
                                
                                    <Input
                                        id={"titulo"}
                                        name={"titulo"}
                                        type={"text"}
                                        placeholder={"Titulo"}
                                        required={"required"}
                                        value={titulo}
                                        manipulationFunction={
                                            (e) => {
                                                setTitulo(e.target.value)
                                            }
                                        }
                                    />
                                    <Button
                                    textButton={"Cadastrar"} 
                                    id={"cadastrar"} 
                                    name={"cadastrar"}
                                    type={"submit"}
                                    />

                                </>)
                            :
                                (
                                    <>
                                    Tela de Login
                                    </>
                                )
                            }
                        </form>
                    </div>
                </Container>
            </section>
        </MainContent>
    );
};

export default TipoEventosPage;