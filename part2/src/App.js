import './App.css'
import Note from './components/Note'

const App = ({ notes }) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => <Note note={note} />)}
      </ul>
    </div>
  );
}

export default App;
