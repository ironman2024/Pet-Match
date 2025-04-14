import { PersonalityWeights, PetMatch } from '../types/quiz';

interface PetBreed extends Omit<PetMatch, 'matchPercentage'> {
  traits: PersonalityWeights;
}

export const petBreeds: PetBreed[] = [
  {
    type: "Dog",
    breed: "French Bulldog",
    description: "Adaptable, playful, and compact companion that's perfect for city living",
    imageUrl: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e",
    traits: {
      energyLevel: 5,
      socialNeed: 8,
      careRequirements: 6,
      spaceNeeds: 4,
      childFriendly: 8,
      otherPetFriendly: 7,
      grooming: 4,
      noise: 4,
      intelligence: 6,
      independence: 4
    },
    characteristics: {
      size: "Small",
      lifespan: "10-12 years",
      temperament: ["Playful", "Adaptable", "Friendly"],
      exercise: "30 minutes daily",
      grooming: "Weekly brushing, clean facial folds",
      health: ["Respiratory issues", "Hip dysplasia"]
    }
  },
  {
    type: "Cat",
    breed: "British Shorthair",
    description: "Calm, independent cat that's perfect for busy professionals",
    imageUrl: "https://images.unsplash.com/photo-1573865526739-10659fec78a5",
    traits: {
      energyLevel: 4,
      socialNeed: 5,
      careRequirements: 4,
      spaceNeeds: 5,
      childFriendly: 7,
      otherPetFriendly: 8,
      grooming: 4,
      noise: 3,
      intelligence: 7,
      independence: 8
    },
    characteristics: {
      size: "Medium",
      lifespan: "12-17 years",
      temperament: ["Calm", "Affectionate", "Independent"],
      exercise: "Play sessions daily",
      grooming: "Weekly brushing",
      health: ["Generally healthy", "Watch weight"]
    }
  }
  // Add more breeds...
];
