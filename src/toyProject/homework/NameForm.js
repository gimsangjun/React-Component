import React, { useReducer, useState } from "react";

const initialState = { nameList: [] };

function reducer(state, action) {
  switch (action.type) {
    case "ADD_NAME":
      return { ...state, nameList: [...state.nameList, action.payload] };
    case "REMOVE_NAME":
      return { ...state, nameList: state.nameList.filter((name) => name !== action.payload) };
    default:
      return state;
  }
}

export default function NameForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    if (!name.trim()) return; // trim() 빈공간 제거후, 빈 문자열이면 아무일도 안일어나게
    dispatch({ type: "ADD_NAME", payload: name });
    setName("");
  };

  const handleDoubleClick = (nameToRemove) => {
    dispatch({ type: "REMOVE_NAME", payload: nameToRemove });
  };

  return (
    <div>
      <div className="flex flex-col space-y-4 max-w-md mx-auto mt-10">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={name}
          onChange={handleChange}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleClick}
        >
          Send
        </button>
        <ul className="mt-4">
          <div className="px-4">
            {state.nameList.map((name, index) => (
              <li key={index} className="list-disc" onDoubleClick={() => handleDoubleClick(name)}>
                {name}
              </li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
}
