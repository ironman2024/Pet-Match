export interface QuizQuestion {
  question_id: string;
  question_text: string;
  options: {
    text: string;
    personality_weights: PersonalityWeights;
  }[];
}

export interface QuizOption {
  text: string;
  personality_weights: PersonalityWeights;
}

export interface ClimateAdaptation {
  hot: number;
  cold: number;
  moderate: number;
}

export interface PersonalityWeights {
  energyLevel: number;
  socialNeed: number;
  careRequirements: number;
  spaceNeeds: number;
  childFriendly: number;
  otherPetFriendly: number;
  grooming: number;
  noise: number;
  intelligence: number;
  independence: number;
  climateAdaptation: ClimateAdaptation;
}

export interface QuizResults {
  topMatch: PetMatch;
  allMatches: PetMatch[];
}

export interface PetMatch {
  type: string;
  description: string;
  matchPercentage: number;
  imageUrl: string;
  personalityTraits: PersonalityWeights;
}