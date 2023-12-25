// AppRouter.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Game from './Game';
import ResultPage from './ResultsPage';



const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Game/>} />
        <Route path="/result" element={<ResultPage/>} />
       
    </Routes>
   
  );
};

export default AppRouter;
