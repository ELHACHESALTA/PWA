import style from './Title.module.css';

const Title = ({text}) => {
  return (
    <div className={style.title}>
      <h1>{text}</h1>
    </div>
  );
};

export default Title;