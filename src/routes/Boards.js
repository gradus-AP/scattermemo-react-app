import React, { useState, useContext } from "react"
import { BoardContext } from "../provider/BoardProvider";
import BoardList from "../component/BoardList"
import Button from "../component/Button";

export default function Boards() {

  const { addBoard } = useContext(BoardContext);
  const [val, setVal] = useState("");

  return (
    <section>
      <ul style={{ display: "flex", listStyle: "none", height: "40px" }}>
        <li style={{ lineHeight: "40px" }}><h3>ボード管理</h3></li>
        <li style={{ lineHeight: "40px", marginLeft: "auto" }}>
          <form class="search-box" style={{ padding: "0" }} onSubmit={e => { e.preventDefault() }}>
            <input
              type="text"
              style={{ marginLeft: "1em" }}
              value={val}
              onChange={e => setVal(e.target.value)}
              placeholder="検索"
            />
          </form>
        </li>
        <li style={{ padding: "4px", marginLeft: "20px", lineHeight: "40px" }}>
          <Button text="追加" onClick={() => addBoard({ name: "新しいボード", axes: { x: { name: "", unit: "" }, y: { name: "", unit: "" } }, content: "" })} />
        </li>
      </ul>
      <div>
        <BoardList filter={val} />
      </div>
    </section>
  );
}