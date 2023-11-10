import React, { useEffect, useState } from "react";
import "./HomePage.css";
import Banner from "../../Components/Banner/Banner";
import VisionSection from "../../Components/VisionSection/VisionSection";
import ContactSection from "../../Components/ContactSection/ContactSection";
import MainContent from "../../Components/MainContent/MainContent";
import NextEvent from "../../Components/NextEvent/NextEvent";
import Container from "../../Components/Container/Container";
import Title from "../../Components/Title/Title";
import axios from "axios";
import api from "../../Services/Service";

const HomePage = () => {

  const [nextEvents, setNextEvents] = useState([]);

  useEffect(() => {
    //chamar api em uma funçãi assincrona
    async function getNextEvents() {
      try {
        const promise = await api.get("/Evento/ListarProximos");
        setNextEvents(promise.data);
      } catch (error) {
        alert('Deu ruim na API')
      }
    }
    getNextEvents();
  }, [])


  return (
    <MainContent>
      <Banner />

        {/* {Proximos Eventos} */}
      <section className="proximos-eventos">
        <Container>
          <Title titleText={"Próximos Eventos"} />

          <div className="events-box">

          {
            nextEvents.map((e) => {
              return(
                <NextEvent
                  title={e.nomeEvento}
                  description={e.descricao}
                  eventDate={e.dataEvento}
                  idEvento={e.idEvento}
                />
              );
            })
          }

          </div>
        </Container>
      </section>

      <VisionSection />
      <ContactSection />
    </MainContent>
  );
};

export default HomePage;
