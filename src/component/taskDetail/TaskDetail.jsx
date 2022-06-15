import React, { useState }  from 'react';
import { useParams,Link } from "react-router-dom";
import css from './TaskDetail.module.css';
import {GrClose} from 'react-icons/gr';

const TaskDetail = props =>  {
    const {id} = useParams()  //берет ИД
    const {tasks, setTasks} = props 
	const task = tasks.find(task => task.id === id) 

    const [newDescription, setNewDescription] = useState(task)

    const handleDescChange = (e) => {
        setNewDescription(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefaunt();
		const updatedTasks = tasks.map(task => {
            if (task.id === id) return {
                ...task,
                description: newDescription
            }
            return task
        })
        
        setTasks(updatedTasks)
    }
   
    console.log(newDescription)


    return(
        <div className={css.wrapper1}>
            <div  className={css.wrapper}>
                <div>
                    <div>
                            <div className={css.header}>
                                {task.title}
                            </div>
                            <form onSubmit={handleSubmit}>
                                <textarea  
                                        className={css.textarea}
                                        name='description'
                                        onChange={handleDescChange}
                                >
                                    {task.description || '(no description)'}
                                </textarea>
                                <button className={css.btnSubmit} type='submit'>Save</button>
                            </form>
                    </div>                 
                </div>
                <div>
                    <Link to='/' className={css.homeLink}><GrClose/></Link>
                </div>

            </div>
        </div>
    )
}

export default TaskDetail