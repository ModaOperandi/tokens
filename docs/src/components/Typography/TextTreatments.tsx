import React from "react";
import styled from "styled-components";
import { space, typography, colors } from "@moda/tokens";

import { Copy } from "../Copy";

const Container = styled.div`
  margin: ${space.scale[6]};
`;

const Specimen = styled.div`
  display: flex;
  align-items: center;
  padding: ${space.scale[3]} 0;
  border-bottom: 1px solid ${colors.all["forest-green"]};
`;

const Info = styled.div`
  flex: 1;
  padding: ${space.scale[3]} 0;
  text-align: right;
  font-size: ${typography["font-scale"][0]};
`;

const Render = styled.div`
  flex: 4;
  padding: ${space.scale[4]} ${space.scale[6]};
`;

export const TextTreatments: React.FC = () => {
  return (
    <Container>
      {Object.entries(typography["text-treatments"]).map(([key, treatment]) => (
        <Copy key={key} copy={`@include text(${key});`}>
          <Specimen>
            <Info>
              @include text({key})<br />
              font-size: {treatment["font-size"]}
              <br />
              line-height: {treatment["line-height"]}
              <br />
              letter-spacing: {treatment["letter-spacing"]}
              {"text-transform" in treatment && (
                <>
                  <br />
                  text-transform: {treatment["text-transform"]}
                </>
              )}
            </Info>

            <Render
              style={{
                fontSize: treatment["font-size"],
                lineHeight: treatment["line-height"],
                letterSpacing: treatment["letter-spacing"],
                ...("text-transform" in treatment
                  ? { textTransform: treatment["text-transform"] }
                  : {})
              }}
            >
              All their equipment and instruments are alive
            </Render>
          </Specimen>
        </Copy>
      ))}
    </Container>
  );
};
