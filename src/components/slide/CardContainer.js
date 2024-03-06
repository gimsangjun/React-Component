import React, { useState, useEffect } from "react";
import Card from "./Card";
import styled from "styled-components";

const Container = styled.div`
  overflow: hidden;
  background-color: beige;
`;

const Wrap = styled.div`
  display: flex;
  flex: 8;
  margin-top: 15px;
  margin-bottom: 25px;

  /* overflow: hidden; */
  transition: transform 1s; /* 트랜지션 효과 추가 */
  transform: ${({ transformvalue }) => `translateX(${transformvalue}px)`};
`;

export default function CardContainer({ slides, currentIndex, contentWidth, marginRight }) {
  const [transformValue, setTransformValue] = useState(0);

  // TODO: useEffect의 정확한 사용법, 아래를 이용해서 예시로 정리
  useEffect(() => {
    const newTransformValue = currentIndex * (contentWidth + marginRight);
    setTransformValue(newTransformValue);
  }, [currentIndex, contentWidth, marginRight]);

  return (
    <Container>
      {/* TODO: console.log 경고 표시 뜨긴하는데...흠.. */}
      <Wrap transformvalue={transformValue}>
        {slides.map((slide, index) => (
          <Card
            key={index}
            imgUrl={slide.imgUrl}
            contentwidth={contentWidth}
            marginright={marginRight}
          />
        ))}
      </Wrap>
    </Container>
  );
}
