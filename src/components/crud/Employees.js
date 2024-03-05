import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Div = styled.div`
  margin: 10px;
`;

const A = styled.a`
  color: ${({ selected }) => (selected ? "purple" : "black")};
  font-weight: ${({ selected }) => (selected ? "bold" : "normal")};
  text-decoration: none;
`;

export default function Employees({ datas, handleSelectedName, setMode }) {
  const [selectedName, setSelectedName] = useState(null);

  // 클릭한놈 색깔 바꾸기
  function onClick(name) {
    setMode("Select");
    setSelectedName(name); // 자기 자신
    handleSelectedName(name); // 부모한테 전달
  }

  return (
    <Container>
      {datas.map((data) => (
        <Div>
          <A
            href="#"
            selected={data.name === selectedName}
            onClick={() => onClick(data.name)}
          >
            {data.name}
          </A>
        </Div>
      ))}
    </Container>
  );
}
