import { useState } from 'react';

function App() {

  const noteListData = [
    {
      id: crypto.randomUUID(),
      title: "Example 1",
      text: "Conteúdo de exemplo"
    },
    {
      id: crypto.randomUUID(),
      title: "Example 2",
      text: "Conteúdo de exemplo"
    }
  ]

  const [noteList, setNoteList] = useState(noteListData);

  const addNote = (note) => {
    const newNote = {...note, id: crypto.randomUUID(),}
    const newNoteList = [...noteList, newNote];
    setNoteList(newNoteList);
  }

  const removeNote = (removingId) => {
    const newNoteList = noteList.filter(note => note.id !== removingId);
    setNoteList(newNoteList);
  }

  const editNote = (editNote, editingId) => {
    const newNoteList = noteList.map(note => {
      if(note.id === editingId){
        return { ...note, ...editNote}
      }else{
        return note;
      }
    });
    setNoteList(newNoteList);
  }

  return (
    <>
      <button onClick={() => addNote({title: "Example 3", text: "Conteúdo de exemplo"})}>Adicionar novo item</button>
      <ul>
        {noteList.map((note, index) => (
          <li key={index}>
          <h3>{note.title}</h3>
          <p>{note.text}</p>
          <button onClick={() => editNote({title: "Título novo", text: "Texto novo"}, note.id)}>Editar item</button>
          <button onClick={() => removeNote(note.id)}>Remover item</button>
        </li>
        ))}
      </ul>
    </>
  )
}

export default App;
