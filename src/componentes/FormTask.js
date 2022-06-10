import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import {  v4  as  uuidv4  }  from  'uuid' ;


const FormTask = ({tasks, setTasks}) => {
    
    const [inputTask, setInputTask] = useState('');

   
    const handleSubmit = (e) => {
        e.preventDefault();
        setTasks(
            [ ...tasks,
                {
                    id:uuidv4(),
                    texto: inputTask,
                    completada: false
                }
            ]
        );
        setInputTask('');


    }
    
    return (  
        <form action="" className="formulario-tareas" onSubmit={handleSubmit}>
            <input 
                type="text"
                className="formulario-tareas__input"
                placeholder="Write a task"
                value={inputTask}
                onChange={e=>setInputTask(e.target.value)}


            />
            <button
                type='submit'
                className="formulario-tareas__btn"
            >
                <FontAwesomeIcon 
                    icon={faPlusSquare}
                    className="formulario-tareas__icono-btn"
                />

            </button>
        </form>
    );
}
 
export default FormTask;