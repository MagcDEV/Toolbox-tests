import React from "react";
import { TableLine } from "./TableLine.jsx";

export const TableLineFile = ({ csv }) => {
  return (
    <>
      {csv.lines.map((line) => {
        return <TableLine key={line.number} fileName={csv.file} line={line} />;
      })}
    </>
    // <tr>
    //   <td>file</td>
    //   <td>Jacob</td>
    //   <td>Thornton</td>
    //   <td>@fat</td>
    // </tr>
  );
};
