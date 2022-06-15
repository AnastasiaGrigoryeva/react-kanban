import React from 'react';
import { LIST_TYPES, LIST_COPY } from '../../config';
import css from'./css.module.css';
import List from '../list/List'; 
import uniqid from 'uniqid';

const Board = props =>  {
  const {tasks, setTasks} = props;

  const AddTask = (title, desctiption) => {
      const newTask = {
              id: uniqid(),
              title: title,
              description: desctiption,
              created: new Date().toISOString(),
              status: LIST_TYPES.BACKLOG
      }

    setTasks([...tasks, newTask ]);
	}


  return (
    <div className={css.board} >
        {Object.values(LIST_TYPES).map( type => {
          const listTasks = tasks.filter(task => task.status === type)
          return (
            
            <List key={LIST_COPY[type]} 
                  type={type}   
                  title={LIST_COPY[type]} 
                  tasks={listTasks || []} 
                  allTasks={tasks}
                  setTasks={setTasks}
                  AddTask={AddTask} 
            />
            
          )
        })}
    </div>
  )
}

export default Board