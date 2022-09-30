import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom"
import { getMemosByBoardId, createMemo, updateMemo } from "../mock/memoData";
import BoardInfo from "../component/BoardInfo";
import ScatterBoard from "../component/ScatterBoard";
import MemoList from "../component/MemoList"
import Button from "../component/Button";
import _ from 'lodash'

export default function BoardDetail() {

    var { id } = useParams();
    
    var initMemos = getMemosByBoardId(id);

    const [memos, setMemos] = useState(initMemos);

    const addMemo = () => {
        const item = createMemo({ boardId: id, title: "新しいメモ", text: "", vals: { x: 0, y: 0 } })
        const newMemos = [...memos, item]
        setMemos(newMemos)
    }

    const onEditted = (id, param) => {
        updateMemo(id, param)// APIに更新リクエスト
        const newMemos = memos.map(memo => {
            return memo.id !== id ?
                memo : _.merge(memo, param)
        })
        setMemos(newMemos)
    }

    const deleteMemo = memoId => {
        const newMemos = memos.filter(memo => memo.id !== memoId)
        setMemos(newMemos)
    }

    return (
        <section style={{ padding: "1rem 0" }}>
            <BoardInfo boardId={id}/>
            <div>
                <h5>散布図</h5>
                <ScatterBoard boardId={id} data={memos.map(item => { return { ...item.vals, title: item.title } })} />
                <hr />
            </div>
            <div>
                <ul style={{ display: "flex", padding: 0, listStyle: "none" }}>
                    <li style={{ padding: "10px" }}><h5>メモ</h5></li>
                    <li style={{ padding: "4px", marginLeft: "auto" }}>
                        <Button text="追加" onClick={addMemo} />
                    </li>
                </ul>
                <MemoList
                    boardId={id}
                    memos={memos}
                    onEditted={onEditted}
                    onRemove={deleteMemo} />
            </div>
        </section>
    );
}