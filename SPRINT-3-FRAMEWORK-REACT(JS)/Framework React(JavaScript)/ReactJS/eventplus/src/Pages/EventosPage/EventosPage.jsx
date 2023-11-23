import React, { useState, useEffect } from 'react';
import './EventosPage.css';
import MainContent from '../../Components/MainContent/MainContent';
import Container from '../../Components/Container/Container';
import Title from '../../Components/Title/Title';
import ImageIllustrator from '../../Components/ImageIllustrator/ImageIllustrator';
import eventImage from '../../Assets/images/evento.svg'
import { Input, Button, Select } from '../../Components/FormComponents/FormComponents';
import api from "../../Services/Service";
import TableEvt from './TableEvt/TableEvt';
import Notification from '../../Components/Notification/Notification';
import Spinner from '../../Components/Spinner/Spinner';

const EventosPage = () => {

    const [notifyUser, setNotifyUser] = useState({});
    const[showSpinner, setShowSpinner] = useState(false);
    const[frmEdit, setFrmEdit] = useState(false);
    const[idEvento, setIdEvento] = useState("");
    const[nomeEvento, setNomeEvento] = useState("");
    const[descricao, setDescricao] = useState("");
    const[tipoEvento, setTipoEvento] = useState([]);//fazer o select

    const[selectTipoEventos, setSelectTipoEventos] = useState("");

    const[dataEvento, setDataEvento] = useState("");
    const[instituicao, setInstituicao] = useState("");
    const[eventos, setEventos]= useState([]);



    //ao carregar a página
    useEffect(() => {

    //chamar a api
    async function getEventos() {
        setShowSpinner(true);
        try {
    
            const promise = await api.get("/Evento")
            const promiseInstituicao = await api.get("/Instituicao")
            const promiseTiposEventos = await api.get("/TiposEvento")
        
            setEventos(promise.data)
            setTipoEvento(promiseTiposEventos.data)
            setInstituicao(promiseInstituicao.data[1].idInstituicao)
    
        } catch (error) {
            alert("Deu Ruim na API !!!")
        }
        setShowSpinner(false);
    }
    
            console.log("Deu Bom !!!");
    
            getEventos()
        }, []);


    //cadastrar um novo evento
    async function handleSubmit(e){
        e.preventDefault();

        try {
            const retorno = await api.post('/Evento',{
                nomeEvento : nomeEvento,
                descricao : descricao,
                idTipoEvento : tipoEvento,
                dataEvento : dataEvento,
                idInstituicao : instituicao
            });

            setNotifyUser({
                titleNote: "Sucesso",
                textNote: `Cadastrado com sucesso!`,
                imgIcon: "success",
                imgAlt:
                "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok.",
                showMessage: true,
            });

            setNomeEvento("");
            setDescricao("");
            setTipoEvento("");
            setDataEvento("");

            const retornoGet = await api.get('/Evento')
            setEventos(retornoGet.data)

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

    //editar um evento
    async function handleUpdate(e){
        e.preventDefault();

        try {
            const retorno = await api.put('/Evento/' + idEvento, {
                nomeEvento : nomeEvento,
                descricao : descricao,
                idTipoEvento : tipoEvento,
                dataEvento : dataEvento,
                idInstituicao : instituicao
            })

            const retornoGet = await api.get('/Evento/');
            setEventos(retornoGet.data)


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
        setNomeEvento("");
        setDescricao("");
        setTipoEvento("");
        setDataEvento("");
        setIdEvento(null);
    }
    


    async function showUpdateForm(idElemento) {
        
        setFrmEdit(true)

        try {
            
            const retornoGet = await api.get(`/Evento/${idElemento}`);

            setNomeEvento(retornoGet.data.nomeEvento)
            setDescricao(retornoGet.data.descricao)
            setDataEvento(retornoGet.data.dataEvento)
            setTipoEvento(retornoGet.data.idTipoEvento)
            setIdEvento(retornoGet.data.idEvento)

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


    //deletar evento
    async function handleDelete(id){
        try {
            const retorno = await api.delete(`/Evento/${id}`)

            setNotifyUser({
                titleNote: "Sucesso",
                textNote: `Deletado com sucesso!`,
                imgIcon: "success",
                imgAlt:
                "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok.",
                showMessage: true,
            });
    
            const retornoGet = await api.get('/Evento');
            setEventos(retornoGet.data)
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

            <section className='cadastro-evento-section'>
                <Container>
                    <div className='cadastro-evento__box'>
                        <Title titleText={"Cadastro de Eventos"}/>
                        <ImageIllustrator
                        alterText={""}
                        imageRender={eventImage}
                        />

                        <form className='ftipo-evento' onSubmit={frmEdit ? handleUpdate : handleSubmit}>
                            {!frmEdit ? 
                            (
                                <>
                                    <Input
                                    id={"nomeEvento"}
                                    name={"nomeEvento"}
                                    type={"text"}
                                    placeholder={"Nome"}
                                    required={"required"}
                                    value={nomeEvento}
                                    manipulationFunction={
                                        (e) => {
                                            setNomeEvento(e.target.value)
                                        }
                                    }
                                    />

                                    <Input
                                    id={"descricao"}
                                    name={"descricao"}
                                    type={"text"}
                                    placeholder={"Descrição"}
                                    required={"required"}
                                    value={descricao}
                                    manipulationFunction={
                                        (e) => {
                                            setDescricao(e.target.value)
                                        }
                                    }
                                    />


                                    <Select
                                    options={tipoEvento}
                                    id={"tipoEvento"}
                                    name={"tipoEvento"}
                                    required={"required"}
                                    defaultValue={tipoEvento}
                                    manipulationFunction={
                                        (e) => {
                                            setTipoEvento(e.target.value)
                                        }
                                    }
                                    />

                                    <Input
                                    id={"dataEvento"}
                                    name={"dataEvento"}
                                    type={"date"}
                                    placeholder={"dd/mm/aaaa"}
                                    required={"required"}
                                    value={dataEvento}
                                    manipulationFunction={
                                        (e) => {
                                            setDataEvento(e.target.value)
                                        }
                                    }
                                    />

                                    <Button
                                        textButton={"Cadastrar"}
                                        id={"cadastrar"}
                                        name={"cadastrar"}
                                        type={"submit"}
                                    />

                                </>

                            ) 
                            : 
                            (
                                <>

                                    <Input
                                    id={"nomeEvento"}
                                    name={"nomeEvento"}
                                    type={"text"}
                                    placeholder={"Nome"}
                                    required={"required"}
                                    value={nomeEvento}
                                    manipulationFunction={
                                        (e) => {
                                            setNomeEvento(e.target.value)
                                        }
                                    }
                                    />

                                    <Input
                                    id={"descricao"}
                                    name={"descricao"}
                                    type={"text"}
                                    placeholder={"Descrição"}
                                    required={"required"}
                                    value={descricao}
                                    manipulationFunction={
                                        (e) => {
                                            setDescricao(e.target.value)
                                        }
                                    }
                                    />

                                    <Select
                                    id={"tipoEvento"}
                                    name={"tipoEvento"}
                                    placeholder={"Tipo Evento"}
                                    required={"required"}
                                    value={tipoEvento}
                                    manipulationFunction={
                                        (e) => {
                                            setTipoEvento(e.target.value)
                                        }
                                    }
                                    />

                                    <Input
                                    id={"dataEvento"}
                                    name={"dataEvento"}
                                    type={"date"}
                                    placeholder={"dd/mm/aaaa"}
                                    required={"required"}
                                    value={dataEvento}
                                    manipulationFunction={
                                        (e) => {
                                            setDataEvento(e.target.value)
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

            <section className='lista-eventos-section'>
                <Container>

                    <Title titleText={"Lista de Eventos"} color="white" />

                    <TableEvt
                    dados={eventos}
                    fnUpdate={showUpdateForm}
                    fnDelete={handleDelete}
                    />

                </Container>
            </section>

        </MainContent>
    
    );
};

export default EventosPage;