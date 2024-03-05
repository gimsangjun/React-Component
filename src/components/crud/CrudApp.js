import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import initDatas from "./data.json";
import Employees from "./Employees";
import Table from "./Table";
import CrudBtn from "./CrudBtn";
import MenuBar from "../header/MenuBar";

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
`;

const ContextContainer = styled.div`
  width: 800px;
  margin: 0 auto;
`;

const keys = Object.keys(initDatas[0]);

export default function CrudApp() {
  const [selectedName, setSelectedName] = useState("");
  const [datas, setDatas] = useState(initDatas);
  // const header = Object.keys(datas[0]);
  const [header] = useState(keys);
  // TODO: 이부분 다시 정리, 원인이 무엇인지 알아야됨.
  // const [header] = useState(Object.keys(datas[0])); // Object.keys부분이 null일때 실행되서 오류가 생기는듯?
  // const [header] = useState(() => (datas ? Object.keys(datas[0]) : []));
  // console.log("App");

  // const header = ["name", "age", "job", "lang", "pay"];
  const [currentMode, setMode] = useState("Read");

  function handleSelectedName(name) {
    setSelectedName(name);
  }

  function handleData(data) {
    setDatas(data);
  }

  function handleMode(mode) {
    setMode(mode);
  }

  return (
    <Container>
      <MenuBar></MenuBar>
      <h1 style={{ textAlign: "center" }}>Main</h1>
      <ContextContainer>
        <Employees datas={datas} handleSelectedName={handleSelectedName} setMode={setMode} />
        <Table
          header={header}
          datas={datas}
          selectedName={selectedName}
          currentMode={currentMode}
        />
        <CrudBtn
          handleData={handleData}
          datas={datas}
          selectedName={selectedName}
          keys={header}
          currentMode={currentMode}
          handleMode={handleMode}
        />
      </ContextContainer>
    </Container>
  );
}
