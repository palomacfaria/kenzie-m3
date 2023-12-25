import { useState } from "react";

function App() {

  const noteListData = [
    {
      title: "Example 1",
      text: "Conteúdo de exemplo"
    },
    {
      title: "Example 2",
      text: "Conteúdo de exemplo"
    }
  ]

  const [noteList, setNoteList] = useState(noteListData);

  const addNote = (newNote) => {
    const newNoteList = [...noteList, newNote];
    setNoteList(newNoteList);
  }

  return (
    <>
    <button onClick={() => addNote({title: "Example 3", text: "Conteúdo de exemplo"})}>Adicionar nota</button>
      <ul>
        {noteList.map((note, index) =>(
          <li key={index}>
            <h3>{note.title}</h3>
            <p>{note.text}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App;
