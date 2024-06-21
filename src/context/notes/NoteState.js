import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      "_id": "6673b8ac3c074ce9d502b0f3",
      "user": "6672687c181c17864895e29c",
      "title": "My title",
      "description": "Please wakeup early",
      "tag": "Personal",
      "date": "1718859948634",
      "__v": 0
    },
    {
      "_id": "6673b9b03c074ce9d502b0f6",
      "user": "6672687c181c17864895e29c",
      "title": "New Note",
      "description": "Please See the New Note",
      "tag": "My Note",
      "date": "1718860208606",
      "__v": 0
    },
    {
      "_id": "6673b9b03c074ce9d502b0f7",
      "user": "6672687c181c17864895e29c",
      "title": "New Note",
      "description": "Please See the New Note",
      "tag": "My Note",
      "date": "1718860208606",
      "__v": 0
    },
    {
      "_id": "6673b9b03c074ce9d502b0f8",
      "user": "6672687c181c17864895e29c",
      "title": "New Note",
      "description": "Please See the New Note",
      "tag": "My Note",
      "date": "1718860208606",
      "__v": 0
    },
    {
      "_id": "6673b9b03c074ce9d502b0f9",
      "user": "6672687c181c17864895e29c",
      "title": "New Note",
      "description": "Please See the New Note",
      "tag": "My Note",
      "date": "1718860208606",
      "__v": 0
    },
    {
      "_id": "6673b9b03c074ce9d502b0fa",
      "user": "6672687c181c17864895e29c",
      "title": "New Note",
      "description": "Please See the New Note",
      "tag": "My Note",
      "date": "1718860208606",
      "__v": 0
    },
    {
      "_id": "6673b9b03c074ce9d502b0fb",
      "user": "6672687c181c17864895e29c",
      "title": "New Note",
      "description": "Please See the New Note",
      "tag": "My Note",
      "date": "1718860208606",
      "__v": 0
    },
    {
      "_id": "6673b9b03c074ce9d502b0fc",
      "user": "6672687c181c17864895e29c",
      "title": "New Note",
      "description": "Please See the New Note",
      "tag": "My Note",
      "date": "1718860208606",
      "__v": 0
    }
  ];
  const [notes, setNotes] = useState(notesInitial)

  // Add a Note
  const addNote = (title, description, tag) => {
    // TODO: API CALL
    console.log("Adding a new note");
    const note = {
      "_id": "6673b9b03c074ce9d502b0fcv",
      "user": "6672687c181c17864895e29a",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "1718860208606",
      "__v": 0
    };
    setNotes(notes.concat(note))
  }

  // Delete a Note
  const deleteNote = (id) => {

  }

  // Edit a Note
  const editNote = (id) => {

  }

  return(
    <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;