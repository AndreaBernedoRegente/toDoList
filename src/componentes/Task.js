import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faCheckSquare, faEdit, faTimes} from '@fortawesome/free-solid-svg-icons';


const Task = ({tasks, toogleCompleted, updateTask, removeTask}) => {
    
    const [edit, setEdit] = useState(false); // estado para que al hacer click en boton editar me muestre para editar 
    const [newTask, setNewTask] = useState(tasks.texto); // estado para que al cambiar el imput de la tarea lo haga
    //const [modificarTarea, cambiarModificarTarea] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        updateTask(tasks.id, newTask);
        setEdit(false);
        
    }

    return (  
        
        <li className="lista-tareas__tarea">
            <FontAwesomeIcon 
                 icon={tasks.completada ? faCheckSquare : faSquare } 
                 className="lista-tareas__icono lista-tareas__icono-check"
                 onClick={ () => toogleCompleted(tasks.id)} 
            />
            <div className="lista-tareas__texto">
                {edit ?
                     <form action="" className="formulario-editar-tarea" onSubmit={handleSubmit}>
                        <input 
                            text="texto" 
                            className="formulario-editar-tarea__input"
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                        />
                        <button 
                            type="submit" 
                            className="formulario-editar-tarea__btn" 
                        >Actualizar</button>
                    </form>   
            :
            tasks.texto    
            }   
            </div>  
            <div className="lista-tareas__contenedor">
                <FontAwesomeIcon 
                    icon={faEdit} 
                    className="lista-tareas__icono lista-tareas__icono-accion"
                    onClick = {() => setEdit(!edit)} />
                <FontAwesomeIcon 
                    icon={faTimes} 
                    className="lista-tareas__icono lista-tareas__icono-accion"  
                    onClick={ () => removeTask(tasks.id)} 
                />
            </div>  
        
        </li>
    );
}
    
export default Task;