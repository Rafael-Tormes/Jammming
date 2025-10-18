import React, { useState } from "react";
import { IoIosSkipBackward } from "react-icons/io";
import { MdOutlinePauseCircleOutline } from "react-icons/md";
import { IoIosSkipForward } from "react-icons/io";

export default function Track(props) {
  return (
    <>
      <img src={props.albumCover} alt={props.title} />
      <IoIosSkipBackward />
      <MdOutlinePauseCircleOutline />
      <IoIosSkipForward />
    </>
  );
}
