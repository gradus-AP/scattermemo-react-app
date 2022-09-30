import React, { useContext } from "react"
import { BoardContext } from "../provider/BoardProvider";
// import styles from "./App.module.css"; 
import BoardItem from "./BoardItem";

export default function BoardList({ filter = "" }) {
    const { boards } = useContext(BoardContext);
    if (boards.length === 0) {
        return <div><p style={{ textAlign: "center", fontSize: "1.2rem" }}>ボードを追加しましょう</p></div>
    }
    return (
        <div>
            {boards.filter(item => (new RegExp(filter, 'g')).test(item.name)).map(board => <BoardItem key={board.id} board={board} />)}
        </div>
    );
}