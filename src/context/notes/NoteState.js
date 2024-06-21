import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial)


    // Get all Notes
    const getNotes = async () => {
      // API CALL
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3MjY4N2MxODFjMTc4NjQ4OTVlMjljIn0sImlhdCI6MTcxODc4MDEwMX0.pOBgIIjKI2WQrNRTuxc59DX5xWL5kCTCR7okdvyTNR4"
        },
      });
      const json = await response.json()
      console.log(json)
      setNotes(json)
    }


  // Add a Note
  const addNote = async (title, description, tag) => {
    // TODO: API CALL
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3MjY4N2MxODFjMTc4NjQ4OTVlMjljIn0sImlhdCI6MTcxODc4MDEwMX0.pOBgIIjKI2WQrNRTuxc59DX5xWL5kCTCR7okdvyTNR4"
      },
      body: JSON.stringify({title, description, tag})
    });

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
  const deleteNote = async (id) => {
    // TODO: API CALL
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3MjY4N2MxODFjMTc4NjQ4OTVlMjljIn0sImlhdCI6MTcxODc4MDEwMX0.pOBgIIjKI2WQrNRTuxc59DX5xWL5kCTCR7okdvyTNR4"
      }
    });
    const json = response.json();
    console.log(json);
    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => {return note._id !== id})
    setNotes(newNotes)
  }


  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // TODO: API CALL
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3MjY4N2MxODFjMTc4NjQ4OTVlMjljIn0sImlhdCI6MTcxODc4MDEwMX0.pOBgIIjKI2WQrNRTuxc59DX5xWL5kCTCR7okdvyTNR4"
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = response.json();
    console.log(json)

    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if(element._id === id){
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
      
    }
  }

  return(
    <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;