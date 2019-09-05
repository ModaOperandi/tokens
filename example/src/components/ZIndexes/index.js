import React from 'react';
import { space } from 'moda-themes';
import styled from 'styled-components';

const { 'z-indexes': zs } = space;

const Container = styled.div``;

const ZIndex = styled.div`
  display: flex;
  font-size: 0.875rem;
  line-height: 1.5;
`;

const Label = styled.div`
  flex: 1;
  text-align: right;
  padding-right: 1em;
`;

const Value = styled.div`
  flex: 1;
  color: ${props => props.theme.colors.cement};
`;

export const ZIndexes = () => (
  <Container>
    {Object.entries(zs).map(([key, value]) => (
      <ZIndex>
        <Label>z-index('{key}')</Label> <Value>{value}</Value>
      </ZIndex>
    ))}
  </Container>
);
