import React from "react";
import styles from "./MemoHeader.module.css";

export default function MemoHeader({ axes, onRemove = f => f }) {
  return (
    <>
      <ul style={{ display: "flex", margin: 0, listStyle: "none" }}>
        <li className={styles.listItem} style={{ width: "140px" }}>
          タイトル
        </li>
        <li className={styles.listItem} style={{ width: "280px" }}>
          内容
        </li>
        <li className={styles.listItem} style={{ width: "80px", textAlign: "right" }}>
          {axes.x.name}
        </li>
        <li className={styles.listItem} style={{ width: "80px", textAlign: "right" }}>
          {axes.y.name}
        </li>
        <li
          className={styles.listItem}
          style={{ width: "40px" }}
        />
        <li
          className={styles.listItem}
          style={{ marginLeft: "auto" }}
        />
      </ul>
      <hr style={{ margin: 0 }} />
    </>
  );
}