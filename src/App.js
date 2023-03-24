import './App.css';
import Form from './components/Form/Form';
import Todo from './components/Todo/Todo';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAll } from './redux/todoapp/actions';
import {useState} from 'react';



function App() {
  const dispatch = useDispatch()
  const todo = useSelector((state)=>state.operationsReducer)

  const [editTodo,seteditTodo] = useState('')

  const [editformVisible ,seteditformVisible] = useState(false);

  const handleeditclick = (item)=>{
    seteditformVisible(true);
    seteditTodo(item);

  }
  const cancelupdate = ()=>{
    seteditformVisible(false);
  }


  return (
  <div className='card'>
    <div className="App">
      <div className='todo-div'>
        <h1>To-Do List</h1>
        <Form editformVisible = {editformVisible} editTodo = {editTodo} cancelupdate = {cancelupdate}/>
        <Todo handleeditclick ={handleeditclick} editformVisible = {editformVisible} />
        {todo.length >1 && (
          <button  onClick={()=>dispatch(deleteAll())} className='btn-delete'>Delete All</button>
        )}
        
    
      
      </div>
   
    </div>
 </div>
  );
}

export default App;
