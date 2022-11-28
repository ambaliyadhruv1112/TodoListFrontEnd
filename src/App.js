import './App.css';
import { Route, Routes } from 'react-router-dom';
import EditTodoContainer from './component/EditTodoList';
import TodoInputContainer from './component/InputTodo.js';
import ListOfTodo from './component/ListOfTodo';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='' element={<ListOfTodo />} />
        <Route path='/add' element={<TodoInputContainer />} />
        <Route path='/edit/:id' element={<EditTodoContainer />} />
      </Routes>
    </div>
  );
}

export default App;
