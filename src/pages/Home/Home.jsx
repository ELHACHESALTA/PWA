import style from './Home.module.css';
import { useState } from 'react';
import Title from '../../components/Title/Title'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'

import Tasklist from '../../components/Tasklist/Tasklist'
import Counter from '../../components/Counter/Counter'

const tasks = [];

const Home = () => {

  const [newTask, setNewTask] = useState("");

  const onChangeHandler = (event) => {
    setNewTask(event.target.value);
  };

  const [tasksState, setTasksState] = useState(tasks);

  const saveTask = () => {
    const newTaskToAdd = {
      description: newTask
    };
    setTasksState([...tasksState, newTaskToAdd]);
  };

  console.log(tasks);

  return (
    <div className={style.home}>
      <Title text="Title" />
      {/* Inicio de Search */}
      <div>
        <div>
          Search
        </div>
        <div className={style.search}>
          <Input text="Input" />
        </div>
      </div>
      {/* Fin de Search */}
      {/* Inicio de Addtask */}
      <div>
        <div>
          Addtask
        </div>
        <div className={style.addtask}>
          {tasksState.map((task) => {
            return <p key={task.description}>Hola {task.description}</p>;
          })}
          <p>newTask: {newTask}</p>
          <Input text="Input" value={newTask} onChangeHandler={onChangeHandler} />
          <Button text="Agregar" onClick={saveTask} disabled={newTask ? "" : "disabled" } />
        </div>
      </div>
      {/* Fin de Addtask */}
      {/* Inicio de Tasklist */}
      <div>
        <div>
          Tasklist
        </div>
        <div className={style.tasklist}>
          
          <div>Tarea</div>
          <Button text="Botón Completado" />
          <Button text="Botón Eliminar" />
        </div>
      </div>
      {/* Fin de Tasklist */}
      {/* Inicio de Counter */}
      <div>
        <div>
          Counter
        </div>
        <div className={style.counter}>
          <div>
            Tareas Totales
          </div>
          <div>
            Tareas Completadas
          </div>
        </div>
      </div>
      {/* Fin de Counter */}
    </div>
  );
};

export default Home;