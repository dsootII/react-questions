import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Navbar from './Navbar';
import CountdownTimer from './CountdownTimer/CountdownTimer';
import Home from './Home';
import Modal from './Modal/Modal';
import DragAndDrop from './DragAndDrop/DragAndDrop';

export default function App() {


  return (
    <>
    <Routes>
      
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='countdown' element={<CountdownTimer/>}  />
        <Route path='modal' element={<Modal />}/>
        <Route path='dnd' element={<DragAndDrop />} />
      </Route>

    </Routes>                                                                             



    </>
  )
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav >
        <ul className='flex justify-start gap-3'>
          <li className='hover:bg-green-500'>
            <Link to="/">Home</Link>
          </li>
          <li className='hover:bg-green-500'>
            <Link to="/countdown">Countdown Timer</Link>
          </li>
          <li className='hover:bg-green-500'>
            <Link to="/modal">Modal</Link>
          </li>
          <li className='hover:bg-green-500'>
            <Link to="/dnd">Drag and Drop</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}
