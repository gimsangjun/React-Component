import React from "react";
import { Link } from "react-router-dom";

export default function Root() {
  return (
    <div className="flex justify-center items-center">
      {/* TODO: header component 만들기 */}
      <nav className="flex space-x-4">
        <li>
          <Link className="text-blue-500 hover:text-blue-700" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-blue-500 hover:text-blue-700" to="/todos">
            Redux 사용 예제 : Todos
          </Link>
        </li>
        <li>
          <Link className="text-blue-500 hover:text-blue-700" to="/counter">
            Redux + 미들웨어 비동기 setTime: Counter
          </Link>
        </li>
        <li>
          <Link className="text-blue-500 hover:text-blue-700" to="/post">
            Redux + 미들웨어 api : Pages
          </Link>
        </li>
      </nav>
    </div>
  );
}
