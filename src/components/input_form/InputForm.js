import React, { useReducer, useState } from "react";

const initialState = {
  name: "",
  message: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.payload.field]: action.payload.value, // 동적으로 필드 업데이트
      };
    case "RESET":
      return {
        name: "",
        message: "",
      };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      payload: { field: e.target.name, value: e.target.value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(state);
    dispatch({
      type: "RESET",
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setSubmittedData(state);
      dispatch({
        type: "RESET",
      });
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    setSubmittedData(state);
    dispatch({
      type: "RESET",
    });
  };

  return (
    <form onSubmit={handleSubmit} onKeyPress={handleKeyPress}>
      <div className="flex flex-col space-y-4 max-w-md mx-auto mt-10">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={state.name}
          onChange={handleChange}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={state.message}
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
        {/*제출된 데이터가 없을경우 안보이게 */}
        {submittedData && (
          <div className="mt-4">
            <p>
              <strong>이름:</strong> {submittedData.name}
            </p>
            <p>
              <strong>메세지:</strong> {submittedData.message}
            </p>
          </div>
        )}
      </div>
    </form>
  );
}
