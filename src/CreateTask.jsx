import React from 'react'
import { useState } from 'react';

function CreateTask(props) {
    const [task, setTask] = useState({
        title:'',
        content:''
    });
    function detectChange(event){
        const {name,value} = event.target;
        setTask((prevTask => {
            return {
                ...prevTask,
                [name]:value,
            }
        }))
    }

    function submitTask(event){
        props.onAdd(task);
        setTask({
            title:'',
            content:''
        });
        event.preventDefault();
    }

  return (
    <div  className="todoDivArea">
        <form className="todoDiv">
            <input
            type='text'
            className='form-control todoText mb-3'
            name='title'
            placeholder='Başlık'
            onChange={detectChange}
            value={task.title}
            
            />
            <textarea 
            name='content'
            className='form-control todoText mb-3'
            rows={3}
            placeholder='İşinizi yazınız'
            onChange={detectChange}
            value={task.content}

            
            />
             <button className="btn btn-primary todoButton" onClick={submitTask}>
          Ekle
        </button>
        </form>
    </div>
  )
}

export default CreateTask;