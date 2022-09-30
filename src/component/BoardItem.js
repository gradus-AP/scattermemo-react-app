import React, { useContext } from "react";
import { BoardContext } from "../provider/BoardProvider";
import { Link } from "react-router-dom";
import styles from "./BoardItem.module.css"

export default function BoardItem({ board }) {
  const { deleteBoard } = useContext(BoardContext);
  return (
    <>
      <ul style={{ display: "flex", margin: 0, listStyle: "none" }}>
        <li style={{ width: "150px", whiteSpace: "nowrap" }}>
          <Link
            className={styles.link}
            to={`/boards/id/${board.id}`}
            key={board.id}
          >
            {board.name}
          </Link >
        </li>
        <li
          className={styles.listItem}
        >
          {board.content}
        </li>
        <li
          className={styles.listItem}
          style={{ marginLeft: "auto" }}
          onClick={() => deleteBoard(board.id)}
        >
          削除
        </li>
      </ul>
      <hr style={{ margin: 0 }} />
    </>
  );
}