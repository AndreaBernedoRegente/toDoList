
import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './componentes/Header';
import FormTask from './componentes/FormTask';
import ListTask from './componentes/ListTask';
const App = ()=> {

  //tasks localstorage
  const saveTask = localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];
 
  const [tasks, setTasks] = useState(saveTask);

  //guardando el estado dentro de localstorage
  useEffect(()=> {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])
 
  //Estado de mostrar de tareas completadas
  //tareaCompletadaGuardada
  const taskCompletedSave = localStorage.getItem('showTaskCompleted')=== null ? 
                                  true : localStorage.getItem('showTaskCompleted')=== 'true';
  
  const [showTaskCompleted, setShowTaskCompleted] = useState(taskCompletedSave);
  
  useEffect(()=> {
    localStorage.setItem('showTaskCompleted', showTaskCompleted.toString());
  }, [showTaskCompleted])

  return (
    <div className='contenedor'>
      <h1 className='tittle'>To do List</h1>
      <Header showTaskCompleted={showTaskCompleted} setShowTaskCompleted={setShowTaskCompleted} />
      <FormTask tasks={tasks} setTasks={setTasks} />
      <ListTask tasks={tasks} setTasks={setTasks} showTaskCompleted={showTaskCompleted}/>
    </div>
  );
};



export default App;
