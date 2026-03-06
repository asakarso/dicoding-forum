import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/style.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ThreadsPage from './pages/ThreadsPage';
import LeaderboardsPage from './pages/LeaderboardsPage';
import ThreadDetailPage from './pages/ThreadDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import NewThreadPage from './pages/NewThreadPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<ThreadsPage/>}/>
      <Route path='/*' element={<NotFoundPage/>}/>
      <Route path='/threads/:id' element={<ThreadDetailPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/leaderboards' element={<LeaderboardsPage/>}/>
      <Route path='threads/new-thread' element={<NewThreadPage/>}/>
    </Routes>
  );
}

export default App;