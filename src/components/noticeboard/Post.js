import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post, username, onDelete }) => {
  // 현재 사용자와 게시물 작성자가 동일한지 확인하는 함수
  const isOwner = post.owner === username;

  return (
    <div className="bg-gray-100 rounded-lg p-6 mb-8">
      <h3 className="text-3xl font-semibold mb-4">{post.title}</h3>
      <div className="text-gray-800 mb-4" dangerouslySetInnerHTML={{ __html: post.content }}></div>
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag, index) => (
          <span key={index} className="bg-blue-200 text-blue-800 px-2 py-1 rounded-md">
            #{tag}
          </span>
        ))}
      </div>
      <p className="text-gray-600 mt-4">작성자: {post.owner}</p>
      <p className="text-gray-600">작성일: {post.date}</p>

      {/* 현재 사용자가 게시물 작성자인 경우에만 Update와 Delete 버튼 표시 */}
      {isOwner && (
        <div className="mt-4">
          <Link to={`/post/update/${post.id}`}>
            <button className="bg-green-500 text-white font-semibold px-4 py-2 rounded-md mr-2">
              수정
            </button>
          </Link>
          <button
            className="bg-red-500 text-white font-semibold px-4 py-2 rounded-md"
            onClick={() => onDelete(post.id)}
          >
            삭제
          </button>
        </div>
      )}
    </div>
  );
};

export default Post;
