import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import BookPage from './pages/BookPage';
import ReviewPage from './pages/ReviewPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/books/:id" element={<BookPage />} />
        <Route path="/reviews/:id" element={<ReviewPage />} />
      </Routes>
    </div>
  );
}

export default App;
