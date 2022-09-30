import React, { useState } from "react";
import styles from "./MemoItem.module.css";
import { BsFillPencilFill } from "react-icons/bs";
import EditableListEl from "./EditableListEl"

export default function MemoItem({ memo, onEditted = f => f, onRemove = f => f }) {
  const [editable, setEditable] = useState(false)
  return (
    <>
      <ul style={{ display: "flex", margin: 0, listStyle: "none" }}>
        <EditableListEl
          initVal={memo['title']}
          style={{ width: "140px" }}
          editable={editable}
          onEditted={val => {
            onEditted(memo.id, { 'title': val })
            setEditable(false)
          }} />
        <EditableListEl
          initVal={memo['text']}
          style={{ width: "280px", overflow: "hidden", textOverflow: "ellipsis" }}
          editable={editable}
          onEditted={val => {
            onEditted(memo.id, { 'text': val })
            setEditable(false)
          }} />
        <EditableListEl
          initVal={memo['vals']['x']}
          style={{ width: "80px", textAlign: "right" }}
          editable={editable}
          onEditted={val => {
            onEditted(memo.id, { 'vals': { 'x': val } })
            setEditable(false)
          }}
          format={e => e.toLocaleString()} />
        <EditableListEl
          initVal={memo['vals']['y']}
          style={{ width: "80px", textAlign: "right" }}
          editable={editable}
          onEditted={val => {
            onEditted(memo.id, { 'vals': { 'y': val } })
            setEditable(false)
          }} 
          format={e => e.toLocaleString()}/>
        <li
          className={styles.listItem}
          style={{ width: "40px", textAlign: "right" }}
          onClick={() => setEditable(true)}
        ><BsFillPencilFill /></li>
        <li
          className={styles.listItem}
          style={{ marginLeft: "auto" }}
          onClick={() => onRemove(memo.id)}
        >削除</li>
      </ul>
      <hr style={{ margin: 0 }} />
    </>
  );
}