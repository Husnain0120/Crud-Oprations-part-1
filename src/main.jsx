import React from 'react'
import ReactDOM from 'react-dom/client'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import './index.css'
import './App.css'
import Post from './compounds/Post.jsx'
import Read from './compounds/Read.jsx'
import Update from './compounds/Update.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path='/' element={<Post/>}/>
    <Route path='/read' element={<Read/>}/>
    <Route path='/update' element={<Update/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <RouterProvider router={router} />
  </React.StrictMode>,
)
