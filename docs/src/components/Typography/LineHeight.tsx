import React from "react";
import styled from "styled-components";
import { space, typography } from "@moda/tokens";

import { Copy } from "../Copy";

const Container = styled.div`
  display: flex;
  margin: ${space.scale[6]};
`;

const Specimen = styled.div`
  padding: ${space.scale[4]} ${space.scale[5]};
  font-size: 1rem;
`;

const lorem =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam aliquam, similique eaque vel nobis incidunt ab alias hic iste dolorum tempore minus aspernatur reprehenderit eligendi labore porro magni reiciendis praesentium.";

export const LineHeight: React.FC = () => {
  return (
    <Container>
      {typography["line-heights"].map((lineHeight, i) => (
        <Copy key={lineHeight} copy={`line-height(${i})`}>
          <Specimen style={{ lineHeight }}>
            line-height({i}) = ({lineHeight})
            <br />
            <br />
            {lorem}
          </Specimen>
        </Copy>
      ))}
    </Container>
  );
};
