import style from "./Home.module.css";
// useState es un Hook de React que te permite agregar una variable de estado a tu componente.
import { useState } from "react";
import Title from "../../components/Title/Title";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

//Buen trabajo. Buen uso de los condicionales para estilar. Bien ordenado los css. Buen nombrado de variables.
//No son necesarios tantos comentarios, cuando el codigo esta bien escrito, con variables y funciones bien nombradas se entiende que es lo que hace sin agregar ruido.
//Si les sirve para ustedes entender y recordar que esta pasando no hay problema, pero no es necesario.
//Algunas className no estan definidas en los css. No deberian estar.
//Aparte de los componentes 'core' que crearon podrian haber ideado algunos mas para desacoplar un poco el jsx de Home.
//ListTask y Task eran candidatos ideales para componetizar.

const Home = () => {
  // Define el estado que guardará la lista de tareas
  const [tareas, setTareas] = useState([]);

  // Define el estado para una tarea nueva ingresada por el input correspondiente
  const [nuevaTarea, setNuevaTarea] = useState("");

  // Define el estado para la busqueda ingresada por el input correspondiente
  const [busqueda, setBusqueda] = useState("");

  // Crea un nuevo arreglo con las tareas filtradas que coincidan con lo ingresado en búsqueda
  const tareasFiltradas = tareas.filter((tarea) =>
    tarea.descripcion.toLowerCase().includes(busqueda.toLowerCase())
  );

  // Cuenta el número de tareas completadas
  const tareasCompletadas = tareas.filter(
    (tarea) => tarea.completada === true
  ).length;

  // Función que se ejecuta y actualiza el input para ingresar una tarea nueva
  const onChangeHandler = (event) => {
    setNuevaTarea(event.target.value);
  };

  // Función que se ejecuta y actualiza el input para ingresar una búsqueda
  const onChangeBusqueda = (event) => {
    setBusqueda(event.target.value);
  };

  // Función que agrega una nueva tarea al estado de lista de tareas y vacía el input correspondiente
  const agregarTarea = () => {
    const nuevaTareaAgregar = {
      descripcion: nuevaTarea,
      completada: false,
    };
    setTareas([...tareas, nuevaTareaAgregar]);
    setNuevaTarea("");
  };

  // Función que elimina un elemento a partir del índice proporcionado
  const eliminarTarea = (index) => {
    const tareasActualizadas = [...tareas];
    tareasActualizadas.splice(index, 1);
    setTareas(tareasActualizadas);
  };

  // Función que cambia el estado de la tarea con el índice proporcionado
  const completarTarea = (index) => {
    const tareasActualizadas = [...tareas];
    tareasActualizadas[index].completada =
      !tareasActualizadas[index].completada;
    setTareas(tareasActualizadas);
  };

  return (
    <div className={style.home}>
      <Title text="Aplicación: To-Do List" />
      {/* Inicio de Búsqueda */}
      <div className={style.search}>
        <div>Buscar tarea:</div>
        <Input
          value={busqueda}
          onChangeHandler={onChangeBusqueda}
          placeholder=""
        />
      </div>
      {/* Fin de Búsqueda */}
      {/* Inicio de Agregar Tarea*/}
      <div className={style.addtask}>
        <Input
          value={nuevaTarea}
          onChangeHandler={onChangeHandler}
          placeholder="Agregar nueva tarea"
        />
        <Button
          text="Agregar tarea"
          onClick={agregarTarea}
          disabled={nuevaTarea ? "" : "disabled"}
        />
      </div>
      {/* Fin de Agregar Tarea */}
      {/* Inicio de Lista de Tareas */}
      <div className={style.tasklist}>
        {/* Condición si no hay tareas agregadas */}
        {tareas.length === 0 ? (
          <p>No hay tareas por realizar</p>
        ) : // Segunda condición si no hay tareas que coinciden en la búsqueda
        tareasFiltradas.length === 0 ? (
          <p>No se encontraron coincidencias</p>
        ) : (
          // El método map() permite iterar sobre cada elemento del arreglo de la lista de tareas y aplicarle una función a cada uno de ellos, devolviendo un nuevo arreglo sin modificar el original
          tareasFiltradas.map((tarea, index) => (
            <div className={style.individualTask} key={index}>
              {/* Condición con operador ternario para tachar las tareas que esten completas */}
              {/* Es necesario este key aca? */}
              {/* Lo mejor hubiera sido crear un componente Task o CardTask que pueda renderizar todo esto */}
              <div
                style={{
                  textDecoration: tarea.completada ? "line-through" : "none",
                }}
                key={tarea.descripcion}
              >
                <p>{tarea.descripcion}</p>
              </div>
              <div>
                {/* Condición con operador ternario que cambia el texto del botón según el estado de la tarea */}
                <Button
                  text={tarea.completada ? "Desmarcar" : "Marcar como Completa"}
                  onClick={() => completarTarea(index)}
                />
                <Button text="Eliminar" onClick={() => eliminarTarea(index)} />
              </div>
            </div>
          ))
        )}
      </div>
      {/* Fin de Lista de Tareas */}
      {/* Inicio de Contadores */}
      {/* Esto tambien podria haber sido un componente */}
      <div className={style.counter}>
        <div>Tareas Totales: {tareas.length}</div>
        <div>Tareas Completadas: {tareasCompletadas}</div>
      </div>
      {/* Fin de Contadores */}
    </div>
  );
};

export default Home;
