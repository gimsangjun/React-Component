import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Tag from "./Tag";

const CardWrap = styled.div`
  width: 222px;
  /* height: 288px; */
  background-color: #eee;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  & > * {
    margin: 2px;
  }
`;

const Img = styled.img`
  width: 222px;
  height: 129.6px;
  margin: 0;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const Owner = styled.small`
  display: block;
  font-weight: bold;
`;

const Views = styled.small`
  margin-right: 2px;
`;

const PostDate = styled.small`
  margin-left: 2px;
`;

const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 3px;

  & > * {
    margin-bottom: 4px;
  }
`;

const Colors = ["#FF7F7F", "#FFF27F", "#C5FF98", "#7FE8FF"];

export default function Card({ data }) {
  const { title, imgUrl, views, postDate, tags } = data;

  const [titleText, setTitleText] = useState(title);
  const [titleOverflow, setTitleOverflow] = useState(false);

  // 글자수 넘어가면 ...으로 표시
  useEffect(() => {
    const titleElement = document.getElementById("title");

    if (titleElement) {
      setTitleText(titleElement.textContent);
      setTitleOverflow(titleElement.scrollHeight > 70); // TODO: 이런 특정 height도 상수로 관리
    }
  }, []);

  return (
    <CardWrap>
      <Img src={`${process.env.PUBLIC_URL}${imgUrl}`} alt="img" />
      <div>
        {/* TODO: 아래 60글자도 상수로 관리 */}
        <Title id="title">{titleOverflow ? titleText.slice(0, 60) + "..." : titleText}</Title>
        <Owner>LCK</Owner>
        <div>
          <Views>{views}</Views>•<PostDate>{postDate}</PostDate>
        </div>
        <TagContainer>
          {tags.map((tag, idx) => (
            <Tag data={tag} color={Colors[idx]} />
          ))}
        </TagContainer>
      </div>
    </CardWrap>
  );
}
