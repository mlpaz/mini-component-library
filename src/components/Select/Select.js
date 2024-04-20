import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

function getTextWidth(inputText) {
  const font = "16px 'Roboto', sans-serif";
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context.font = font;
  const widthNumber = context.measureText(inputText).width + 60;
  return Math.ceil(widthNumber) + "px";
}

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  const width = getTextWidth(displayedValue);
  console.info(width);

  return (
    <Wrapper>
      <NativeSelect
        value={value}
        onChange={onChange}
        style={{ "--width": width }}
      >
        {children}
      </NativeSelect>
      <PrententionalSelect>
        {displayedValue}
        <SelectIcon id="chevron-down" size={24} strokeWidth={2} />
      </PrententionalSelect>
    </Wrapper>
  );
};
const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  appearance: none;
`;

const PrententionalSelect = styled.div`
  width: fit-content;
  padding: 12px 52px 12px 12px;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  border: none;
  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const SelectIcon = styled(Icon)`
  position: absolute;
  top: 8px;
  right: 8px;
  pointer-events: none;
`;

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`;
export default Select;
