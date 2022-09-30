import React, { useContext } from 'react';
import { BoardContext } from "../provider/BoardProvider";
import MemoItem from "./MemoItem";
import MemoHeader from "./MemoHeader"

export default function MemoList({ boardId, memos = [], onEditted = f => f, onRemove = f => f }) {
    const { getBoardById } = useContext(BoardContext);
    const board = getBoardById(boardId)
    
    return (
        <div>
            <MemoHeader axes={board.axes} />
            {memos.map(memo => {
                return (
                    <MemoItem
                        key={memo.id}
                        memo={memo}
                        onEditted={onEditted}
                        onRemove={onRemove}
                    />
                )
            })}
        </div>
    )
}