import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'antd/dist/antd.css';
const App = React.lazy(() => import('./App'));
const Home = React.lazy(() => import('./home'));
const Users = React.lazy(() => import('./users'));
const NewUser = React.lazy(()=> import('./users/new'));
const List = React.lazy(()=> import('./users/list'));
const User = React.lazy(()=>import('./users/user'));


ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
