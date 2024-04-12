import style from './Counter.module.css';

const Counter = ({text, text1, text2}) => {
  return (
    <div>
      <div>
        {text}
      </div>
      <div className={style.counterClass}>
        <div>
          {text1}
        </div>
        <div>
          {text2}
        </div>
      </div>
    </div>

  );
};

export default Counter;