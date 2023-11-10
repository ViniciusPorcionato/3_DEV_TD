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

const HomePage = () => {

  //fake mock - API mocada
  const [nextEvents, setNextEvents] = useState([]);

  useEffect(() => {
    //chamar api em uma funçãa assincrona
    async function getNextEvents() {
      try {
        const promise = await axios.get("http://localhost:5000/api/Evento/ListarProximos");
        const dados = await promise.data;
        setNextEvents(dados);//atualiza o state
      } catch (error) {
        alert("Deu ruim na API !")
      }
    }

    getNextEvents();//chama a função

  }, []);


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
                  title={e.title}
                  description={e.descricao}
                  eventDate={e.data}
                  idEvento={e.id}
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
