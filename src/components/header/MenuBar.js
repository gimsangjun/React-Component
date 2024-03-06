import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import userImage from "../../assets/user-solid.svg";

const Container = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  padding: 20px;

  h1 {
    flex: 2;
  }

  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 6;
`;

const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export default function MenuBar() {
  return (
    <Container>
      <h1>
        <Link to={"#"}>Hello Logo</Link>
      </h1>
      <MenuContainer>
        <li>
          {" "}
          <Link to={"#"}>menu1</Link>
        </li>
        <li>
          {" "}
          <Link to={"#"}>menu2</Link>
        </li>
        <li>
          {" "}
          <Link to={"#"}>menu3</Link>
        </li>
      </MenuContainer>
      <User>
        <img src={userImage} style={{ width: "30px", height: "30px" }} alt="user-img" />
      </User>
    </Container>
  );
}
