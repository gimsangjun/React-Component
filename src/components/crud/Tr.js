import React from "react";
import { Td } from "./Table";

export default function Tr({ td }) {
  return (
    <tr>
      {Object.values(td).map((value, index) => (
        <Td>{value}</Td>
      ))}
    </tr>
  );
}
