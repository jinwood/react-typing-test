/** @jsx jsx */
import styled from "@emotion/styled/types/base";
import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

export function Cloud() {
  const [isMoving, setIsMoving] = useState(false);
  const cloudProps = useSpring({ marginRight: isMoving ? 500 : 0 });
  useEffect(() => {
    console.log("set moving");
    setIsMoving(true);
  }, []);
  return <p style={cloudProps}>I'm a cloud</p>;
}
