import React from "react";
import { shallowEqual, useSelector } from "react-redux";

const ItemProps: React.FC<{}> = () => {
  const schema: Array<string> = useSelector(
    (state: { archive: Items }) =>
      (state.archive.schema && Object.values(state.archive.schema)) || [],
    shallowEqual
  );
  return (
    <tr>
      {schema.map((title, i) => {
        return (
          <th key={i} scope="col">
            {title}
          </th>
        );
      })}
    </tr>
  );
};

export default ItemProps;
