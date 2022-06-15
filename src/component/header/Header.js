import React from 'react';
import { useState, useCallback } from 'react';
import css from './css.module.css';

function Header() {
  
  
  const useToggle = (initialState = false) => {
    const [state, setState] = useState(initialState);
    const toggle = useCallback(() => setState((state) => !state), []);
    return [state, toggle]
  };


  const [toggle, setToggle] = useToggle();

  return (
    <div className={css.contener}>
        <div className={css.header}>

        <p>Awesome Kanban Board</p>
        <div >
          <button className={css.button} onClick={setToggle}>
            </button>
              {toggle &&(<div className={css.nav} >
                  <a className={css.buttonA} href="#">Profile</a>
                  <a href="#">Log Out</a>
                </div>)}
        </div>


        </div>
    </div>

  );
}

export default Header;
