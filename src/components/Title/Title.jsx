import style from './Title.module.css';

const Title = ({text}) => {
  return (
    <div className={style.titleClass}>
      <h1>{text}</h1>
    </div>
  );
};

export default Title;