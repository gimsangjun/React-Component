import React, { useCallback, useReducer, useState } from "react";

const initialState = {
  text: "어서 오세요!",
  color: "red",
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    default:
      return state;
  }
}

export default function HelloBye() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onClick = useCallback((e) => {
    dispatch({ type: "UPDATE_FIELD", payload: { field: e.target.name, value: e.target.value } });
  }, []);

  return (
    <div className="flex flex-col my-4">
      <div className="flex justify-between w-80 mx-auto">
        <button
          className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline active:bg-gray-800"
          onClick={onClick}
          name="text"
          value="어서 오세요!"
        >
          입장
        </button>
        <button
          className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline active:bg-gray-800"
          onClick={onClick}
          name="text"
          value="안녕히 가세요!"
        >
          퇴장
        </button>
      </div>
      <div>
        <p className="text-center text-6xl my-6" style={{ color: state.color }}>
          {state.text}
        </p>
      </div>
      <div className="flex justify-between w-80 mx-auto">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline active:bg-red-800"
          name="color"
          value="red"
          onClick={onClick}
        >
          red
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline active:bg-green-800"
          name="color"
          value="green"
          onClick={onClick}
        >
          green
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline active:bg-blue-800"
          name="color"
          value="blue"
          onClick={onClick}
        >
          blue
        </button>
      </div>
    </div>
  );
}
