import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { QuizResults, PetMatch, PersonalityWeights } from '../types/quiz';

interface QuizState {
  currentQuestionIndex: number;
  answers: Record<string, PersonalityWeights>;
  results: QuizResults | null;
  matchedPet: PetMatch | null;
}

type QuizAction =
  | { type: 'ANSWER_QUESTION'; payload: { questionId: string; weights: PersonalityWeights } }
  | { type: 'NEXT_QUESTION' }
  | { type: 'SET_RESULTS'; payload: QuizResults }
  | { type: 'SET_MATCHED_PET'; payload: PetMatch }
  | { type: 'RESET_QUIZ' };

const initialState: QuizState = {
  currentQuestionIndex: 0,
  answers: {},
  results: null,
  matchedPet: null,
};

const QuizContext = createContext<{
  state: QuizState;
  dispatch: React.Dispatch<QuizAction>;
} | undefined>(undefined);

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case 'ANSWER_QUESTION':
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.payload.questionId]: action.payload.weights,
        },
      };
    case 'NEXT_QUESTION':
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
      };
    case 'SET_RESULTS':
      return {
        ...state,
        results: action.payload,
      };
    case 'SET_MATCHED_PET':
      return {
        ...state,
        matchedPet: action.payload,
      };
    case 'RESET_QUIZ':
      return initialState;
    default:
      return state;
  }
}

export function QuizProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
}