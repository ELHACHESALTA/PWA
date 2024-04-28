import style from "./Input.module.css";

const Input = ({ value, onChangeHandler, placeholder }) => {
  return (
    // El style esta vacio, deberian poder eliminar este div.
    <div className={style.input}>
      <input
        type="text"
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
