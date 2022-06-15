import React from 'react';
import  { LIST_TYPES} from '../../config';
import css from './Forms.module.css'


const SelectForm = props => {
  const {type, allTasks, setFormVisible} = props;
  const {tasks,  setTasks} = props


  const handleChange = (e) => {
    const newTitle = e.target.value
    const updatedTasks = allTasks.map(task => {
      if (task.title === newTitle) {
        return {...task, status: type}
      }
      return task
    })
    setTasks(updatedTasks)
    setFormVisible(false)
  }

  const getSelectOptions = (type) => {
      switch (type) {
        case LIST_TYPES.READY:
          return allTasks.filter(task => task.status === LIST_TYPES.BACKLOG)
        case LIST_TYPES.IN_PROGRESS:
          return allTasks.filter(task => task.status === LIST_TYPES.READY)
        case LIST_TYPES.FINISHED:
          return allTasks.filter(task => task.status === LIST_TYPES.IN_PROGRESS)
        default:
          return []
      }
  }

  const selectOptions = getSelectOptions(type)

  const handleSubmit = e => {
    e.preventDefault();
    const newTitle = e.target.value
    const updatedTasks = allTasks.map(task => {
      if (task.title === newTitle) {
        return {...task, status: LIST_TYPES.READY}
      }
      return task
    })
    setTasks(updatedTasks)
    setFormVisible(false)
  }
    
  return (
      <form onSubmit={handleSubmit} >
              <select className={css.selecter} onChange={handleChange} >
                    <option key='' selected="false"  value='_______' disabled>Add task</option>
                  {selectOptions.map(task => {
                    return (
                      <option key={task.id}   value={task.title} >{task.title || []}</option>
                    )
                  })}
              </select>
      </form>
  )
}

export default SelectForm
