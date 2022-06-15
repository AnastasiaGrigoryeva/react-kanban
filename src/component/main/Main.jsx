import { Routes, Route} from 'react-router-dom'
import React from 'react';
import'./Main-css.css'
import Board from '../board/Board';
import TaskDetail from '../taskDetail/TaskDetail'



const Main = (props) => {

  return (
    <main className="main" > 
          <Routes path="/">
              <Route exact path={`/`} element={<Board {...props} />} />
              <Route path={`/tasks/:id`} element={<TaskDetail {...props} />} />
          </Routes>
    </main>
  );
}

export default Main
