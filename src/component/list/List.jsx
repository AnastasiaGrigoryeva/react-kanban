import React from 'react';
import { useState } from 'react';
import  { LIST_TYPES} from '../../config';
import FormAddNewTask from '../forms/FormAddNewTask';
import css from './List.module.css';
import {Link} from 'react-router-dom';
import SelectForm from '../forms/SelectForm'

const List = props =>  {
  const {title, type, tasks,setTasks, allTasks , AddTask} = props;
  const [isFormVisible, setFormVisible] = useState(false)

  const handleClick = () => {
		setFormVisible(!isFormVisible)
	}


  return (
    <>
        {type === LIST_TYPES.BACKLOG && (
            <div className={css.list}>
              <h2 className={css.listTitle}>{title}</h2>
              {tasks.map(task => {
                      return(
                        <Link to={`/tasks/${task.id}`} key={task.id} className={css.taskLink}>
                            <div key={task.id} className={css.task}>{task.title}</div>
                        </Link>
                      )
                    })}
                      <button className={css.addButton} onClick={handleClick}>+ Add card</button>
                {type === LIST_TYPES.BACKLOG && isFormVisible && (<FormAddNewTask AddTask={AddTask} setFormVisible={setFormVisible}/>)}
                
            </div>
        )}
        {type === LIST_TYPES.READY && (
            <div className={css.list}>
              <h2 className={css.listTitle}>{title}</h2>
              {tasks.map(task => {
                      return(
                        <Link to={`/tasks/${task.id}`} key={task.id} className={css.taskLink}>
                            <div key={task.id} className={css.task}>{task.title}</div>
                        </Link>
                      )
              })}
              
                      <button className={css.addButton} onClick={handleClick}>+ Add card</button>
                      {type === LIST_TYPES.READY && isFormVisible && (<SelectForm {...props} AddTask={AddTask} setFormVisible={setFormVisible} />)}
                      
                      
            </div>
        )}
        {type === LIST_TYPES.IN_PROGRESS && (
            <div className={css.list}>
              <h2 className={css.listTitle}>{title}</h2>
              {tasks.map(task => {
                      return(
                        <Link to={`/tasks/${task.id}`} key={task.id} className={css.taskLink}>
                            <div key={task.id} className={css.task}>{task.title}</div>
                        </Link>
                      )
                    })}
                      <button className={css.addButton} onClick={handleClick}>+ Add card</button>
                      {type === LIST_TYPES.IN_PROGRESS && isFormVisible && (<SelectForm {...props} AddTask={AddTask} setFormVisible={setFormVisible} />)}
            </div>
        )}
        {type === LIST_TYPES.FINISHED && (
            <div className={css.list}>
              <h2 className={css.listTitle}>{title}</h2>
              {tasks.map(task => {
                      return(
                        <Link to={`/tasks/${task.id}`} key={task.id} className={css.taskLink}>
                            <div key={task.id} className={css.task}>{task.title}</div>
                        </Link>
                      )
                    })}
                      <button className={css.addButton} onClick={handleClick}>+ Add card</button>
                      {type === LIST_TYPES.FINISHED && isFormVisible && (<SelectForm {...props} AddTask={AddTask} setFormVisible={setFormVisible} />)}
            </div>
        )}



    </>


  );
}

export default List
