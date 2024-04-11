import React, { useState, useRef } from "react";
import QuillEditor from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./custom.css";
import TagInput from "./TagInput";

const Writer = ({ onWrite }) => {
  const [title, setTitle] = useState(""); // 제목 상태 추가
  const [content, setContent] = useState(""); // Editor state
  const [tags, setTags] = useState([]); // 태그 상태 추가
  const quill = useRef(); // Editor ref

  // Handler to handle button clicked
  function handleSummit() {
    onWrite({ title, content, tags });
  }

  // 추가할수 있는 기능 또는 플러그인 , ex : 글씨체, image올리기 등.
  const modules = {
    toolbar: {
      container: [
        /* 어떤 기능들의 버튼들이 작성하는곳에 나타났으면 하는가.*/
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "blockquote"],
        [{ color: [] }],
        [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
        ["link", "image"],
        ["clean"],
      ],
    },
    clipboard: {
      matchVisual: false,
    },
  };

  // text에 적용할수 있는옵션들 나열
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "clean",
  ];

  return (
    <div className="p-8 flex flex-col w-2/3">
      <label className="text-lg font-semibold">제목</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full block px-4 py-2 border mt-2 focus:outline-none focus:border-blue-500"
      />
      <label className="text-lg font-semibold mt-4">내용</label>
      <QuillEditor
        ref={(el) => (quill.current = el)}
        className="mt-2 w-full"
        theme="snow"
        value={content}
        formats={formats}
        modules={modules}
        onChange={(value) => setContent(value)}
      />
      <TagInput tags={tags} setTags={setTags} />
      <div className="flex justify-end">
        <button
          onClick={handleSummit}
          className="w-40 bg-blue-500 text-white font-semibold px-4 py-2 my-6"
        >
          등록
        </button>
      </div>
    </div>
  );
};

export default Writer;
