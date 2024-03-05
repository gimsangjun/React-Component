import React, { useState } from "react";
import styled from "styled-components";
import InputForm from "./InputForm";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: orange;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
`;
// Datas : 데이터 저장소,
// selectedName : 데이터들중 선택한 하나의 데이터 key
// keys : table header들
export default function CrudBtn({
  handleData,
  datas,
  selectedName,
  keys,
  currentMode,
  handleMode,
}) {
  // 각 입력 값에 대한 상태(state) 정의 => update시 form태그에 입력값을 주기위함.
  const [inputValues, setInputValues] = useState({});

  function hanndleInputValues(value) {
    setInputValues(value);
  }

  function onClick(event) {
    const mode = event.target.textContent;
    handleMode(mode);

    if (selectedName === "") {
      if (mode === "Update") {
        alert("잘못된 접근 : Update할 사람을 고르세요");
        handleMode("Error");
        return;
      }
      if (mode === "Delete") {
        alert("잘못된 접근 : Delete할 사람을 고르세요");
        handleMode("Error");
        return;
      }
    }

    if (mode === "Create") {
      let newInputValues = {};
      setInputValues(newInputValues);
    }

    if (mode === "Update") {
      const formData = datas.filter((td) => td.name === selectedName);
      let newInputValues = {};
      Object.entries(formData[0]).forEach(([key, value]) => {
        newInputValues[key] = value;
      });
      setInputValues(newInputValues);
    }
  }

  return (
    <Container>
      <BtnContainer>
        <Button onClick={onClick}>Create</Button>
        <Button onClick={onClick}>Read</Button>
        <Button onClick={onClick}>Update</Button>
        <Button onClick={onClick}>Delete</Button>
      </BtnContainer>
      <InputForm
        keys={keys}
        currentMode={currentMode}
        handleData={handleData}
        datas={datas}
        selectedName={selectedName}
        inputValues={inputValues}
        hanndleInputValues={hanndleInputValues}
        handleMode={handleMode}
      />
    </Container>
  );
}
