import React from "react";
import styled from "styled-components";
import Tr from "./Tr";

const Table = styled.table`
  width: 800px;
  margin-top: "50px";
  border-collapse: collapse;
`;
export const Td = styled.td`
  width: 80px;
  height: 30px;
  text-align: center;
  border: 1px solid black;
`;

// 렌더링될 실제 HTML 요소를 변경 td -> th
const Th = styled(Td).attrs(() => ({ as: "th" }))``;

export default function Employees({ header, datas, selectedName, currentMode }) {
  let filteredDatas = [];

  switch (currentMode) {
    case "Select":
      filteredDatas = datas.filter((td) => td.name === selectedName);
      break;
    case "Create":
      filteredDatas = [];
      break;
    case "Read":
      filteredDatas = datas;
      break;
    case "Update":
      filteredDatas = datas.filter((td) => td.name === selectedName);
      break;
    case "Delete":
      filteredDatas = datas.filter((td) => td.name === selectedName);
      break;
    default:
      console.log("Table: Mode Error");
      break;
  }

  console.log("header: ", header);
  console.log("filteredData", filteredDatas);

  return (
    <Table>
      <thead>
        <tr>
          {header.map((td, index) => (
            <Th>{td}</Th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredDatas.map((filteredData, index) => (
          <Tr key={index} td={filteredData} />
        ))}
      </tbody>
    </Table>
  );
}
