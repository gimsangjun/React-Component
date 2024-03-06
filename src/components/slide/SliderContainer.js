import React, { useState, useEffect } from "react";
import styled from "styled-components";
import slides from "./data.json";
import CardContainer from "./CardContainer";

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  /* width: 70%; */
  width: 700px;
  background-color: aquamarine;
`;

const PrevButton = styled.button`
  flex: 1; /* 크기 지정을 위함. */
  transform: translateY(-50%);
  font-size: 24px;
  opacity: ${({ opacity }) => opacity};
  background: none;
  border: none;
  cursor: pointer;
`;

const NextButton = styled.button`
  flex: 1; /* 크기 지정을 위함. */
  transform: translateY(-50%);
  font-size: 24px;
  opacity: ${({ opacity }) => opacity};
  background: none;
  border: none;
  cursor: pointer;
`;

const contentWidth = 240;
const marginRight = 15;
const slideInterval = 2000; // 슬라이드 변경 간격
let slideAutoDirection = "RIGHT"; // 자동 슬라이드 이동 방향

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextOpacity, setNextOpacity] = useState(1);
  const [prevOpacity, setPrevOpacity] = useState(0.2);
  let intervalId;

  // 자동 넘기기
  useEffect(() => {
    // 슬라이드 변경 간격마다 nextSlide 함수 호출
    // TODO: 경고표시, useRef를 사용해라?
    intervalId = setInterval(() => {
      if (slideAutoDirection === "RIGHT") nextSlide();
      else prevSlide();
    }, slideInterval);
    return () => {
      // 컴포넌트가 unmount 되거나 재랜더링되기 전에 interval 해제
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  function handleIndex(value) {
    // 오른쪽 버튼 비활성화
    if (currentIndex <= -(slides.length - 3)) {
      setNextOpacity(0.2);
      setPrevOpacity(1);
      slideAutoDirection = "LEFT";
    }

    // 왼쪽 버튼 비활성화
    if (currentIndex >= -1) {
      setPrevOpacity(0.2);
      setNextOpacity(1);
      slideAutoDirection = "RIGHT";
    }

    setCurrentIndex(currentIndex + value);
  }

  function nextSlide() {
    // 오른쪽 끝까지 왔으면 그만
    if (currentIndex < -(slides.length - 3)) return;
    handleIndex(-1);
    setPrevOpacity(1);
  }

  function prevSlide() {
    // 왼쪽끝까지 왔으면 그만
    if (currentIndex > -1) return;
    handleIndex(1);
  }

  function handlePrevClick() {
    // 자동넘기기 기능 정지
    clearInterval(intervalId);
    slideAutoDirection = "LEFT";
    prevSlide();
  }

  function handleNextClick() {
    // 자동 넘기기 기능 정지
    clearInterval(intervalId);
    nextSlide();
    slideAutoDirection = "RIGHT";
  }

  return (
    <SliderContainer>
      <PrevButton onClick={handlePrevClick} opacity={prevOpacity}>
        &#10094;
      </PrevButton>
      <CardContainer
        slides={slides}
        currentIndex={currentIndex}
        contentWidth={contentWidth}
        marginRight={marginRight}
      />
      <NextButton onClick={handleNextClick} opacity={nextOpacity}>
        &#10095;
      </NextButton>
    </SliderContainer>
  );
}
