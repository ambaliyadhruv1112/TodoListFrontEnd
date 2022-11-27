import './App.css';
import { Route, Routes } from 'react-router-dom';
import ListEditContainer from './component/EditTodoList';
import TodoInputContainer from './component/InputTodo.js';
import ListOfTodo from './component/ListOfTodo';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='' element={<TodoInputContainer />} />
        <Route path='/list/edit/:id' element={<ListEditContainer />} />
        <Route path='/list' element={<ListOfTodo />} />
      </Routes>
    </div>
  );
}

export default App;
