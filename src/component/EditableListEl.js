import React, { useState } from "react"
import styles from "./MemoItem.module.css";

export default function EditableListEl({ initVal, style, editable = false, onEditted = f => f, format = f => f }) {
  const [val, setVal] = useState(initVal)
  return (
    editable ?
      (
        <li className={styles.listItem}
          style={style}>
          <input
            style={{ border: "none" }}
            type="text"
            value={val}
            onChange={(event) => {
              setVal(event.target.value)
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === 'Escape') {
                onEditted(val)
                event.preventDefault()
                event.stopPropagation()
              }
            }} />
        </li>) : (
        <li
          className={styles.listItem}
          style={style}
        >
          {format(initVal)}
        </li>)
  )
}