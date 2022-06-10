import React from 'react';
import Task from './Task';

const ListTask = ({tasks, setTasks, showTaskCompleted}) => {

    const toogleCompleted = (id) => {
        
        setTasks(tasks.map((task) =>{
            if (task.id===id){
                return {...task, completada: !task.completada}
            } 
            return task
            
            
        }))
    }


    const updateTask = (id, textoMod) => {
        
        setTasks(tasks.map((task) =>{
            if (task.id===id){
                return {...task, texto: textoMod}
            } 
            return task
            
            
        }))
    }


    const removeTask = (id) => {
        setTasks(tasks.filter((task) =>task.id!==id ));
     
    }


    return ( 
        <ul className="lista-tareas">
            {tasks.length>0 ?
              tasks.map((tasks) => {
                
                if (showTaskCompleted){
                    return <Task 
                                key={tasks.id} 
                                tasks={tasks} 
                                toogleCompleted={toogleCompleted} 
                                updateTask={updateTask} 
                                removeTask={removeTask}
                            />
                // si la tarea no esta completada la devolvemos
                }else if(!tasks.completada){
                    return <Task 
                                key={tasks.id} 
                                tasks={tasks} 
                                toogleCompleted={toogleCompleted} 
                                updateTask={updateTask} 
                                removeTask={removeTask}
                            />
                } 
                return <p></p>;
                
               
            })
            :
            <div className="lista-tareas__mensaje">~No tasks added~</div>
            }
        </ul>

     );
}
 
export default ListTask;