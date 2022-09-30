import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash'

let boards = [
    { id: "0001", name: "ToDo List", axes: { x: { name: "優先度", unit: "", max:10 }, y: { name: "緊急度", unit: "", max:10 } }, content: "・今月のタスクを追加\n・緊急度と優先度を管理" },
    { id: "0002", name: "Wish List", axes: { x: { name: "優先度", unit: "", max:10 }, y: { name: "予算", unit: "JPY", max:50000 } }, content: "・欲しいものを追加\n・予算と優先度を管理" },
    { id: "0003", name: "SNS 投稿分析", axes: { x: { name: "Imp", unit: "" }, y: { name: "engagement", unit: "" } }, content: "・SNS投稿の反応を記録\n・コメント数とエンゲージメント数を管理" },
    { id: "0004", name: "読みたい本", axes: { x: { name: "役立ち度", unit: "" }, y: { name: "残ページ数", unit: "" } }, content: "・積読本リスト\n・すぐ役に立つ度と残ページ数を管理" },
]

export function getBoardsAll() {
    return boards
}

export function getBoardById(id) {
    return boards.find((item) => item.id === id)
}

export function createBoard(item) {
    return { id: uuidv4(), ...item}
}

export function updateBoard(id, param) {
    var board = boards.find(item => item.id === id)
    return _.merge(board, param)
}