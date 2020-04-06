import React from "react";
import styled from "styled-components";
import { spacing, color, typography, text } from "@moda/tokens";
import { TextTreatments } from "./TextTreatments";
import { ValueTable } from "./ValueTable";

const Container = styled.div`
  padding: ${spacing(5)};
  color: ${color("ink")};
  background-color: ${color("seafoam")};
`;

const Rule = styled.hr`
  height: 1px;
  width: 100%;
  border: 0;
  background-color: rgba(0, 0, 0, 0.0625);
  margin: ${spacing(6, 0)};
`;

const H3 = styled.h3`
  ${text("h6")}
  margin-bottom: ${spacing(6)};
`;

export const Typography: React.FC = () => (
  <Container>
    <TextTreatments />

    <Rule />

    <TextTreatments font="serif" />

    <Rule />

    <H3>Font Size</H3>

    <ValueTable
      getter="__dangerously-get-font-size__"
      values={typography["font-scale"]}
    />

    <Rule />

    <H3>Line Height</H3>

    <ValueTable
      getter="__dangerously-get-line-height__"
      values={typography["line-heights"]}
    />

    <Rule />

    <H3>Letter Spacing</H3>

    <ValueTable
      getter="__dangerously-get-letter-spacing__"
      values={typography["letter-spacing"]}
    />
  </Container>
);
