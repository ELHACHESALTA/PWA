import style from './Tasklist.module.css';

import Button from '../Button/Button'

const Tasklist = ({text}) => {
  return (
    <div>
      <div>
        {text}
      </div>
      <div className={style.tasklistClass}>
        <div>Tarea</div>
        <Button text="Botón Completado" />
        <Button text="Botón Eliminar" />
      </div>
    </div>
  );
};

export default Tasklist;