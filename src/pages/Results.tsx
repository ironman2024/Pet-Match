import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useQuiz } from '../context/QuizContext';
import { Button } from '../components/Button';
import { PetMatch } from '../types/quiz';

const MatchCard = ({ match, isTopMatch = false }: { match: PetMatch; isTopMatch?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`bg-white rounded-xl shadow-lg overflow-hidden ${isTopMatch ? 'border-4 border-blue-500' : ''}`}
  >
    <div className="relative">
      <img
        src={match.imageUrl}
        alt={match.type}
        className="w-full h-64 object-cover"
      />
      {isTopMatch && (
        <div className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full font-bold">
          Best Match!
        </div>
      )}
    </div>
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold text-gray-800">{match.type}</h3>
        <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
          {match.matchPercentage}% Match
        </div>
      </div>
      <p className="text-gray-600 mb-6">{match.description}</p>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-3">Climate Compatibility</h4>
        <div className="grid grid-cols-3 gap-4">
          <ClimateBar label="Hot" value={match.personalityTraits.climateAdaptation.hot} />
          <ClimateBar label="Cold" value={match.personalityTraits.climateAdaptation.cold} />
          <ClimateBar label="Moderate" value={match.personalityTraits.climateAdaptation.moderate} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Care & Personality</h4>
          <Trait label="Energy Level" value={match.personalityTraits.energyLevel} />
          <Trait label="Social Need" value={match.personalityTraits.socialNeed} />
          <Trait label="Care Required" value={match.personalityTraits.careRequirements} />
          <Trait label="Space Needs" value={match.personalityTraits.spaceNeeds} />
          <Trait label="Child Friendly" value={match.personalityTraits.childFriendly} />
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Additional Traits</h4>
          <Trait label="Pet Friendly" value={match.personalityTraits.otherPetFriendly} />
          <Trait label="Grooming" value={match.personalityTraits.grooming} />
          <Trait label="Noise Level" value={match.personalityTraits.noise} />
          <Trait label="Intelligence" value={match.personalityTraits.intelligence} />
          <Trait label="Independence" value={match.personalityTraits.independence} />
        </div>
      </div>
    </div>
  </motion.div>
);

const ClimateBar = ({ label, value }: { label: string; value: number }) => (
  <div>
    <div className="flex justify-between mb-1">
      <span className="text-sm text-gray-600">{label}</span>
      <span className="text-sm font-medium text-gray-800">{value}/10</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-3">
      <div
        className={`rounded-full h-3 ${getClimateColorClass(value)}`}
        style={{ width: `${value * 10}%` }}
      />
    </div>
  </div>
);

const getClimateColorClass = (value: number): string => {
  if (value >= 8) return 'bg-green-500';
  if (value >= 6) return 'bg-blue-500';
  if (value >= 4) return 'bg-yellow-500';
  return 'bg-red-500';
};

const Trait = ({ label, value }: { label: string; value: number }) => (
  <div>
    <div className="flex justify-between mb-1">
      <span className="text-sm text-gray-600">{label}</span>
      <span className="text-sm font-medium text-gray-800">{value}/10</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="bg-blue-500 rounded-full h-2"
        style={{ width: `${value * 10}%` }}
      />
    </div>
  </div>
);

export function Results() {
  const navigate = useNavigate();
  const { state, dispatch } = useQuiz();

  useEffect(() => {
    if (!state.results) {
      navigate('/');
    }
  }, [state.results, navigate]);

  const handleRetakeQuiz = () => {
    dispatch({ type: 'RESET_QUIZ' });
    navigate('/');
  };

  if (!state.results) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Your Perfect Pet Matches</h1>
            <p className="text-gray-600 text-lg">
              Based on your preferences and local climate, here are the pets that would be a great fit for you!
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {state.results.allMatches.map((match, index) => (
              <MatchCard
                key={match.type}
                match={match}
                isTopMatch={index === 0}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button onClick={handleRetakeQuiz} variant="secondary">
              Take Quiz Again
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}