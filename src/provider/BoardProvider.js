import React, { createContext, useState } from "react"
import { getBoardsAll, createBoard } from "../mock/boardsData"
import _ from 'lodash'

export const BoardContext = createContext();

export default function BoardProvider({ children }) {
    const [boards, setBoards] = useState(getBoardsAll);

    const getBoardById = id => boards.find(board => board.id === id)

    const addBoard = param => {
        const item = createBoard(param)
        const newBoards = [...boards, item]
        setBoards(newBoards)
    }

    const deleteBoard = id => {
        const newBoards = boards.filter(board => board.id !== id)
        setBoards(newBoards)
    }

    const updateBoard = (id, param) => {
        // APIへ更新リクエストを投げる
        // updateBoard(id, param)
        const newBoards = boards.map(item => {
            return item.id === id ? _.merge(item, param) : item
        })
        setBoards(newBoards)
    }

    return (
        <BoardContext.Provider value={{ boards, getBoardById, addBoard, updateBoard, deleteBoard }}>
            {children}
        </BoardContext.Provider>
    )
}

