import React from "react";
import modaThemes from "moda-themes";
import styled from "styled-components";

const {
  data: {
    space: { scale }
  }
} = modaThemes;

const Container = styled.div`
  padding: 1em;
  color: ${props => props.theme.colors["klein-blue"]};
  background-color: ${props => props.theme.colors["lilac"]};
`;

const Unit = styled.div`
  display: flex;
  margin: 2em 0;
  align-items: center;
  justify-content: center;
`;

const Measure = styled.div`
  position: relative;
  width: ${props => props.theme.scale[12]};
  height: ${props => props.size};
  background-color: ${props => props.theme.colors["klein-blue"]};

  &:before {
    left: 100%;
  }

  &:after {
    right: 100%;
  }
`;

const Label = styled.div`
  font-size: 0.75rem;
  flex: 1;
  text-align: right;
  padding-right: 1em;
`;

const Value = styled.div`
  flex: 1;
`;

export const Scale = () => {
  return (
    <Container>
      {scale.map((size, i) => (
        <Unit key={size}>
          <Label>
            space({i}) = {size}
          </Label>

          <Value>
            <Measure size={size} />
          </Value>
        </Unit>
      ))}
    </Container>
  );
};
