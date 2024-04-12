import style from './Addtask.module.css';

import Input from '../Input/Input'
import Button from '../Button/Button'

const Addtask = ({text}) => {
  return (
    <div>
      <div>
        {text}
      </div>
      <div className={style.addtaskClass}>
        <Input text="Input" />
        <Button text="Button" />
      </div>
    </div>
  );
};

export default Addtask;