import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useQuiz } from '../context/QuizContext';
import { Button } from '../components/Button';
import { ProgressBar } from '../components/ProgressBar';
import { quizQuestions } from '../data/questions';
import { calculatePetMatch } from '../utils/matchCalculator';
import { PersonalityWeights } from '../types/quiz';

export function Quiz() {
  const navigate = useNavigate();
  const { state, dispatch } = useQuiz();
  const currentQuestion = quizQuestions[state.currentQuestionIndex];

  const handleAnswer = (weights: PersonalityWeights) => {
    dispatch({
      type: 'ANSWER_QUESTION',
      payload: { questionId: currentQuestion.question_id, weights },
    });

    if (state.currentQuestionIndex < quizQuestions.length - 1) {
      dispatch({ type: 'NEXT_QUESTION' });
    } else {
      // Calculate results
      const results = calculatePetMatch(state.answers);
      dispatch({ type: 'SET_RESULTS', payload: results });
      dispatch({ type: 'SET_MATCHED_PET', payload: results.topMatch });
      navigate('/results');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <ProgressBar
            current={state.currentQuestionIndex + 1}
            total={quizQuestions.length}
          />
          <motion.div
            key={currentQuestion.question_id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-8"
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              {currentQuestion.question_text}
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {currentQuestion.options.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: index * 0.1 }
                  }}
                >
                  <Button
                    variant="secondary"
                    className="w-full text-left p-6 hover:bg-blue-50 transition-colors duration-200"
                    onClick={() => handleAnswer(option.personality_weights)}
                  >
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-blue-600 font-semibold">{index + 1}</span>
                      </div>
                      <span className="text-lg">{option.text}</span>
                    </div>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}