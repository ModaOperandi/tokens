import React from "react";
import styled from "styled-components";
import { space, typography } from "@moda/tokens";

import { Copy } from "../Copy";

const Container = styled.div`
  margin: ${space.scale[6]};
`;

const Specimen = styled.div`
  text-align: center;
  padding: ${space.scale[3]};
  line-height: ${typography["line-heights"][2]};

  > div {
    margin: ${space.scale[3]} 0;
  }
`;

export const LetterSpacing: React.FC = () => {
  return (
    <Container>
      {typography["letter-spacing"].map((letterSpacing, i) => (
        <Copy key={letterSpacing} copy={`letter-spacing(${i})`}>
          <Specimen style={{ letterSpacing }}>
            letter-spacing({i}) = ({letterSpacing})
          </Specimen>
        </Copy>
      ))}
    </Container>
  );
};
