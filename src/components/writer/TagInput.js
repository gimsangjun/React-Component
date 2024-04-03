import React, { useState } from "react";

const TagInput = ({ tags, setTags }) => {
  const [tagValue, setTagValue] = useState("");
  const [error, setError] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && tagValue.trim() !== "") {
      // 중복 태그 확인
      if (tags.includes(tagValue.trim())) {
        setError("이미 입력된 태그입니다.");
        setTagValue("");
        return;
      }

      // 중복이 아니면 태그 추가
      setTags([...tags, tagValue.trim()]);
      setTagValue("");
      setError("");
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="flex flex-wrap items-center gap-2 mt-2">
      {tags.map((tag, index) => (
        <div key={index}>
          <div className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full cursor-pointer hover:bg-gray-300">
            #{tag}
            <span onClick={() => handleRemoveTag(tag)} className="ml-2 text-red-500 cursor-pointer">
              &times;
            </span>
          </div>
        </div>
      ))}
      <input
        type="text"
        value={tagValue}
        onChange={(e) => {
          setTagValue(e.target.value);
          setError(""); // 입력할 때마다 에러 메시지 초기화
        }}
        onKeyDown={handleKeyDown}
        placeholder="태그를 입력하세요..."
        className="px-3 py-1 border rounded-md focus:outline-none focus:border-blue-500"
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default TagInput;
