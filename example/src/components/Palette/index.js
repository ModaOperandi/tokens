import React from "react";
import styled from "styled-components";

import { Swatch } from "../Swatch";

const Container = styled.div`
  margin: 3em auto;
`;

const Colors = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${props =>
    props.isDeprecated &&
    `
      position: relative;

      &:after {
        content: "DEPRECATED";
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(255, 255, 255, 0.75);
        transition: opacity 250ms;
        font-size: 1.5rem;
        pointer-events: none;
      }

      &:hover:after {
        opacity: 0;
      }
  `}
`;

export const Palette = ({ name, colors, isThemed, ...rest }) => {
  return (
    <Container {...rest}>
      <h3>{name}</h3>

      <Colors isDeprecated={name === "legacy"}>
        {colors.map(color => (
          <Swatch key={color.name} isFullWidth={isThemed} {...color} />
        ))}
      </Colors>
    </Container>
  );
};
