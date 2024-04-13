import style from './Home.module.css';
import { useState } from 'react';
import Title from '../../components/Title/Title'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'

const tasks = [];

const Home = () => {

  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const onChangeHandler = (event) => {
    setNuevaTarea(event.target.value);
  }

  const agregarTarea = () => {
    const nuevaTareaAgregar = {
      descripcion: nuevaTarea,
      completada: false
    }
    setTareas([...tareas, nuevaTareaAgregar]);
    setNuevaTarea("");
  }

  return (
    <div className={style.home}>
      <Title text="Título" />
      {/* Inicio de Búsqueda */}
      <div>
        <div>
          Búsqueda
        </div>
        <div className={style.search}>
          <Input text="Input" />
        </div>
      </div>
      {/* Fin de Búsqueda */}
      {/* Inicio de Agregar Tarea*/}
      <div>
        <div>
          Agregar Tarea
        </div>
        <div className={style.addtask}>
          <Input value={nuevaTarea} onChangeHandler={onChangeHandler} />
          <Button text="Agregar" onClick={agregarTarea} disabled={nuevaTarea ? "" : "disabled"} />
        </div>
      </div>
      {/* Fin de Agregar Tarea */}
      {/* Inicio de Lista de Tareas */}
      <div>
        <div>
          Lista de Tareas
        </div>
        <div className={style.tasklist}>
          {tareas.map((tarea) => {
            return <p key={tarea.descripcion}> Tarea: {tarea.descripcion}</p>;
          })}
          {/* {tasksState.map((task) => {
            return <p key={task.description}>Hola {task.description}</p>;
          })} */}
          <Button text="Botón Completado" />
          <Button text="Botón Eliminar" />
        </div>
      </div>
      {/* Fin de Lista de Tareas */}
      {/* Inicio de Contadores */}
      <div>
        <div>
          Contadores
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
      {/* Fin de Contadores */}
    </div>
  );
};

export default Home;