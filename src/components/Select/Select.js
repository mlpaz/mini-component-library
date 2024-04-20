import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

function getTextWidth(inputText) {}

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  const font = "16px 'Roboto', sans-serif";

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context.font = font;
  const widthNumber = context.measureText(displayedValue).width + 60;
  const width = Math.ceil(widthNumber) + "px";
  console.info(width);

  return (
    <Wrapper>
      <SelectWrapper
        value={value}
        onChange={onChange}
        style={{ "--width": width }}
      >
        {children}
      </SelectWrapper>
      <ChevronDown id="chevron-down" size={24} strokeWidth={2} />
    </Wrapper>
  );
};

const ChevronDown = styled(Icon)`
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: -1;
`;

const SelectWrapper = styled.select`
  width: var(--width);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 12px 52px 12px 12px;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  border: none;
  &:hover {
    color: ${COLORS.black};
  }
`;

const Wrapper = styled.div`
  color: ${COLORS.gray700};
  position: relative;
  width: fit-content;
  display: inline-block;
  &:hover {
    color: ${COLORS.black};
  }
`;
export default Select;
