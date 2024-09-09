import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Body from './components/Body';
import Header from './components/Header';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Browse from './components/Browse';
import Error from './components/Error';

const Structure  = () =>{
  return(
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
      path:"/",
      Element:<Structure />,
      children:[
        {
          path:"/",
          element:<Body />
        },
        {
          path:"/browse",
          element:<Browse />
        }
      ],
      errorElement:<Error />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// "path" : E:\original_node.js\node_modules\npm\node_modules\firebase-tools\lib\bin\