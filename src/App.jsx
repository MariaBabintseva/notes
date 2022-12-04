import './App.css';
import { Layout } from 'antd';
import { Topbar } from './components/Topbar/Topbar';
import { NotesList } from './components/Noteslist/NotesList';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from './services/db';
import { EditContext, NotesContext, SelectedNoteContext } from './services/context';
import { useEffect, useState } from 'react';

function App() {
  const [searchValue, setSearchValue] = useState('')

  const notes = useLiveQuery(
    () => db.notes.where("title")
      .startsWithIgnoreCase(searchValue)
      .toArray(),
    [searchValue]
  );

  const [selectedNote, setSelectedNote] = useState(null)
  const [edit, setEdit] = useState(false)


  return (
    <NotesContext.Provider value={notes}>
      <SelectedNoteContext.Provider value={{ selectedNote, setSelectedNote }}>
        <EditContext.Provider value={{ edit, setEdit }}>
          <Layout>
            <Topbar searchValue={searchValue} setSearchValue={setSearchValue} />
            {notes &&
              <NotesList />}
          </Layout>
        </EditContext.Provider>
      </SelectedNoteContext.Provider>
    </NotesContext.Provider>

  );
}

export default App;
