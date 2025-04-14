import { PetMatch, QuizResults, PersonalityWeights } from '../types/quiz';

const petBreeds: PetMatch[] = [
  {
    type: "Golden Retriever",
    description: "Friendly, intelligent, and devoted family dogs. Great with children and other pets.",
    matchPercentage: 0,
    imageUrl: "https://images.dog.ceo/breeds/retriever-golden/n02099601_1024.jpg",
    personalityTraits: {
      energyLevel: 8,
      socialNeed: 9,
      careRequirements: 7,
      spaceNeeds: 7,
      childFriendly: 9,
      otherPetFriendly: 9,
      grooming: 7,
      noise: 5,
      intelligence: 8,
      independence: 4,
      climateAdaptation: {
        hot: 5,
        cold: 8,
        moderate: 9
      }
    }
  },
  {
    type: "Maine Coon",
    description: "Large, gentle giants of the cat world. Known for their intelligence and dog-like personality.",
    matchPercentage: 0,
    imageUrl: "https://cdn2.thecatapi.com/images/OOD3VXAQn.jpg",
    personalityTraits: {
      energyLevel: 6,
      socialNeed: 7,
      careRequirements: 6,
      spaceNeeds: 5,
      childFriendly: 8,
      otherPetFriendly: 7,
      grooming: 8,
      noise: 4,
      intelligence: 9,
      independence: 6,
      climateAdaptation: {
        hot: 4,
        cold: 9,
        moderate: 7
      }
    }
  },
  {
    type: "French Bulldog",
    description: "Adaptable, playful, and compact dogs perfect for city living.",
    matchPercentage: 0,
    imageUrl: "https://images.dog.ceo/breeds/bulldog-french/n02108915_5735.jpg",
    personalityTraits: {
      energyLevel: 5,
      socialNeed: 8,
      careRequirements: 5,
      spaceNeeds: 4,
      childFriendly: 7,
      otherPetFriendly: 7,
      grooming: 4,
      noise: 4,
      intelligence: 6,
      independence: 5,
      climateAdaptation: {
        hot: 3,
        cold: 5,
        moderate: 8
      }
    }
  },
  {
    type: "Ragdoll",
    description: "Relaxed, affectionate cats that love to follow their humans around.",
    matchPercentage: 0,
    imageUrl: "https://cdn2.thecatapi.com/images/BQMSld0A0.jpg",
    personalityTraits: {
      energyLevel: 4,
      socialNeed: 8,
      careRequirements: 5,
      spaceNeeds: 4,
      childFriendly: 9,
      otherPetFriendly: 8,
      grooming: 6,
      noise: 3,
      intelligence: 7,
      independence: 4,
      climateAdaptation: {
        hot: 5,
        cold: 7,
        moderate: 9
      }
    }
  },
  {
    type: "Siberian Husky",
    description: "Energetic and resilient dogs bred for cold climates. Excellent for active families.",
    matchPercentage: 0,
    imageUrl: "https://images.dog.ceo/breeds/husky/n02110185_7740.jpg",
    personalityTraits: {
      energyLevel: 9,
      socialNeed: 8,
      careRequirements: 7,
      spaceNeeds: 8,
      childFriendly: 8,
      otherPetFriendly: 7,
      grooming: 8,
      noise: 7,
      intelligence: 8,
      independence: 7,
      climateAdaptation: {
        hot: 2,
        cold: 10,
        moderate: 6
      }
    }
  },
  {
    type: "Siamese",
    description: "Elegant, vocal, and heat-loving cats. Perfect for warm climates.",
    matchPercentage: 0,
    imageUrl: "https://cdn2.thecatapi.com/images/Rj5GQgQMQ.jpg",
    personalityTraits: {
      energyLevel: 7,
      socialNeed: 9,
      careRequirements: 4,
      spaceNeeds: 5,
      childFriendly: 7,
      otherPetFriendly: 7,
      grooming: 3,
      noise: 8,
      intelligence: 9,
      independence: 5,
      climateAdaptation: {
        hot: 9,
        cold: 4,
        moderate: 7
      }
    }
  },
  {
    type: "Australian Cattle Dog",
    description: "Hardy, intelligent working dogs adapted to hot climates.",
    matchPercentage: 0,
    imageUrl: "https://images.dog.ceo/breeds/cattledog-australian/IMG_1042.jpg",
    personalityTraits: {
      energyLevel: 9,
      socialNeed: 7,
      careRequirements: 6,
      spaceNeeds: 7,
      childFriendly: 7,
      otherPetFriendly: 6,
      grooming: 4,
      noise: 6,
      intelligence: 9,
      independence: 7,
      climateAdaptation: {
        hot: 9,
        cold: 6,
        moderate: 8
      }
    }
  },
  {
    type: "Persian Cat",
    description: "Gentle, quiet, and luxurious indoor cats perfect for calm households.",
    matchPercentage: 0,
    imageUrl: "https://cdn2.thecatapi.com/images/FZpeiLi4n.jpg",
    personalityTraits: {
      energyLevel: 3,
      socialNeed: 6,
      careRequirements: 8,
      spaceNeeds: 4,
      childFriendly: 6,
      otherPetFriendly: 7,
      grooming: 9,
      noise: 2,
      intelligence: 6,
      independence: 5,
      climateAdaptation: {
        hot: 4,
        cold: 7,
        moderate: 8
      }
    }
  },
  {
    type: "Bernese Mountain Dog",
    description: "Gentle giants bred for cold mountain climates. Excellent family companions.",
    matchPercentage: 0,
    imageUrl: "https://images.dog.ceo/breeds/mountain-bernese/n02107683_4726.jpg",
    personalityTraits: {
      energyLevel: 7,
      socialNeed: 8,
      careRequirements: 7,
      spaceNeeds: 8,
      childFriendly: 9,
      otherPetFriendly: 8,
      grooming: 8,
      noise: 4,
      intelligence: 7,
      independence: 4,
      climateAdaptation: {
        hot: 2,
        cold: 9,
        moderate: 6
      }
    }
  },
  {
    type: "Bengal Cat",
    description: "Active, intelligent, and exotic-looking cats that love to play and explore.",
    matchPercentage: 0,
    imageUrl: "https://cdn2.thecatapi.com/images/O3btzLlsO.png",
    personalityTraits: {
      energyLevel: 9,
      socialNeed: 7,
      careRequirements: 5,
      spaceNeeds: 6,
      childFriendly: 7,
      otherPetFriendly: 6,
      grooming: 4,
      noise: 7,
      intelligence: 9,
      independence: 6,
      climateAdaptation: {
        hot: 7,
        cold: 6,
        moderate: 8
      }
    }
  },
  {
    type: "Chihuahua",
    description: "Small, loyal, and adaptable dogs perfect for apartment living.",
    matchPercentage: 0,
    imageUrl: "https://images.dog.ceo/breeds/chihuahua/n02085620_7705.jpg",
    personalityTraits: {
      energyLevel: 6,
      socialNeed: 8,
      careRequirements: 4,
      spaceNeeds: 3,
      childFriendly: 5,
      otherPetFriendly: 5,
      grooming: 3,
      noise: 7,
      intelligence: 7,
      independence: 5,
      climateAdaptation: {
        hot: 8,
        cold: 3,
        moderate: 7
      }
    }
  },
  {
    type: "Russian Blue",
    description: "Quiet, gentle, and adaptable cats with a plush double coat.",
    matchPercentage: 0,
    imageUrl: "https://cdn2.thecatapi.com/images/RussianBlue_001.jpg",
    personalityTraits: {
      energyLevel: 5,
      socialNeed: 6,
      careRequirements: 4,
      spaceNeeds: 4,
      childFriendly: 7,
      otherPetFriendly: 8,
      grooming: 4,
      noise: 2,
      intelligence: 8,
      independence: 7,
      climateAdaptation: {
        hot: 5,
        cold: 8,
        moderate: 9
      }
    }
  },
  {
    type: "Alaskan Malamute",
    description: "Powerful, athletic dogs built for cold weather and endurance.",
    matchPercentage: 0,
    imageUrl: "https://images.dog.ceo/breeds/malamute/n02110063_1104.jpg",
    personalityTraits: {
      energyLevel: 9,
      socialNeed: 8,
      careRequirements: 7,
      spaceNeeds: 8,
      childFriendly: 7,
      otherPetFriendly: 6,
      grooming: 8,
      noise: 8,
      intelligence: 7,
      independence: 6,
      climateAdaptation: {
        hot: 2,
        cold: 10,
        moderate: 5
      }
    }
  }
];

