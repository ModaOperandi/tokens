import React from "react";
import styled from "styled-components";
import { spacing, color, text, remToUnitlessPx } from "@moda/tokens";

const Table = styled.table`
  width: 100%;
  border: 1px solid ${color("forest-green")};
  border-radius: 0.25em;
  border-collapse: collapse;
  color: ${color("ink")};

  > thead > tr > th {
    ${text("body1")}
    text-align: left;
  }

  > thead > tr > th,
  > tbody > tr > td {
    border-radius: 0.25em;
    border-bottom: 1px solid ${color("forest-green")};
    border-left: 1px solid ${color("forest-green")};
    padding: ${spacing(2)};
  }
`;

const Code = styled.code`
  ${text("body1", "code")}
`;

export const ValueTable: React.FC<{
  values: (string | number)[];
  getter: string;
}> = ({ getter, values }) => {
  const displayPx = values.some((x) => typeof x === "string");

  return (
    <Table>
      <thead>
        <tr>
          <th>getter</th>

          <th>value</th>

          {displayPx && <th>px @ root</th>}
        </tr>
      </thead>

      <tbody>
        {values.map((value, i) => (
          <tr key={value}>
            <td>
              <Code>
                {getter}({i})
              </Code>
            </td>

            <td>
              <Code>{value}</Code>
            </td>

            {displayPx && (
              <td>
                <Code>
                  {typeof value === "string"
                    ? `${remToUnitlessPx(value)}px`
                    : value}
                </Code>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
