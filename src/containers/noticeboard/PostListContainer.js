import React, { useState, useEffect } from "react";
import PostList from "../../components/noticeboard/PostList";
import LoadingPage from "../../pages/LoadingPage";
import postAPI from "../../utils/api/postAPI";

// TODO: 정리, 원래 recat-component에 이 내용을 추가, 원래는 redux버전이었음.
// 그냥 CRUD 게시판 이부분 다 정리해야할듯. 좋은예시임/
export default function PostListContainer() {
  // 상태를 관리하기 위해 사용
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect: 부수 효과를 수행하기위해, 네트워크 요청이나 데이터 불러오기와 같은 비동기 작업을 할때
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetcgedPosts = await postAPI.getAllPosts();
        setPosts(fetcgedPosts);
        setLoading(false);
      } catch (error) {
        console.error("게시물을 불러오는 중 에러가 발생했습니다:", error);
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);
  // 로딩 중일 때는 로딩 페이지 출력
  if (loading) {
    return <LoadingPage />;
  }

  return <PostList posts={posts} />;
}
