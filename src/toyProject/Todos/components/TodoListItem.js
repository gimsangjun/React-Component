import React from "react";
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline } from "react-icons/md";
import cn from "classnames";
import "../scss/TodoListItem.scss";

export default function TodoListItem({ todoData, handleDelete, handleChecked }) {
  const { id, todo, checked } = todoData;

  return (
    <div className="TodoListItem" key={id}>
      <div className={cn("checkbox", { checked })} onClick={() => handleChecked(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{todo}</div>
      </div>
      <div className="remove" onClick={() => handleDelete(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
}
