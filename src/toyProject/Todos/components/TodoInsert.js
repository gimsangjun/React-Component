import { MdAdd } from "react-icons/md";
import "../scss/TodoInsert.scss";
import React, { useCallback, useState } from "react";

export default function TodoInsert({ handleInsert }) {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      handleInsert(value);
      setValue("");
    },
    [value, handleInsert]
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input value={value} onChange={onChange} placeholder="할일 입력하세요" />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
}
