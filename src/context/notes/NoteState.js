import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const s1 = {
    "name": "Uvi",
    "class": "5b"
  }
  const [state, setState] = useState(s1);
  const update = () => {
    setTimeout(() => {
      setState({
        "name": "Yuvasri",
        "class": "10B"
      })
    }, 1000);
  }
  return(
    <NoteContext.Provider value={{state, update}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;