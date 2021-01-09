import React from "react";
import { jsx } from "@emotion/react/macro";
import styled from "@emotion/styled/macro";
import { Cloud } from "./Cloud";

export function WordCloud() {
  const P = styled.p`
    color: red;
  `;

  return (
    <div>
      <P>word cloud</P>
      <Cloud />
    </div>
  );
}
