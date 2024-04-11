import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { getPostById, deletePost } from "../../api/posts";
import { Link } from "react-router-dom";
import Post from "../../components/noticeboard/Post";
import LoadingPage from "../../pages/LoadingPage";

export default function PostContainer() {
  const { username } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getPostById(parseInt(id));
        setPost(fetchedPosts);
      } catch (error) {
        console.error("게시물을 불러오는 중에 오류가 발생했습니다:", error);
      } finally {
        setLoading(false); // 데이터 로딩이 끝나면 로딩 상태 변경
      }
    };

    fetchPosts();
  }, [id]);

  if (loading) {
    return <LoadingPage />;
  }

  // 찾은 post가 없으면 오류 페이지 출력
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

  const onDelete = async () => {
    try {
      await deletePost(post.id);
      console.log("게시물 삭제 완료:", post.id);
      navigate("/");
    } catch (error) {
      console.error("게시물 삭제 실패:", error.message);
    }
  };

  return <Post post={post} username={username} onDelete={onDelete} />;
}
