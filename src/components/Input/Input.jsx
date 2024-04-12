import style from './Input.module.css';

const Input = ({text}) => {
  return (
    <div className={style.inputClass}>
      {text}
    </div>
  );
};

export default Input;