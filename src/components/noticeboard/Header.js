import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const { username } = useSelector((state) => state.auth);

  return (
    <div className="bg-gray-900 py-4 mb-6">
      <div className="container mx-auto">
        <nav className="flex flex-wrap justify-center">
          <li>
            <Link
              className="text-white hover:text-blue-400 px-3 py-2 rounded-lg mb-2 sm:mb-0"
              to="/post"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-white hover:text-blue-400 px-3 py-2 rounded-lg mb-2 sm:mb-0"
              to="/post/write"
            >
              Writer
            </Link>
          </li>
          {username !== null ? (
            <li>
              <Link
                className="text-white hover:text-blue-400 px-3 py-2 rounded-lg mb-2 sm:mb-0"
                to="/logout"
              >
                로그아웃
              </Link>
              <span className="text-white px-3 py-2 rounded-lg mb-2 sm:mb-0">
                환영합니다, {username}!
              </span>
            </li>
          ) : (
            <li>
              <Link
                className="text-white hover:text-blue-400 px-3 py-2 rounded-lg mb-2 sm:mb-0"
                to="/login"
              >
                로그인
              </Link>
            </li>
          )}
        </nav>
      </div>
    </div>
  );
}
