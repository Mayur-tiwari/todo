import React from 'react'
import {useState,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { addtodo,handleEditsubmit} from '../../redux/todoapp/actions';
import './Form.css'

const Form = ({editformVisible,editTodo,cancelupdate}) => {
    const [todovalue,settodovalue] = useState('')
    const dispatch = useDispatch();
    const [editvalue,seteditvalue] = useState('')

    useEffect(()=>{seteditvalue(editTodo.todo)},[editTodo])

    function handlesubmit(e){
        e.preventDefault();
        let uid = Math.floor(Math.random()*1000)
        console.log(uid);
        let todoobj = {
            id :uid,
            todo:todovalue,
            completed : false
        }
        settodovalue('')
        dispatch(addtodo(todoobj))
       

     

    }
    const editsubmit = (e)=>{
        e.preventDefault();
        let editedobj = {
            id:editTodo.id,
            todo:editvalue,
            completed:false
        }
        dispatch(handleEditsubmit(editedobj))

    }
  return (
    <>
    {editformVisible===false?(
            <div>
            <form onSubmit={handlesubmit}>
                <label>write todo</label>
                <div>
                    <input className='input' value={todovalue} onChange ={(e)=>settodovalue(e.target.value)}></input>
                    <button className='add-btn' type='submit'>Add</button>
                </div>
            </form>
    
        </div>

    ):(
        <div>
            <form onSubmit={editsubmit}>
            <label >update todo</label>
                <div>
                    <input value={editvalue || ''} onChange = {(e)=>seteditvalue(e.target.value)} ></input>
                    <button className='add-btn' type='submit'>Update</button>
                </div>
                <button onClick={cancelupdate} className='btn-back'>back</button>
            </form>
    
        </div>
    )}
    </>

  )
}

export default Form