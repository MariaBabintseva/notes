import './App.css';
import { Layout } from 'antd';
import { Topbar } from './components/Topbar/Topbar';
import { NotesList } from './components/Noteslist/NotesList';

function App() {
  return (
    <Layout>
      <Topbar />
      <NotesList />
    </Layout>
  );
}

export default App;
