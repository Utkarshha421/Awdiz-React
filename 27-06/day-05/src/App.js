import './App.css';
import { Route, Routes } from 'react-router-dom';
import Todo from './ReduxTodo/Todo';

function App() {
  return (
    <div className="App">
       <Routes>
      
      <Route path="redux-todo" element={<Todo/>}  />

      </Routes>
      
    </div>
  );
}

export default App;
