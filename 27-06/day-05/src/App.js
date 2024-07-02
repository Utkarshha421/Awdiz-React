import './App.css';
import { Route, Routes } from 'react-router-dom';
import Todo from './ReduxTodo/Todo';
import Login from './Login/Login';
import Home from './Home';

function App() {
  return (
    <div className="App">
       <Routes>
      
      <Route path="redux-todo" element={<Todo/>}  />
      <Route path="redux-login" element={<Login/>}  />
      <Route path="/" element={<Home/>}  />
      </Routes>
      
    </div>
  );
}

export default App;
