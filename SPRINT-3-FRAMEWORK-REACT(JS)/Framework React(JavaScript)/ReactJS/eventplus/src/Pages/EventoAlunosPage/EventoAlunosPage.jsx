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
    
    async function loadEventsType(){
        setShowSpinner(true);

        try {
            
            if (tipoEvento === "1") {

                const promiseEvento = await api.get('/Evento')
                setEventos(promiseEvento.data);
            } else{

                let arrEventos = [];

                const promisePresenca = await api.get(`/PresencasEvento/ListarMinhas/${userData.userId}`)

                promisePresenca.data.forEach((element) => {
                    arrEventos.push(element.evento)
                })

                setEventos(arrEventos);
            }

        } catch (error) {
            alert("Deu Ruim na API !!!")
            console.log(error);
        }
        setShowSpinner(false);

    }

    loadEventsType();

}, [tipoEvento]);

  // toggle meus eventos ou todos os eventos
function myEvents(tpEvent) {
    setTipoEvento(tpEvent);
}

async function loadMyComentary(idComentary) {
    return "????";
}

const showHideModal = () => {
    setShowModal(showModal ? false : true);
};

const commentaryRemove = () => {
    alert("Remover o comentário");
};

function handleConnect() {
    alert("Desenvolver a função conectar evento");
}
    return (
    <>
        <MainContent>
            <Container>
            <Title titleText={"Eventos"} className="custom-title" />

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
        />
        ) : null}
    </>
);
};

export default EventosAlunoPage;
