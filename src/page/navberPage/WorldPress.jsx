import React, { useState } from "react";
import Container from "../../component/Container";
import Rank from "../../component/Rank";
import ContentVideo from "../../component/ContentVideo";
import ContentLogo from "../../component/ContentLogo";
import Better from "./Better";
import Client from "./Client";
import Faq from "./Faq";
import OptimizeWordPress from "./OptimizeWordPress";

const WorldPress = () => {


  return (
    <div className="mt-[100px]">
      <Container>
        <Rank />
        <ContentLogo />
        <ContentVideo />
        <Better/>
        <OptimizeWordPress/>
        <Client/>
        <Faq/>
      </Container>
    </div>
  );
};

export default WorldPress;
