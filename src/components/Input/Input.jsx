import style from './Input.module.css';

const Input = ({value, onChangeHandler}) => {
  return (
    <div className={style.input}>
      <input type="text" value={value} onChange={onChangeHandler} />
    </div>
  );
};

export default Input;