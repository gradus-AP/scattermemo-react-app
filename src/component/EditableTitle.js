import React, { useState } from "react"
import { BsFillPencilFill } from "react-icons/bs";

export default function EditableTitle({ initVal, style, onEditted = f => f }) {
  const [editable, setEditable] = useState(false)
  const [val, setVal] = useState(initVal)
  return (
    <div
      style={{ display: "flex", ...style }}
    >
      {editable ?
        (<input
          style={{ margin: "-2px", border: "none", width: "300px", height: "100%", fontSize: "1.8em" }}
          type="text"
          value={val}
          onChange={(event) => {
            setVal(event.target.value)
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === 'Escape') {
              onEditted(val)
              setEditable(false)
              event.preventDefault()
              event.stopPropagation()
            }
          }} />) : (
          <>
            <h3>{initVal}</h3>
            <BsFillPencilFill style={{ marginLeft: "8px" }} onClick={() => setEditable(true)} />
          </>
        )}
    </div>
  )
}