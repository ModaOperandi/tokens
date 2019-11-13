import React from "react";
import styled from "styled-components";
import { space, colors, typography } from "@moda/tokens";

import { Copy } from "../Copy";

const Container = styled.div`
  padding: ${space.scale[5]};
  color: ${colors.all["klein-blue"]};
  background-color: ${colors.all.lilac};
`;

const Unit = styled.div`
  display: flex;
  margin: ${space.scale[6]} 0;
  align-items: center;
  justify-content: center;
`;

const Measure = styled.div<{ size: string }>`
  position: relative;
  width: 100%;
  height: ${props => props.size};
  background-color: ${colors.all["klein-blue"]};

  &:before {
    left: 100%;
  }

  &:after {
    right: 100%;
  }
`;

const Label = styled.div`
  font-size: ${typography["font-scale"][0]};
  flex: 1;
  text-align: right;
  padding-right: ${space.scale[4]};
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
