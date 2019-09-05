import React from 'react';
import { breakpoints } from 'moda-themes';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  overflow: hidden;
  color: ${props => props.theme.colors['forest-green']};

  &:after {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 25%;
    background: linear-gradient(to right, rgba(255, 255, 255, 0.001), white);
  }

  &:hover {
    margin-right: -100%;
  }
`;

const Breakpoint = styled.div`
  border-top: 0.125em solid;
  width: ${props => props.width};
  font-size: 0.875rem;
  padding: 0.5em 0 1em 0.5em;

  &:last-child {
    padding-bottom: 0;
  }
`;

export const Breakpoints = () => {
  return (
    <Container>
      {Object.entries(breakpoints).map(([key, value]) => {
        return (
          <Breakpoint width={value}>
            @include breakpoint('{key}') = @media (min-width: {value}) {'{'} ...{' '}
            {'}'}
          </Breakpoint>
        );
      })}
    </Container>
  );
};
