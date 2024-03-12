import React, { useReducer } from "react";

const initialState = {
  c: 0,
  f: 0,
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

export default function CTF() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let celsius = "";
    let fahrenheit = "";

    if (name === "c") {
      celsius = value;
      fahrenheit = value ? Math.round(((value * 9) / 5 + 32) * 100) / 100 : ""; // 숫자가 아닌 이상한 값이 들어올 경우
    } else if (name === "f") {
      fahrenheit = value;
      celsius = value ? Math.round((((value - 32) * 5) / 9) * 100) / 100 : "";
    }

    dispatch({
      type: "UPDATE_FIELD",
      payload: { field: "c", value: celsius },
    });
    dispatch({
      type: "UPDATE_FIELD",
      payload: { field: "f", value: fahrenheit },
    });
  };

  return (
    <div className="p-10">
      <form className="space-y-4">
        <fieldset className="p-4 border border-gray-300 rounded-lg">
          <legend className="font-bold">온도를 입력해주세요</legend>
          <div className="flex flex-col space-y-2">
            <label htmlFor="c" className="block text-sm font-medium text-gray-700">
              단위: 섭씨
            </label>
            <input
              type="number"
              name="c"
              id="c"
              placeholder="섭씨 입력 c"
              value={state.c}
              onChange={handleChange}
              step="0.1"
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </fieldset>

        <fieldset className="p-4 border border-gray-300 rounded-lg">
          <legend className="font-bold">온도를 입력해주세요</legend>
          <div className="flex flex-col space-y-2">
            <label htmlFor="f" className="block text-sm font-medium text-gray-700">
              단위: 화씨
            </label>
            <input
              type="number"
              name="f"
              id="f"
              value={state.f}
              onChange={handleChange}
              step="0.1"
              placeholder="화씨 입력 f"
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
}
