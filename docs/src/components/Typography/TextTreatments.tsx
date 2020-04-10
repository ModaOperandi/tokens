import React from "react";
import styled, { css } from "styled-components";
import { spacing, typography, colors, text } from "@moda/tokens";

import { Copy } from "../Copy";

const Container = styled.div`
  margin: ${spacing(6)};
`;

const Specimen = styled.div<{ last?: boolean }>`
  display: flex;
  align-items: center;
  padding: ${spacing(3, 0)};
  overflow: hidden;
  ${({ last }) =>
    !last &&
    css`
      border-bottom: 1px solid ${colors.all["forest-green"]};
    `}
`;

const Info = styled.div`
  ${text("body2")};
  flex: 1;
  padding: ${spacing(3, 0)};
  text-align: right;
`;

const Render = styled.div`
  flex: 4;
  padding: ${spacing(4, 6)};
`;

export const TextTreatments: React.FC<{ font?: "sans" | "serif" }> = ({
  font = "sans",
}) => {
  const treatments = Object.entries(typography["text-treatments"]);

  return (
    <Container>
      {treatments.map(([key, treatment], i) => (
        <Copy
          key={key}
          copy={`@include text(${key}${
            font === "serif" ? ", $font: serif" : ""
          });`}
        >
          <Specimen last={i === treatments.length - 1}>
            <Info>
              @include text({key}
              {font === "serif" ? ", $font: serif" : ""})
              <br />
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
              {"font-weight" in treatment && (
                <>
                  <br />
                  font-weight: {treatment["font-weight"]}
                </>
              )}
            </Info>

            <Render
              // @ts-ignore
              style={{
                fontFamily: typography["fonts"][font].join(","),
                fontSize: treatment["font-size"],
                lineHeight: treatment["line-height"],
                letterSpacing: treatment["letter-spacing"],
                ...("text-transform" in treatment
                  ? { textTransform: treatment["text-transform"] }
                  : {}),
                ...("font-weight" in treatment
                  ? { fontWeight: treatment["font-weight"] }
                  : {}),
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
