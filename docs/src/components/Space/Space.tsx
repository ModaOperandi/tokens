import React from "react";
import styled from "styled-components";
import { space, spacing, text, color } from "@moda/tokens";
import { Copy } from "../Copy";

const Container = styled.div`
  padding: ${space.scale[5]};
  color: ${color("klein-blue")};
  background-color: ${color("lilac")};
`;

const Unit = styled.div`
  display: flex;
  margin: ${spacing(6, 0)};
  align-items: center;
  justify-content: center;
`;

const Measure = styled.div<{ size: string }>`
  position: relative;
  width: 100%;
  height: ${({ size }) => size};
  background-color: ${color("klein-blue")};

  &:before {
    left: 100%;
  }

  &:after {
    right: 100%;
  }
`;

const Label = styled.div`
  ${text("body2")};
  flex: 1;
  text-align: right;
  padding-right: ${spacing(4)};
`;

const Value = styled.div`
  flex: 1;
`;

export const Space = () => {
  return (
    <Container>
      {space.scale.map((size, i) => (
        <Copy key={size} copy={`space(${i})`}>
          <Unit>
            <Label>
              space({i}) = {size} ({parseFloat(size) * 16}px)
            </Label>

            <Value>
              <Measure size={size} />
            </Value>
          </Unit>
        </Copy>
      ))}
    </Container>
  );
};
