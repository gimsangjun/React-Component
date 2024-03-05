import React, { useState } from "react";
import Star from "./Star";

function createArray(length) {
  return [...Array(length)];
}

export default function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(3);

  function onClick(index) {
    setSelectedStars(index + 1);
  }

  return (
    <div>
      {createArray(totalStars).map((_, i) => (
        <Star onClick={() => onClick(i)} selectedStars={selectedStars > i} />
      ))}
    </div>
  );
}
