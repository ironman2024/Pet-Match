import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PawPrint as Paw } from 'lucide-react';
import { Button } from '../components/Button';

export function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <div className="flex items-center justify-center mb-6">
          <Paw size={48} className="text-[#4A90E2]" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
          Find Your Perfect Pet Match
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Take our personality quiz to discover which pet companion is right for you!
        </p>
        <Button onClick={() => navigate('/quiz')} className="text-lg">
          Start Quiz
        </Button>
      </motion.div>
    </div>
  );
}