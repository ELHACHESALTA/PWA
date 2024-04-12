import style from './Search.module.css';

import Input from '../Input/Input'

const Search = ({text}) => {
  return (
    <div>
      <div>
        {text}
      </div>
      <div className={style.searchClass}>
        <Input text="Input" />
      </div>
    </div>
  );
};

export default Search;