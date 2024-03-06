import React from "react";
import styled from "styled-components";

const Slide = styled.div`
  // TODO: 동적으로 하는 방법은?
  width: ${({ width }) => width};
  height: 250px;
  background-color: #eee;
  margin-right: ${({ marginright }) => marginright};
  box-shadow: 10px 10px 10px -5px;
  transition: transform 0.5s ease;

  &:hover {
    box-shadow: 10px 10px 10px 0px;
    transform: translate(6px, -6px);
  }
`;

const SlideImage = styled.img`
  /*TODO :100%로 했을때 줄어들음 ??왜 , 그전 파일, 직접해볼것.*/
  width: ${({ width }) => width};
  height: 50%;
  object-fit: cover;
`;

// TODO : 이런식으로 contentwidth를 넘겨주는게 맞나? 더 효율적인 방식은?
export default function Card({ imgUrl, contentwidth, marginright }) {
  return (
    <Slide width={`${contentwidth}px`} marginright={`${marginright}px`}>
      <SlideImage src={imgUrl} width={`${contentwidth}px`} alt="슬라이드 이미지" />
    </Slide>
  );
}