export function calculatePetMatch(answers: Record<string, PersonalityWeights>): QuizResults {
  const userPreferences = calculateAverageWeights(Object.values(answers));
  
  const matches = petBreeds.map(breed => {
    const matchScore = calculateMatchScore(userPreferences, breed.personalityTraits);
    return {
      ...breed,
      matchPercentage: Math.round(matchScore * 100)
    };
  }).sort((a, b) => b.matchPercentage - a.matchPercentage);

  return {
    topMatch: matches[0],
    allMatches: matches
  };
}

function calculateAverageWeights(weights: PersonalityWeights[]): PersonalityWeights {
  const sum = weights.reduce((acc, curr) => {
    return {
      energyLevel: acc.energyLevel + curr.energyLevel,
      socialNeed: acc.socialNeed + curr.socialNeed,
      careRequirements: acc.careRequirements + curr.careRequirements,
      spaceNeeds: acc.spaceNeeds + curr.spaceNeeds,
      childFriendly: acc.childFriendly + curr.childFriendly,
      otherPetFriendly: acc.otherPetFriendly + curr.otherPetFriendly,
      grooming: acc.grooming + curr.grooming,
      noise: acc.noise + curr.noise,
      intelligence: acc.intelligence + curr.intelligence,
      independence: acc.independence + curr.independence,
      climateAdaptation: {
        hot: acc.climateAdaptation.hot + curr.climateAdaptation.hot,
        cold: acc.climateAdaptation.cold + curr.climateAdaptation.cold,
        moderate: acc.climateAdaptation.moderate + curr.climateAdaptation.moderate
      }
    };
  });

  const count = weights.length;
  return {
    energyLevel: sum.energyLevel / count,
    socialNeed: sum.socialNeed / count,
    careRequirements: sum.careRequirements / count,
    spaceNeeds: sum.spaceNeeds / count,
    childFriendly: sum.childFriendly / count,
    otherPetFriendly: sum.otherPetFriendly / count,
    grooming: sum.grooming / count,
    noise: sum.noise / count,
    intelligence: sum.intelligence / count,
    independence: sum.independence / count,
    climateAdaptation: {
      hot: sum.climateAdaptation.hot / count,
      cold: sum.climateAdaptation.cold / count,
      moderate: sum.climateAdaptation.moderate / count
    }
  };
}

