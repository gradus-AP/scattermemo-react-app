import React, { useState } from "react"
import { BsFillPencilFill } from "react-icons/bs";

export default function EditableTextArea({ initVal, style, onEditted = f => f }) {
  const [editable, setEditable] = useState(false)
  const [val, setVal] = useState(initVal)
  return (
    <div
      style={{ display: "flex", ...style }}
    >
      {editable ?
        (<textarea
          style={{ border: "none", width: "100%", height: "100%" }}
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
            <p>{initVal}</p>
            <BsFillPencilFill style={{ marginLeft: "auto" }} onClick={() => setEditable(true)} />
          </>
        )}
    </div>
  )
}