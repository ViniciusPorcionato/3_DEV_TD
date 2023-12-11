import React, { useContext, useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import MainContent from "../../Components/MainContent/MainContent";
import Title from "../../Components/Title/Title";
import Table from "./TableEva/TableEva";
import Container from "../../Components/Container/Container";
import { Select } from "../../Components/FormComponents/FormComponents";
import Spinner from "../../Components/Spinner/Spinner";
import Modal from "../../Components/Modal/Modal";
import api from "../../Services/Service";
import './EventoAlunosPage.css'

import { UserContext } from "../../context/AuthContext";

const EventosAlunoPage = () => {
  // state do menu mobile
    const [exibeNavbar, setExibeNavbar] = useState(false);
    const [eventos, setEventos] = useState([]);
  // select mocado
    const [quaisEventos, setQuaisEventos] = useState([
    { value: "1", text: "Todos os eventos" },
    { value: "2", text: "Meus eventos" },
    ]);

    const [tipoEvento, setTipoEvento] = useState("1"); //código do tipo do Evento escolhido
    const [showSpinner, setShowSpinner] = useState(false);
    const [showModal, setShowModal] = useState(false);

  // recupera os dados globais do usuário
    const { userData, setUserData } = useContext(UserContext);

useEffect(() => {
    
    loadEventsType();

}, [tipoEvento, userData.userId]);

async function loadEventsType(){
    setShowSpinner(true);

    try {
        
        if (tipoEvento === "1") {

            const promiseEvento = await api.get('/Evento')
            const promisePresenca = await api.get(`/PresencasEvento/ListarMinhas/${userData.userId}`)


            const dadosMarcados = verificaPresenca(promiseEvento.data , promisePresenca.data);
            console.log("DADOS MARCADOS");
            console.log(dadosMarcados);

            setEventos(promiseEvento.data);

        } else{

            let arrEventos = [];

            const promisePresenca = await api.get(`/PresencasEvento/ListarMinhas/${userData.userId}`)

            promisePresenca.data.forEach((element) => {
                arrEventos.push({
                    ...element.evento, 
                    situacao : element.situacao,
                    idPresencaEvento : element.idPresencaEvento
                });
            })

            setEventos(arrEventos);
        }

    } catch (error) {
        console.log(error);
    }
    setShowSpinner(false);

}


const verificaPresenca = (arrAllEvents, eventUser) => {
    //verifica se o aluno está participando do evento atual (x)
    for (let x = 0 ; x < arrAllEvents.length; x++) {//para cada evento (todos)
        
        for (let i = 0; i < eventUser.length; i++) { //verifica em meus eventos
            if (arrAllEvents[x].idEvento === eventUser[i].idEvento) {
                arrAllEvents[x].situacao = true;
                arrAllEvents[x].idPresencaEvento = eventUser[i].idPresencaEvento;
                break;
            }
        }
    }

    return arrAllEvents;
}

  // toggle meus eventos ou todos os eventos
function myEvents(tpEvent) {
    setTipoEvento(tpEvent);
}


const showHideModal = () => {
    setShowModal(showModal ? false : true);
};

//ler comentário - get
async function loadMyComentary(idComentary) {
    return "????";
}

//deletar comentario - delete
const commentaryRemove = async () => {
    alert("Remover o comentário");
};

//Cadastrar um comentário - post
//continuar
async function postMyComentary(descricao, exibe = true){

    const promisePostComentary = await api.post('/ComentariosEvento',{
        descricao:descricao,
        exibe : exibe,
        idUsuario : userData.idUsuario,
        // idEvento : ???????
    })

}



async function handleConnect(idEvent, connect = false, idPresencaEvento = null) {
    if (!connect) {
        try {
            const promise = await api.post('/PresencasEvento', {
                situacao: true,
                idUsuario : userData.userId,
                idEvento : idEvent
            });

            if (promise.status === 201) {
                loadEventsType();
                alert("Presença Confirmada ! Parabéns")
            }

        } catch (error) {
            console.log(error);
        }
        return;
    }
    
    //fazer o delete
    const promiseDelete = await api.delete('/PresencasEvento/' + idPresencaEvento)
    if (promiseDelete.status === 204) {
        loadEventsType();
        alert('Desconectado do Evento')
        
    }

}
    return (
    <>
        <MainContent>
            <Container>
            <Title titleText={"Eventos"} additionalClass="custom-title" />

            <Select
            id="id-tipo-evento"
            name="tipo-evento"
            required={true}
            dados={quaisEventos} // aqui o array dos tipos
            manipulationFunction={(e) => myEvents(e.target.value)} // aqui só a variável state
            value={tipoEvento}
            additionalClass="select-tp-evento"
            />

            <Table
            dados={eventos}
            fnConnect={handleConnect}
            fnShowModal={() => {
            showHideModal();
            }}
            />

            </Container>
        </MainContent>

      {/* SPINNER -Feito com position */}
        {showSpinner ? <Spinner /> : null}

        {showModal ? (
        <Modal
            userId={userData.userId}
            showHideModal={showHideModal}
            fnDelete={commentaryRemove}
            fnPost={postMyComentary}
            fnGet={() => {
                loadMyComentary(userData.idUsuario)
            }}
        />
        ) : null}
    </>
);
};

export default EventosAlunoPage;