function calculateMatchScore(userPrefs: PersonalityWeights, petTraits: PersonalityWeights): number {
  const maxDifference = 10;
  const weights = {
    energyLevel: 1.2,
    socialNeed: 1.1,
    careRequirements: 1.0,
    spaceNeeds: 1.2,
    childFriendly: 1.1,
    otherPetFriendly: 1.0,
    grooming: 0.9,
    noise: 0.8,
    intelligence: 0.9,
    independence: 1.0,
    climateAdaptation: 1.5 // Higher weight for climate compatibility
  };

  let totalDifference = 0;
  let totalWeight = 0;

  // Calculate personality trait differences
  Object.keys(userPrefs).forEach(trait => {
    if (trait !== 'climateAdaptation') {
      const key = trait as keyof Omit<PersonalityWeights, 'climateAdaptation'>;
      const difference = Math.abs(userPrefs[key] - petTraits[key]);
      const weight = weights[key];
      totalDifference += (difference / maxDifference) * weight;
      totalWeight += weight;
    }
  });

  // Calculate climate adaptation difference
  const climateWeight = weights.climateAdaptation;
  const climateDiff = (
    Math.abs(userPrefs.climateAdaptation.hot - petTraits.climateAdaptation.hot) +
    Math.abs(userPrefs.climateAdaptation.cold - petTraits.climateAdaptation.cold) +
    Math.abs(userPrefs.climateAdaptation.moderate - petTraits.climateAdaptation.moderate)
  ) / 3; // Average difference across climate types

  totalDifference += (climateDiff / maxDifference) * climateWeight;
  totalWeight += climateWeight;

  const averageDifference = totalDifference / totalWeight;
  return 1 - averageDifference;
} 