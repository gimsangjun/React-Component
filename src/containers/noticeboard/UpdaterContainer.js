import React, { useEffect, useState } from "react";
import Updater from "../../components/noticeboard/Updater";
import { useNavigate, useParams } from "react-router";
import PostAPI from "../../utils/api/postAPI";
import { Link } from "react-router-dom";
import LoadingPage from "../../pages/LoadingPage";

export default function UpdaterContainer() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const fetchedPost = await PostAPI.getPostById(id);
        setPost(fetchedPost);
      } catch (error) {
        console.error("게시물을 불러오는 중에 오류가 발생했습니다:", error);
      } finally {
        setLoading(false); // 데이터 로딩이 끝나면 로딩 상태 변경
      }
    };

    fetchPost();
  }, [id]);

  // TODO: 로딩문제를 해결하는 방법
  // 로딩 중일 때는 로딩 중 메시지 출력
  if (loading) {
    return <LoadingPage />;
  }

  // 데이터가 없으면 "존재하지 않는 게시물입니다" 메시지 출력
  if (!post) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">존재하지 않는 게시물입니다.</h2>
          <Link to="/">
            <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md mt-4">
              홈으로
            </button>
          </Link>
        </div>
      </div>
    );
  }

  // 데이터가 있으면 Updater 컴포넌트 렌더링
  const onUpdate = async (updatedPost) => {
    try {
      const updatedPostData = await PostAPI.updatePost(id, updatedPost);
      console.log("게시물 업데이트 완료:", updatedPostData);
      navigate(`/post/${id}`);
    } catch (error) {
      console.error("게시물 업데이트 실패:", error.message);
    }
  };
  return <Updater onUpdate={onUpdate} post={post} />;
}
