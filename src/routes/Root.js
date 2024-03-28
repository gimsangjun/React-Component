import React from "react";
import { Link } from "react-router-dom";

export default function Root() {
  return (
    <div className="flex justify-center items-center">
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
      </nav>
    </div>
  );
}
