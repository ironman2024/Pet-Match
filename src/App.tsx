import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QuizProvider } from './context/QuizContext';
import { Landing } from './pages/Landing';
import { Quiz } from './pages/Quiz';
import { Results } from './pages/Results';

function App() {
  return (
    <QuizProvider>
      <Router>
        <div className="min-h-screen bg-[#F8F9FA]">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </div>
      </Router>
    </QuizProvider>
  );
}

export default App;