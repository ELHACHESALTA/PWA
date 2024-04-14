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

  const tareasCompletadas = tareas.filter(tarea => tarea.completada === true).length;

  const agregarTarea = () => {
    const nuevaTareaAgregar = {
      descripcion: nuevaTarea,
      completada: false
    }
    setTareas([...tareas, nuevaTareaAgregar]);
    setNuevaTarea("");
  }

   
   const eliminarTarea = (index) => {
    const tareasActualizadas = [...tareas];
    tareasActualizadas.splice(index, 1);
    setTareas(tareasActualizadas);
  };  

  const completarTarea = (index) => {
    const tareasActualizadas = [...tareas];
    tareasActualizadas[index].completada = !tareasActualizadas[index].completada;
    setTareas(tareasActualizadas);
  };

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
        {tareas.length === 0 ? (
      <p>No hay tareas por realizar</p>
    ) : (
      tareas.map((tarea, index) => (
        <div key={index}>
          <div key={tarea.descripcion}>
            {/* Muestra la descripción de la tarea */}
            <p> Tarea: {tarea.descripcion}</p>
          </div>
        </div>
      ))
    )}
          {/* {tasksState.map((task) => {
            return <p key={task.description}>Hola {task.description}</p>;
          })} */}


          {tareas.map((tarea, index) => (
          <Button text="Botón Completado" onClick={() => completarTarea(index)}/>))}
          {tareas.map((tarea, index) => (
          <Button text="Botón Eliminar" onClick={() => eliminarTarea(index)}  />
        ))}
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
            Tareas Totales: {tareas.length}
          </div>
          <div>
            Tareas Completadas: {tareasCompletadas}
          </div>
        </div>
      </div>
      {/* Fin de Contadores */}
    </div>
  );
};

export default Home;