import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const INPUT_STYLES = {
  small: {
    "--font-size": 14 / 16 + "rem",
    "--height": "24px",
    "--underline-size": "1px",
  },
  large: {
    "--font-size": 18 / 16 + "rem",
    "--height": "36px",
    "--underline-size": "2px",
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

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
  ...delegated
}) => {
  const wrapperStyle = { "--width": Math.abs(width) + "px" };
  return (
    <Wrapper style={wrapperStyle}>
      <WrapperIcon style={{ "--size": ICON_SIZES[size].size + "px" }}>
        <Icon
          id={icon}
          size={ICON_SIZES[size].size}
          strokeWidth={ICON_SIZES[size].strokeWidth}
        />
      </WrapperIcon>
      <Input
        {...delegated}
        placeholder={placeholder}
        style={INPUT_STYLES[size]}
      />
    </Wrapper>
  );
};

const WrapperIcon = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 4px;
  margin: auto 0;
  height: var(--size);
`;

const Input = styled.input`
  height: var(--height);
  font-size: var(--font-size);
  color: inherit;
  font-weight: 700;
  width: var(--width);
  display: block;
  appearance: none;
  border: none;
  padding-left: var(--height);
  margin: 4px;
  border-bottom: var(--underline-size) solid ${COLORS.black};
  &:focus {
    outline: 1px dotted #212121;
    outline: 2px auto -webkit-focus-ring-color;
    outline-offset: 2px;
  }

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const Wrapper = styled.label`
  display: block;
  color: ${COLORS.gray700};
  position: relative;

  &:hover {
    color: ${COLORS.black};
  }
`;

export default IconInput;
