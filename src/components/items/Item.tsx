import React from "react";
import styles from "../../assets/custom.module.scss";

const Item: React.FC<Item> = ({
  artnumber,
  name,
  brand,
  weight,
  quantity,
  price,
  stock
}) => {
  return (
    <tr>
      <th scope="row">{artnumber}</th>
      <td>{name}</td>
      <td>{brand}</td>
      <td>{weight}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>
        {(stock && (
          <span className={styles["text-success"]}>In stock</span>
        )) || <span className={styles["text-danger"]}>Out of stock</span>}
      </td>
    </tr>
  );
};

export default React.memo(Item);
