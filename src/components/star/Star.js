import React from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";

export default function Star({ selectedStars, onClick = (e) => e }) {
  const StarIcon = selectedStars ? FaStar : FaRegStar;
  return <StarIcon onClick={onClick} />;
}
