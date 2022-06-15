import React from 'react';
import css from'./css.module.css';
import { LIST_TYPES} from '../../config';

const  Footer =  props => {
  const {tasks, type} = props
  const activeTasks = tasks.lenght

  return (
    <footer className={css.footer} >
      <div >
          <div className={css.wrapper}>
              <div  className={css.activeTasks}>
                Active tasks: {activeTasks}
              </div>
              <div  className={css.finishedTasks}>
                Finished tasks: 
              </div>
          

          <div  className={css.editor}>
                Kanban board by Anastasia Grigoryeva, 2022
          </div>
          </div>
      </div>
    </footer>
  );
}

export default Footer;
