import React from 'react';
import './App.css';
import Header from './header';
import {Routes,Route } from 'react-router-dom';
import SearchPage from './SearchPage';
import './SearchPage.css'
import Same from './Same';
import WatchLater from './WatchLater';
import Subscription from './Subscription';




const App = () => {
  return (
    <div>
       <Header/>
       <Routes>
        <Route path="/" element={<Same/>}>
          </Route>
           <Route path="/search/:search_term" element={[<SearchPage/>]}></Route>
           <Route path="/watch_later" element={[<WatchLater/>]}></Route>
           <Route path="/subscriptions" element={[<Subscription/>]}></Route>
  </Routes>
    </div>
  )
}

export default App
