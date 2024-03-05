import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import initDatas from "./data.json";
// import image1 from "./img/image1.png";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 60%;
  margin: 0 auto;

  & > * {
    margin-bottom: 20px;
  }
`;

export default function CardContainer() {
  const [datas, setDatas] = useState(initDatas);

  return (
    <Container>
      {datas.map((data, idx) => (
        <Card key={idx} data={data} />
      ))}
    </Container>
  );
}
