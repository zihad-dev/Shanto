import React, { useState } from "react";
import Container from "../../component/Container";
import Rank from "../../component/Rank";
import ContentVideo from "../../component/ContentVideo";
import ContentLogo from "../../component/ContentLogo";

const WorldPress = () => {


  return (
    <div className="mt-[100px]">
      <Container>
        <Rank />
        <ContentLogo />
        <ContentVideo />
      </Container>
    </div>
  );
};

export default WorldPress;
