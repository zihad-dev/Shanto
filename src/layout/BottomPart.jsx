import React from "react";
import Client from "../bottomPart/Client";
import Container from "../component/Container";
import Testmonial from "../bottomPart/Testmonial";

const BottomPart = () => {
  return (
    <>
      <Container>
        <Client />
        <Testmonial/>
      </Container>
    </>
  );
};

export default BottomPart;
