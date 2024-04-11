import React from "react";
import { Link } from "react-router-dom";

const PostList = ({ posts }) => {
  console.log("posts", posts);
  return (
    <div className="w-700 mx-auto">
      <h2 className="text-3xl font-bold mb-6">게시물 목록</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="bg-gray-100 rounded-lg p-6 mb-8">
            <Link to={`/post/${post.id}`}>
              <h3 className="text-5xl font-semibold mb-4 border-b-2 border-gray-400 pb-2">
                {post.title}
              </h3>
            </Link>
            <p className="text-gray-600 mb-2">작성자: {post.owner}</p>
            <div
              // TODO : dangerouslySetInnerHTML 속성을 사용하여 HTML 형식으로 표시하고 있습니다.
              // 이 속성을 사용할 때는 주의해야 합니다. 사용자가 제공한 콘텐츠를 렌더링하기 때문에 XSS(Cross-Site Scripting) 공격에 취약
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="text-gray-800 mb-2"
            />
            <p className="text-gray-600 mb-4">{post.date}</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span key={index} className="bg-blue-200 text-blue-800 px-2 py-1 rounded-md">
                  #{tag}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
