import React from "react";
import styled from "styled-components";
import { space, typography } from "@moda/tokens";

import { Copy } from "../Copy";

const Container = styled.div`
  margin: ${space.scale[6]};

  &:nth-child(even) {
    text-align: right;
  }
`;

const Specimen = styled.div`
  line-height: ${typography["line-heights"][0]};
  margin: ${space.scale[3]};
`;

const scale = [...typography["font-scale"]].sort(x => -parseFloat(x));

export const FontSize: React.FC = () => {
  return (
    <>
      {["sans", "serif"].map(family => (
        <Container
          key={family}
          style={{
            fontFamily: typography.fonts[
              family as keyof typeof typography.fonts
            ].join(",")
          }}
        >
          {scale.map((fontSize, i) => (
            <Copy
              key={family + fontSize}
              copy={`font-size(${scale.length - (i + 1)})`}
            >
              <Specimen style={{ fontSize }}>
                font-size({scale.length - (i + 1)}) = {fontSize} (
                {parseFloat(fontSize) * 16}px)
              </Specimen>
            </Copy>
          ))}
        </Container>
      ))}
    </>
  );
};
