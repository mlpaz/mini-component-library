/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const width = 370;

const SIZES = {
  small: {
    "--height": 8 + "px",
  },
  medium: {
    "--height": 12 + "px",
  },
  large: {
    "--height": 24 + "px",
    "--padding": 4 + "px",
  },
};

const ProgressBar = ({ value, size }) => {
  if (value > 100) value = 100;
  if (value < 0) value = 0;

  return (
    <Wrapper style={SIZES[size]}>
      <Progress>
        <Bar style={{ "--value": value + "%" }} />
      </Progress>
    </Wrapper>
  );
};

const Bar = styled.div`
  height: 100%;
  width: var(--value);
  background-color: ${COLORS.primary};
`;

const Progress = styled.div`
  border-radius: 4px;
  height: 100%;
  overflow: clip;
`;

const Wrapper = styled.div`
  padding: var(--padding);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  height: var(--height);
  border-radius: 4px;
  width: ${width}px;
  background-color: ${COLORS.transparentGray15};
`;

export default ProgressBar;
