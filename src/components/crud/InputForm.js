import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Input = styled.input`
  width: 200px;
  height: 20px;
  margin: 10px;
`;

// Datas : 데이터 저장소,
// selectedName : 데이터들중 선택한 하나의 데이터 key
// keys : table header들
export default function InputForm({
  keys,
  currentMode,
  handleData,
  datas,
  selectedName,
  inputValues,
  hanndleInputValues,
  handleMode,
}) {
  /*-------------- InputForm 시작 ---------------------------- */

  // FormData 객체를 사용하여 form 요소에서 데이터를 추출
  function createNewEmployee(formData) {
    const newEmployee = {};
    formData.forEach((value, key) => {
      newEmployee[key] = value;
    });
    return newEmployee;
  }

  function onSubmit(event) {
    event.preventDefault();
    const newInputValues = {};
    const formData = new FormData(event.target);
    formData.forEach((value, key) => {
      newInputValues[key] = value;
    });
    hanndleInputValues(newInputValues);

    switch (currentMode) {
      case "Create":
        const newEmployee = createNewEmployee(formData);
        handleData([...datas, newEmployee]);
        handleMode("Read");
        break;
      case "Update":
        // selectedName 데이터를 삭제하고, 새롭게 formData에서 가져온 데이터를 추가.
        const updateDatas = datas.filter((td, index) => td.name !== selectedName);
        const updatedEmployee = createNewEmployee(formData);
        handleData([...updateDatas, updatedEmployee]);
        break;
      case "Delete":
        // console.log(datas);
        // console.log("datas.length", datas.length);
        // if (datas.length === 1) {
        //   alert("삭제할 데이터가 없습니다.");
        //   handleMode("Read");
        //   break;
        // }
        const deleteDatas = datas.filter((td, index) => td.name !== selectedName);
        handleData(deleteDatas);
        handleMode("Read");
        break;
      default:
        console.log("Submit: Value error");
        break;
    }
  }

  function onChange(event) {
    const { name, value } = event.target;
    hanndleInputValues({ ...inputValues, [name]: value });
  }

  return (
    <Form onSubmit={onSubmit}>
      {["Create", "Update"].includes(currentMode) &&
        keys.map((key, _) => (
          <Input
            key={key}
            type="text"
            name={key}
            placeholder={key}
            value={inputValues[key]}
            onChange={onChange}
          ></Input>
        ))}
      {!(currentMode === "Select" || currentMode === "Read" || currentMode === "Error") && (
        <button type="submit">{currentMode}</button>
      )}
    </Form>
  );
}
