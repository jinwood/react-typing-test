import React from "react";
import styled from "@emotion/styled/macro";
import { WordCloud } from "./";

export function Container() {
  const StyledDiv = styled.div`
    display: flex;
  `;

  return (
    <StyledDiv>
      <WordCloud />
    </StyledDiv>
  );
}
