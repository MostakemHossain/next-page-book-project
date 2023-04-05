import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import Books from './component/Books';
import BookDetails from './component/BookDetails';
import ErrorPage from './component/Error';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/about',
        element:<About></About>
      },
      
      {
        path:'/books',
        element:<Books></Books>,
        loader: ()=> fetch('https://api.itbook.store/1.0/new')
      },
      {
        path:'/book/:id',
        element:<BookDetails></BookDetails>,
        loader: ({ params }) =>
        fetch(`https://api.itbook.store/1.0/books/${params.id}`),

      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
