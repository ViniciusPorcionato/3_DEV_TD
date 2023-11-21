import React, { useState, useEffect } from 'react';
import MainContent from '../../Components/MainContent/MainContent';
import Title from '../../Components/Title/Title';
import ImageIllustrator from '../../Components/ImageIllustrator/ImageIllustrator';
import eventTypeImage from "../../Assets/images/tipo-evento.svg";
import './TipoEventosPage.css';
import Container from '../../Components/Container/Container';
import { Button, Input  } from "../../Components/FormComponents/FormComponents";
import api from "../../Services/Service";
import TableTp from './TableTp/TableTp';
import Notification from '../../Components/Notification/Notification';
import Spinner from '../../Components/Spinner/Spinner';



const TipoEventosPage = () => {

    const [notifyUser, setNotifyUser] = useState({})
    const [frmEdit, setFrmEdit] = useState(false);
    const [titulo, setTitulo] = useState("");
    const[idEvento, setIdEvento] = useState("");
    const[showSpinner, setShowSpinner] = useState(false);
    const[tipoEventos, setTipoEventos] = useState([]);

    //ao carregar a página
    useEffect(() => {

        //chamar a api
        async function getTipoEventos() {
            setShowSpinner(true);
            try {

                const promise = await api.get("/TiposEvento")

                console.log(promise.data);

                setTipoEventos(promise.data)

            } catch (error) {
                alert("Deu Ruim na API !!!")
            }
            setShowSpinner(false);
        }

        console.log("Deu Bom !!!");

        getTipoEventos()
    }, []);


    

    //  CADASTRAR
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
            const retorno = await api.post('/TiposEvento', { titulo: titulo }); //transforma em json para passar para api/banco

            setNotifyUser({
                titleNote: "Sucesso",
                textNote: `Cadastrado com sucesso!`,
                imgIcon: "success",
                imgAlt:
                "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok.",
                showMessage: true,
            });

            console.log(retorno.data);
            setTitulo("");//limpa a variável após enter/cadastro
            const retornoGet = await api.get('/TiposEvento');
            setTipoEventos(retornoGet.data)
        } catch (error) {
            setNotifyUser({
                titleNote: "Erro",
                textNote: `Deu ruim na API!`,
                imgIcon: "danger",
                imgAlt:
                "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok.",
                showMessage: true,
            });
        }
    }

    //EDITAR CADASTRO
    async function handleUpdate(e) {
        e.preventDefault();

        try {
            //salvar os dados
            const retorno = await api.put('/TiposEvento/' + idEvento, {
                titulo: titulo
            //propriedade : valor(state)
            })
            
            //atualizar o state
            const retornoGet = await api.get('/TiposEvento/');
            setTipoEventos(retornoGet.data);//atualiza o state da tabela
            //limpar o state
            editActionAbort();

            setNotifyUser({
                titleNote: "Sucesso",
                textNote: `Atualizado com sucesso!`,
                imgIcon: "success",
                imgAlt:
                "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok.",
                showMessage: true,
            });

        } catch (error) {
            setNotifyUser({
                titleNote: "Erro",
                textNote: `Erro na atualização!`,
                imgIcon: "danger",
                imgAlt:
                "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok.",
                showMessage: true,
            });
        }



    }


    function editActionAbort() {
        setFrmEdit(false);
        setTitulo('');
        setIdEvento(null);
    }

    async function showUpdateForm(idElemento) {
        
        setFrmEdit(true)

        try {
            
            const retornoGet = await api.get(`/TiposEvento/${idElemento}`);

            setTitulo(retornoGet.data.titulo)
            setIdEvento(retornoGet.data.idTipoEvento)

        } catch (error) {
            setNotifyUser({
                titleNote: "Aviso",
                textNote: `Não foi possivel mostrar a tela de edição. Tente novamente !!`,
                imgIcon: "warning",
                imgAlt:
                "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok.",
                showMessage: true,
            });
        }
}

    //deletar cadastro
    async function handleDelete(id) {
        try {
            const retorno = await api.delete(`/TiposEvento/${id}`)

            setNotifyUser({
                titleNote: "Sucesso",
                textNote: `Deletado com sucesso!`,
                imgIcon: "success",
                imgAlt:
                "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok.",
                showMessage: true,
            });

            const retornoGet = await api.get('/TiposEvento');
            setTipoEventos(retornoGet.data)

        } catch (error) {
            setNotifyUser({
                titleNote: "Erro",
                textNote: `Erro ao deletar!`,
                imgIcon: "danger",
                imgAlt:
                "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok.",
                showMessage: true,
            });
        }
    }

    return (
        <MainContent>

            <Notification {...notifyUser} setNotifyUser={setNotifyUser} />
            {showSpinner ? <Spinner/> : null}
            
            {/* CADASTRO DE TIPO DE EVENTOS */}

            <section className='cadastro-evento-section'>
                <Container>
                    <div className='cadastro-evento__box'>
                        <Title titleText={"Página Tipos de Eventos"} />
                        <ImageIllustrator
                            alterText={""}
                            imageRender={eventTypeImage}
                        />
                        <form className='ftipo-evento' onSubmit={frmEdit ? handleUpdate : handleSubmit}>
                            {!frmEdit ?
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

                                        <div className='buttons-editbox'>

                                            <Button
                                            textButton={"Atualizar"}
                                            id={"atualizar"}
                                            name={"atualizar"}
                                            type={"submit"}
                                            />

                                            <Button
                                            textButton={"Cancelar"}
                                            id={"cancelar"}
                                            name={"cancelar"}
                                            type={"button"}
                                            manipulationFunction={editActionAbort}
                                            
                                            />
                                        </div>
                                    </>
                                )
                            }
                        </form>
                    </div>
                </Container>
            </section>

            {/* LISTAGEM DE TIPO DE EVENTOS */}

            <section className="lista-eventos-section">
                <Container>

                    <Title titleText={"Lista Tipo de Eventos"} color="white" />

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