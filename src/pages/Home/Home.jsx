import style from './Home.module.css';

import Title from '../../components/Title/Title'
import Search from '../../components/Search/Search'
import Addtask from '../../components/Addtask/Addtask'
import Tasklist from '../../components/Tasklist/Tasklist'
import Counter from '../../components/Counter/Counter'

const Home = () => {
  return (
    <div className={style.homeClass}>
      <Title text="Title" />
      <Search text="Search" />
      <Addtask text="Addtask"/>
      <Tasklist text="Tasklist"/>
      <Counter text="Counter" text1="Tareas Totales" text2="Tareas Completadas" />
    </div>
  );
};

export default Home;