import style from './Title.module.css';

const Title = ({text}) => {
  return (
    <div className={style.title}>
      <h1>{text}</h1>
      <p><b>Grupo 8:</b> Ferrada, Mauro | Herrera, Julio Federico</p>
    </div>
  );
};

export default Title;