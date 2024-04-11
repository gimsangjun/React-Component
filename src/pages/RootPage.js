import React from "react";
import { Link } from "react-router-dom";
import tw from "twin.macro";

export default function Root() {
  return (
    <div className="flex justify-center items-center">
      <ul className="grid grid-cols-1 gap-4">
        <List>
          <Link className="text-blue-500 hover:text-blue-700" to="/">
            Home
          </Link>
        </List>
        <List>
          <Link className="text-blue-500 hover:text-blue-700" to="/todos">
            Redux 사용 예제 : Todos
          </Link>
        </List>
        <List>
          <Link className="text-blue-500 hover:text-blue-700" to="/post">
            Redux + 미들웨어 api : Pages :redux마지막 부분
          </Link>
        </List>
        <List>
          <Link className="text-blue-500 hover:text-blue-700" to="/post">
            게시판: react-quill 라이브러리 사용, 비동기
          </Link>
        </List>
        수정,삭제, 업데이트
      </ul>
    </div>
  );
}

const List = tw.li`p-4 bg-gray-100 rounded-md shadow-md`;
