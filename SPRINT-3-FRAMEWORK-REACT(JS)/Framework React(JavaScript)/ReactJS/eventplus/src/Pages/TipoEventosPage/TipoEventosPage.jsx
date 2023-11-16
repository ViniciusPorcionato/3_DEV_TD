import React, { useState } from 'react';
import MainContent from '../../Components/MainContent/MainContent';
import Title from '../../Components/Title/Title';
import ImageIllustrator from '../../Components/ImageIllustrator/ImageIllustrator';
import eventTypeImage from "../../Assets/images/tipo-evento.svg";
import './TipoEventosPage.css';
import Container from '../../Components/Container/Container';
import { Button, Input  } from "../../Components/FormComponents/FormComponents";
import api from "../../Services/Service";
import TableTp from './TableTp/TableTp';



const TipoEventosPage = () => {

    const [frmEdit, setFrmEdit] = useState(false);
    const [titulo, setTitulo] = useState("");

    const[tipoEventos, setTipoEventos] = useState([
        {idTipoEvento: "123", titulo: "Teste1"},
        {idTipoEvento: "456", titulo: "Teste2"}
    ]);

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

    //EDITAR CADASTRO
    function handleUpdate() {
        alert('Bora atualizar')
    }
    function editActionAbort() {
        alert('Cancelar a tela de edição de dados')
    }

    function showUpdateForm() {
        alert('Mostrando a tela de Update')
    }

    function handleDelete() {
        alert('Bora la apagar na API')
    }

    return (
        <MainContent>
            {/* Cadastro de tipo de eventos */}
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

            {/* Listagem de tipo de eventos */}
            <section className='lista-eventos-section'>
                <Container>
                    <Title titleText={"Lista de Tipo de Eventos"} color="white"/>
                    <TableTp
                    dados={tipoEventos}
                    fnUpdate={showUpdateForm}
                    fnDelete={handleDelete}
                    />
                </Container>
            </section>
            
        </MainContent>
    );
};

export default TipoEventosPage;