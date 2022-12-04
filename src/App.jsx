import './App.css';
import { Layout } from 'antd';
import { Topbar } from './components/Topbar/Topbar';
import { NotesList } from './components/Noteslist/NotesList';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from './services/db';
import { NotesContext, SelectedNoteContext } from './services/context';
import { useEffect, useState } from 'react';

function App() {
  const notes = useLiveQuery(
    () => db.notes.toArray()
  );

  const [selectedNote, setSelectedNote] = useState(null)

  /*   useEffect(() => {
      if (notes) {
        setSelectedNote(notes.length > 0 ? notes[0].id : null)
      }
    }, [notes]) */


  return (
    <NotesContext.Provider value={notes}>
      <SelectedNoteContext.Provider value={{ selectedNote, setSelectedNote }}>
        <Layout>
          <Topbar />
          {notes &&
            <NotesList />}
        </Layout>
      </SelectedNoteContext.Provider>
    </NotesContext.Provider>

  );
}

export default App;
