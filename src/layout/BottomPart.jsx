import React from "react";
import Client from "../bottomPart/Client";
import Container from "../component/Container";
import Testmonial from "../bottomPart/Testmonial";
import Discuss from "../bottomPart/Discuss";
import Footer from "../bottomPart/Footer";

const BottomPart = () => {
  return (
    <>
      <Container>
        <Client />
        <Testmonial/>
        <Discuss/>
      
      </Container>
        <div>
          <Footer/>

        </div>
    </>
  );
};

export default BottomPart;
