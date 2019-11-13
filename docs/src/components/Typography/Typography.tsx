import React from "react";
import styled from "styled-components";
import { space, colors } from "@moda/tokens";

import { FontSize } from "./FontSize";
import { LineHeight } from "./LineHeight";
import { LetterSpacing } from "./LetterSpacing";

const Container = styled.div`
  padding: ${space.scale[5]};
  color: ${colors.all.ink};
  background-color: ${colors.all.seafoam};
`;

export const Typography: React.FC = () => (
  <Container>
    <FontSize />
    <LineHeight />
    <LetterSpacing />
  </Container>
);
