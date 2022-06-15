import React from 'react';
import clsx from 'clsx'
import css from './Forms.module.css'
import { useState } from 'react'


const FormAddNewTask = props => {
  const {AddTask, setFormVisible} = props;

  const [values, setValues] = useState({
		title: '',
		description: ''
	})

  const handleChange = e => {
		const fieldName = e.target.name
		setValues({...values, [fieldName]: e.target.value})
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (values.title) {
			AddTask(values.title, values.description)
		}
    setFormVisible(false)
	}


      return (
        <form className={css.form} onSubmit={handleSubmit} >
          <input 
              className={css.input} 
              id='taskTitle' 
              name='title' 
              type='text' 
              placeholder='__________________________' 
              onChange={handleChange} 
              value={values.title}
            />

          <button className={css.submit} type='submit'>Submit</button>
        </form>
      )
}

export default FormAddNewTask