import React from "react";
import Writer from "../../components/noticeboard/Writer";
import { useSelector } from "react-redux";
import PostAPI from "../../utils/api/postAPI";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function WriterContainer() {
  const { username } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  // 로그인 되어 있지 않은 경우 경고창 표시
  if (!username) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">로그인이 필요합니다.</h2>
          <p>게시물을 작성하려면 로그인이 필요합니다.</p>
          <Link to="/login">
            <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md mt-4">
              로그인 하러 가기
            </button>
          </Link>
        </div>
      </div>
    );
  }

  // onWrite 함수 정의
  const onWrite = async (post) => {
    try {
      // 새로운 포스트를 추가하기 위해 API 호출
      const newPost = await PostAPI.createPost(post);
      console.log("게시물 작성 완료:", newPost);
      navigate("/");
    } catch (error) {
      console.error("게시물 작성 중 오류 발생:", error);
    }
  };

  return <Writer onWrite={onWrite} />;
}
