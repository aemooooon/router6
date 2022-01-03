import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'antd/dist/antd.css';
import Home from './home';
import Users from './users';
import NewUser from './users/new';
import List from './users/list';
import User from './users/user';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />}>
            <Route index element={<List />} />
            <Route path="new" element={<NewUser />} />
            <Route path=":id" element={<User />} />
          </Route>
        </Route>
        <Route path="*" element={<div>404</div>}></Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
