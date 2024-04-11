import React, { useState, useEffect } from "react";
import { getPosts } from "../../api/posts";
import PostList from "../../components/noticeboard/PostList";
import LoadingPage from "../../pages/LoadingPage";

// TODO: 정리, 원래 recat-component에 이 내용을 추가, 원래는 redux버전이었음.
// 그냥 CRUD 게시판 이부분 다 정리해야할듯. 좋은예시임/
export default function PostListContainer() {
  // 상태를 관리하기 위해 사용
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 부수 효과를 수행하기위해, 네트워크 요청이나 데이터 불러오기와 같은 비동기 작업을 할때
  useEffect(() => {
    //  호출해야하니까. 그리고 가독성을 위해
    const fetchPosts = async () => {
      try {
        // TODO: 원래는 axios.get(URL)로 해야됨. 아니면 뭐 따로 apiUtil함수를 비동기로 만들어서 아래랑 똑같이 해도될듯.
        const fetchedPosts = await getPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("게시물을 불러오는 중에 오류가 발생했습니다:", error);
      } finally {
        setLoading(false); // 데이터 로딩이 끝나면 로딩 상태 변경
      }
    };

    fetchPosts();
  }, []);

  console.log(posts);

  // 로딩 중일 때는 로딩 페이지 출력
  if (loading) {
    return <LoadingPage />;
  }

  return <PostList posts={posts} />;
}
