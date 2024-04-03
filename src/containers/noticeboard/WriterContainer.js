import React from "react";
import { useDispatch } from "react-redux";
import { write } from "../../modules/noticeboard";
import Writer from "../../components/writer/Writer";

export default function WriterContainer() {
  const dispatch = useDispatch();

  const onWrite = (post) => dispatch(write(post));

  return <Writer onWrite={onWrite} />;
}
