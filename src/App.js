import React from 'react';
import { useState,useEffect } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Header from './component/header/Header';
import Main from './component/main/Main';
import Footer from './component/footer/Footer';
import './App.css';
import data from './mock.json';



function App () {
  const initialState = data
  const [tasks, setTasks] = useState(initialState)


  useEffect(() => {
		window.localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks])

  return (
    <BrowserRouter>
          <div className='wrapper'> 
              <Header />
              <Main tasks={tasks} setTasks={setTasks} />
              <Footer tasks={tasks} />
           </div>
    </BrowserRouter>
   
  );
}
export default App
