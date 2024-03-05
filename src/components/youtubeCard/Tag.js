import React from "react";
import styled from "styled-components";

const TagStyle = styled.div`
  height: 20px;
  padding: 3px;
  border-radius: 8px;
`;

export default function Tag({ data, color }) {
  return <TagStyle style={{ backgroundColor: `${color}` }}>{data}</TagStyle>;
}
