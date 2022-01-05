import React from 'react';
import './App.css';
import logo from './logo.svg';
import { NavLink, Outlet } from 'react-router-dom';

function App() {

  let copyRight = '';

  import('./utils/index').then((utils) => copyRight = utils.getCopyright());

  return (
    <div className="App">
      <header className='header'>
        <img src={logo} alt="" />
        <div>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'white'
            })}
            to={"/"}>
            Home
          </NavLink> | {""}
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'white'
            })} to={"users"}>
            User
          </NavLink>
        </div>
      </header>
      <main className='main'>
        <Outlet />
      </main>
      <footer className='footer'>
        {copyRight}
      </footer>
    </div>
  );
}

export default App;
