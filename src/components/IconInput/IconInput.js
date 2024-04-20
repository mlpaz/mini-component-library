import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const INPUT_STYLES = {
  small: {
    "--font-size": 14 + "px",
    "--padding": "8px 4px 1px 24px",
  },
  large: {
    "--font-size": 18 + "px",
    "--padding": "12px 6px 2px 36px",
  },
};

const ICON_SIZES = {
  small: { size: 16, strokeWidth: 1 },
  large: { size: 24, strokeWidth: 2 },
};

const ICON_STYLE = {
  small: {
    "--top": 6 + "px",
    "--left": 4 + "px",
  },
  large: {
    "--top": 8 + "px",
    "--left": 4 + "px",
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const style = { "--width": Math.abs(width) + "px" };

  return (
    <Wrapper style={style}>
      <WrapperIcon
        id={icon}
        size={ICON_SIZES[size].size}
        strokeWidth={ICON_SIZES[size].strokeWidth}
        style={ICON_STYLE[size]}
      />
      <Input placeholder={placeholder} style={INPUT_STYLES[size]} />
    </Wrapper>
  );
};

const WrapperIcon = styled(Icon)`
  position: absolute;
  left: var(--left);
  top: var(--top);
  pointer-events: none;
`;

const Input = styled.input`
  font-size: var(--font-size);
  color: ${COLORS.gray700};
  font-weight: 700;
  width: 100%;
  display: block;
  appearance: none;
  border: none;
  padding: var(--padding);
  margin: 4px;
  border-bottom: 2px solid ${COLORS.black};
  &:focus {
    outline: 1px dotted #212121;
    outline: 2px auto -webkit-focus-ring-color;
    outline-offset: 2px;
  }

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
  &:hover {
    color: ${COLORS.black};
  }
`;

const Wrapper = styled.div`
  color: ${COLORS.gray700};
  position: relative;
  width: var(--width);
  &:hover {
    color: ${COLORS.black};
  }
`;

export default IconInput;
