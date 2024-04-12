import style from './Button.module.css';

const Button = ({text}) => {
  return (
    <div className={style.buttonClass}>
      {text}
    </div>
  );
};

export default Button;