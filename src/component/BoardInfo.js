import React, { useContext } from "react";
import { BoardContext } from "../provider/BoardProvider";
import EditableTextArea from "./EditableTextArea";
import EditableTitle from "./EditableTitle";

export default function BoardInfo({ boardId }) {
    const { getBoardById, updateBoard } = useContext(BoardContext);
    var board = getBoardById(boardId);
    return (
        <>
            <EditableTitle
                initVal={board.name}
                style={{ height: "40px" }}
                onEditted={val => updateBoard(boardId, { name: val })}
            />
            <div>
                <h5>説明</h5>
                <EditableTextArea
                    initVal={board.content}
                    style={{ whiteSpace: "pre-wrap", height: "100px" }}
                    onEditted={val => updateBoard(boardId, { content: val })}
                />
                <hr />
            </div>
        </>
    );
}