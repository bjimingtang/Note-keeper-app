import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  // initialize notes as an array
  const [notes, setNotes] = useState([]);
  function addNote(note) {
    // append note to array
    setNotes(prevNotes => {
      return [...prevNotes, note];
    });
  };
  function deleteNote(id) {
    setNotes(prevNotes => {
      // filter out the node with the matching id
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div>
      <Header />
      <CreateArea submitFunction={addNote}/>
      // map the notes, creating a Note component displaying each
      {notes.map((note, index) => {
        return <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote}/>
      })}
      <Footer />
    </div>
  );
}

export default App;
