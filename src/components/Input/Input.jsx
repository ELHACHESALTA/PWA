import style from './Input.module.css';

const Input = ({text, value, onChangeHandler}) => {
  return (
    <div className={style.input}>
      {text}
      <input type="text" value={value} onChange={onChangeHandler} />
    </div>
  );
};

export default Input;