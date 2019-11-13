import React, { useState, useCallback } from "react";
import styled from "styled-components";
import useCopyToClipboard from "react-use/lib/useCopyToClipboard";
import { colors, space, typography } from "@moda/tokens";

interface Props {
  copy: string;
}

enum Mode {
  Resting,
  Copied
}

const Wrapper = styled.div`
  position: relative;
  cursor: pointer;

  &::before {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    box-shadow: 0 0 0 2px ${colors.all.white};
    border-radius: 0.125em;
    opacity: 0;
    transition: opacity 100ms;
  }

  &:hover {
    &::before {
      opacity: 0.9;
    }
  }
`;

const Status = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: ${space.scale[1]} ${space.scale[2]};
  border-radius: 0.25em;
  color: ${colors.all.black};
  background-color: ${colors.all.white};
  font-family: ${typography.fonts.sans.join(",")};
  font-size: ${typography["font-scale"][0]};
  text-align: center;
  z-index: 2;
`;

export const Copy: React.FC<Props> = ({ children, copy, ...rest }) => {
  const [state, copyToClipboard] = useCopyToClipboard();
  const [mode, setMode] = useState(Mode.Resting);

  const handleClick = useCallback(() => {
    copyToClipboard(copy);
    setMode(Mode.Copied);
    setTimeout(() => setMode(Mode.Resting), 1000);
  }, [copy, copyToClipboard]);

  return (
    <Wrapper onClick={handleClick}>
      {children}

      {mode === Mode.Copied && (
        <Status>
          {state.error
            ? "Error"
            : state.value && `Copied <${copy}> to clipboard`}
        </Status>
      )}
    </Wrapper>
  );
};
