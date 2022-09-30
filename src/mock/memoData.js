import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash'

let memos = [
    { id: "0001", boardId: "0001", title: "口座振込", text: "銀行口座に振り込みをする" , vals: { x:10, y: 10}},
    { id: "0002", boardId: "0001", title: "資格勉強", text: "資格勉強をする" , vals: { x:8, y: 5}},
    { id: "0003", boardId: "0001", title: "家の掃除", text: "家の掃除をする" , vals: { x:3, y: 3}},
    { id: "0004", boardId: "0001", title: "住民票をとる", text: "住民票の写しを発行する" , vals: { x:5, y: 5}},
    { id: "0005", boardId: "0001", title: "買い物", text: "買い物" , vals: { x:3, y: 5}},
    { id: "0006", boardId: "0002", title: "リュック", text: "" , vals: { x:3, y: 15000}},
    { id: "0007", boardId: "0002", title: "ソファ", text: "https://www.low-ya.com/goods/F202_G1027" , vals: { x:3, y: 39990}},
    { id: "0008", boardId: "0002", title: "Apple Watch SE", text: "https://www.apple.com/jp/shop/buy-watch/apple-watch-se" , vals: { x:5, y:  45800}},
    { id: "0009", boardId: "0002", title: "ルンバ", text: "" , vals: { x:7, y: 40000}},
]

export function getMemosByBoardId(boardId) {
    return memos.filter(memo => memo.boardId === boardId)
}

export function createMemo(item) {
    return { id: uuidv4(), ...item}
}

export function updateMemo(id, param) {
    var memo = memos.find(item => item.id === id)
    // memos自体のupdateが必要
    return _.merge(memo, param)
}