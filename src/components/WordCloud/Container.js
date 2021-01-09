import React from "react";
import styled from "@emotion/styled/macro";
import { WordCloud } from "./";
import { BaseStyles } from "../../styles";

export function Container() {
  const StyledDiv = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    background-color: ${BaseStyles.bgColor};
  `;

  return (
    <StyledDiv>
      <WordCloud />
    </StyledDiv>
  );
}
