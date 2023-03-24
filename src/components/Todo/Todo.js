import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import './Todo.css';
import { removetodo,handlecheckbox } from '../../redux/todoapp/actions';

const Todo = ({handleeditclick,editformVisible}) => {
    const todo = useSelector((state)=>state.operationsReducer)

    const dispatch = useDispatch();

  return todo.map((item)=>(
    <div  className='flex' key={item.id}>
        <div className='todo-class'>
          {editformVisible ===false&&(
             <input onChange={()=>dispatch(handlecheckbox(item.id))} type={'checkbox'} checked ={item.completed}></input>

          )}
          
            <p className='todo-p' style={item.completed===true?{textDecoration:'line-through'}:{textDecoration:'none'}}>{item.todo}</p>
        </div>
        <div>
        {editformVisible ===false&&(
           <div className='btn-class'>
           <span onClick={()=>handleeditclick(item)}  className='btn' >edit</span>
           <span onClick={()=>dispatch(removetodo(item.id))} className='btn'>delete</span>
           </div>
        )}
               


        </div>




    </div>






  )
  )
   
  
}

export default Todo

//onChange = {()=>dispatch(handlecheckbox(item.id))}

// {editformvisible===false&&(
//     <input type='checkbox' checked ={item.completed} ></input>
// )}



// {editformvisible===false&&(
//     )}