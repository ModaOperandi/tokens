import React from "react";
import styled from "styled-components";
import { space, colors, typography } from "@moda/tokens";

const Container = styled.div`
  padding: ${space.scale[5]};
  color: ${colors.all["black"]};
  background-color: ${colors.all["seafoam"]};
`;

const Family = styled.div`
  margin: ${space.scale[6]};

  &:nth-child(even) {
    text-align: right;
  }
`;

const SizeSpecimen = styled.div`
  line-height: ${typography["line-heights"][4]};
`;

const LineHeights = styled.div`
  display: flex;
  margin: ${space.scale[6]};
`;

const LineHeightSpecimen = styled.div`
  width: 25%;
  padding-right: ${space.scale[6]};
  font-size: 1rem;
`;

const LetterSpacing = styled.div`
  margin: ${space.scale[6]};
`;

const LetterSpacingSpecimen = styled.div`
  line-height: ${typography["line-heights"][2]};
  margin: ${space.scale[6]} 0;
  text-align: center;

  > div {
    margin: ${space.scale[3]} 0;
  }
`;

const scale = [...typography["font-scale"]].sort(x => -parseFloat(x));

const lorem =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam aliquam, similique eaque vel nobis incidunt ab alias hic iste dolorum tempore minus aspernatur reprehenderit eligendi labore porro magni reiciendis praesentium.";

export const Typography = () => {
  return (
    <Container>
      {["sans", "serif"].map(family => (
        <Family
          key={family}
          style={{
            fontFamily: typography.fonts[
              family as keyof typeof typography.fonts
            ].join(",")
          }}
        >
          {scale.map((fontSize, i) => (
            <SizeSpecimen key={family + fontSize} style={{ fontSize }}>
              font-size({scale.length - (i + 1)}) {fontSize} (
              {parseFloat(fontSize) * 16})
            </SizeSpecimen>
          ))}
        </Family>
      ))}

      <LineHeights>
        {typography["line-heights"].map((lineHeight, i) => (
          <LineHeightSpecimen style={{ lineHeight }}>
            line-height: line-height({i}) = ({lineHeight})
            <br />
            <br />
            {lorem}
          </LineHeightSpecimen>
        ))}
      </LineHeights>

      <LetterSpacing>
        {typography["letter-spacing"].map((letterSpacing, i) => (
          <LetterSpacingSpecimen style={{ letterSpacing }}>
            {[0, 1, 2, 3].map(fontSizeI => (
              <div style={{ fontSize: typography["font-scale"][fontSizeI] }}>
                letter-spacing: letter-spacing({i}) = ({letterSpacing}) - MODA
                OPERANDI
              </div>
            ))}
          </LetterSpacingSpecimen>
        ))}
      </LetterSpacing>
    </Container>
  );
};
