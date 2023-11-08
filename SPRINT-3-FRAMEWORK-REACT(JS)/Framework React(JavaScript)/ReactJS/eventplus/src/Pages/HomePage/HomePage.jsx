import React from "react";

import "./HomePage.css";
import Banner from "../../Components/Banner/Banner";
import VisionSection from "../../Components/VisionSection/VisionSection";
import ContactSection from "../../Components/ContactSection/ContactSection";
import MainContent from "../../Components/MainContent/MainContent";
import NextEvent from "../../Components/NextEvent/NextEvent";
import Container from "../../Components/Container/Container";
import Title from "../../Components/Title/Title";

const HomePage = () => {
  return (
    <MainContent>
      <Banner />

        {/* {Proximos Eventos} */}
      <section className="proximos-eventos">
        <Container>
          <Title titleText={"Próximos Eventos"} />

          <div className="events-box">
            <NextEvent
              title={"Happy Hour Event"}
              description={"Evento Legal"}
              eventDate={"14/11/2023"}
            />
          </div>
        </Container>
      </section>

      <VisionSection />
      <ContactSection />
    </MainContent>
  );
};

export default HomePage;
