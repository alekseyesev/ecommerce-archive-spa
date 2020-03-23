import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item";

const ItemList: React.FC<{}> = () => {
  const items: Array<Item> = useSelector(
    (state: { archive: Items }) => state.archive.displayedItems || []
  );
  return (
    <tbody>
      {items.map((item: Item) => {
        return <Item key={item.artnumber} {...item} />;
      })}
    </tbody>
  );
};

export default ItemList;
