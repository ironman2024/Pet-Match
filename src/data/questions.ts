import { QuizQuestion } from '../types/quiz';

export const quizQuestions: QuizQuestion[] = [
  {
    question_id: "climate",
    question_text: "What's the typical climate in your area?",
    options: [
      {
        text: "Hot and Humid (tropical/subtropical)",
        personality_weights: {
          energyLevel: 4,
          socialNeed: 6,
          careRequirements: 7,
          spaceNeeds: 5,
          childFriendly: 6,
          otherPetFriendly: 6,
          grooming: 8,
          noise: 5,
          intelligence: 7,
          independence: 6,
          climateAdaptation: {
            hot: 9,
            cold: 3,
            moderate: 6
          }
        }
      },
      {
        text: "Cold (frequent snow/below freezing)",
        personality_weights: {
          energyLevel: 7,
          socialNeed: 8,
          careRequirements: 7,
          spaceNeeds: 6,
          childFriendly: 7,
          otherPetFriendly: 7,
          grooming: 8,
          noise: 5,
          intelligence: 7,
          independence: 5,
          climateAdaptation: {
            hot: 3,
            cold: 9,
            moderate: 6
          }
        }
      },
      {
        text: "Moderate (mild temperatures year-round)",
        personality_weights: {
          energyLevel: 6,
          socialNeed: 7,
          careRequirements: 6,
          spaceNeeds: 5,
          childFriendly: 7,
          otherPetFriendly: 7,
          grooming: 6,
          noise: 5,
          intelligence: 7,
          independence: 6,
          climateAdaptation: {
            hot: 6,
            cold: 6,
            moderate: 9
          }
        }
      }
    ]
  },
  {
    question_id: "living_environment",
    question_text: "What's your living environment like?",
    options: [
      {
        text: "Urban (city with limited green spaces)",
        personality_weights: {
          energyLevel: 4,
          socialNeed: 7,
          careRequirements: 5,
          spaceNeeds: 3,
          childFriendly: 6,
          otherPetFriendly: 6,
          grooming: 5,
          noise: 4,
          intelligence: 8,
          independence: 7,
          climateAdaptation: {
            hot: 5,
            cold: 5,
            moderate: 5
          }
        }
      },
      {
        text: "Suburban (residential with parks/yards)",
        personality_weights: {
          energyLevel: 7,
          socialNeed: 7,
          careRequirements: 6,
          spaceNeeds: 6,
          childFriendly: 8,
          otherPetFriendly: 7,
          grooming: 6,
          noise: 6,
          intelligence: 7,
          independence: 6,
          climateAdaptation: {
            hot: 6,
            cold: 6,
            moderate: 7
          }
        }
      },
      {
        text: "Rural (lots of outdoor space)",
        personality_weights: {
          energyLevel: 8,
          socialNeed: 6,
          careRequirements: 7,
          spaceNeeds: 8,
          childFriendly: 7,
          otherPetFriendly: 8,
          grooming: 7,
          noise: 7,
          intelligence: 8,
          independence: 5,
          climateAdaptation: {
            hot: 7,
            cold: 7,
            moderate: 8
          }
        }
      }
    ]
  },
  {
    question_id: "living_space",
    question_text: "What type of living space do you have?",
    options: [
      {
        text: "Small apartment (< 500 sq ft)",
        personality_weights: {
          energyLevel: 3,
          socialNeed: 5,
          careRequirements: 4,
          spaceNeeds: 2,
          childFriendly: 5,
          otherPetFriendly: 6,
          grooming: 5,
          noise: 3,
          intelligence: 7,
          independence: 8,
          climateAdaptation: {
            hot: 5,
            cold: 6,
            moderate: 7
          }
        }
      },
      {
        text: "Medium apartment/condo (500-1000 sq ft)",
        personality_weights: {
          energyLevel: 5,
          socialNeed: 6,
          careRequirements: 5,
          spaceNeeds: 4,
          childFriendly: 6,
          otherPetFriendly: 7,
          grooming: 6,
          noise: 5,
          intelligence: 7,
          independence: 6,
          climateAdaptation: {
            hot: 6,
            cold: 6,
            moderate: 7
          }
        }
      },
      {
        text: "House with yard",
        personality_weights: {
          energyLevel: 8,
          socialNeed: 7,
          careRequirements: 7,
          spaceNeeds: 8,
          childFriendly: 8,
          otherPetFriendly: 8,
          grooming: 7,
          noise: 7,
          intelligence: 8,
          independence: 5,
          climateAdaptation: {
            hot: 7,
            cold: 7,
            moderate: 8
          }
        }
      }
    ]
  },
  {
    question_id: "daily_schedule",
    question_text: "What's your typical daily schedule like?",
    options: [
      {
        text: "I'm away 8+ hours (busy work schedule)",
        personality_weights: {
          energyLevel: 3,
          socialNeed: 4,
          careRequirements: 3,
          spaceNeeds: 5,
          childFriendly: 4,
          otherPetFriendly: 7,
          grooming: 4,
          noise: 3,
          intelligence: 8,
          independence: 9,
          climateAdaptation: {
            hot: 6,
            cold: 6,
            moderate: 6
          }
        }
      },
      {
        text: "I work from home/flexible schedule",
        personality_weights: {
          energyLevel: 7,
          socialNeed: 8,
          careRequirements: 7,
          spaceNeeds: 6,
          childFriendly: 7,
          otherPetFriendly: 8,
          grooming: 7,
          noise: 6,
          intelligence: 8,
          independence: 5,
          climateAdaptation: {
            hot: 6,
            cold: 6,
            moderate: 7
          }
        }
      },
      {
        text: "Part-time work/Regular breaks at home",
        personality_weights: {
          energyLevel: 6,
          socialNeed: 7,
          careRequirements: 6,
          spaceNeeds: 5,
          childFriendly: 6,
          otherPetFriendly: 7,
          grooming: 6,
          noise: 5,
          intelligence: 7,
          independence: 6,
          climateAdaptation: {
            hot: 6,
            cold: 6,
            moderate: 7
          }
        }
      }
    ]
  },
  {
    question_id: "exercise_habits",
    question_text: "How much exercise can you provide to your pet?",
    options: [
      {
        text: "Minimal - Short walks or indoor play",
        personality_weights: {
          energyLevel: 2,
          socialNeed: 4,
          careRequirements: 3,
          spaceNeeds: 3,
          childFriendly: 5,
          otherPetFriendly: 6,
          grooming: 4,
          noise: 3,
          intelligence: 6,
          independence: 8,
          climateAdaptation: {
            hot: 5,
            cold: 5,
            moderate: 7
          }
        }
      },
      {
        text: "Moderate - Daily walks and regular play sessions",
        personality_weights: {
          energyLevel: 6,
          socialNeed: 7,
          careRequirements: 6,
          spaceNeeds: 5,
          childFriendly: 7,
          otherPetFriendly: 7,
          grooming: 6,
          noise: 5,
          intelligence: 7,
          independence: 5,
          climateAdaptation: {
            hot: 6,
            cold: 6,
            moderate: 8
          }
        }
      },
      {
        text: "Active - Long walks, runs, or intense play sessions",
        personality_weights: {
          energyLevel: 9,
          socialNeed: 8,
          careRequirements: 8,
          spaceNeeds: 7,
          childFriendly: 8,
          otherPetFriendly: 8,
          grooming: 7,
          noise: 6,
          intelligence: 9,
          independence: 4,
          climateAdaptation: {
            hot: 7,
            cold: 7,
            moderate: 7
          }
        }
      }
    ]
  },
  {
    question_id: "household_composition",
    question_text: "Who else lives in your household?",
    options: [
      {
        text: "Just me",
        personality_weights: {
          energyLevel: 5,
          socialNeed: 7,
          careRequirements: 5,
          spaceNeeds: 4,
          childFriendly: 5,
          otherPetFriendly: 6,
          grooming: 5,
          noise: 4,
          intelligence: 7,
          independence: 7,
          climateAdaptation: {
            hot: 6,
            cold: 6,
            moderate: 7
          }
        }
      },
      {
        text: "Family with young children",
        personality_weights: {
          energyLevel: 7,
          socialNeed: 8,
          careRequirements: 7,
          spaceNeeds: 6,
          childFriendly: 9,
          otherPetFriendly: 8,
          grooming: 6,
          noise: 7,
          intelligence: 8,
          independence: 4,
          climateAdaptation: {
            hot: 6,
            cold: 6,
            moderate: 7
          }
        }
      },
      {
        text: "Other pets in the household",
        personality_weights: {
          energyLevel: 6,
          socialNeed: 8,
          careRequirements: 6,
          spaceNeeds: 5,
          childFriendly: 7,
          otherPetFriendly: 9,
          grooming: 6,
          noise: 5,
          intelligence: 8,
          independence: 5,
          climateAdaptation: {
            hot: 6,
            cold: 6,
            moderate: 7
          }
        }
      }
    ]
  },
  {
    question_id: "grooming_commitment",
    question_text: "How much time can you commit to grooming?",
    options: [
      {
        text: "Minimal - Basic maintenance only",
        personality_weights: {
          energyLevel: 4,
          socialNeed: 5,
          careRequirements: 3,
          spaceNeeds: 4,
          childFriendly: 6,
          otherPetFriendly: 6,
          grooming: 3,
          noise: 4,
          intelligence: 6,
          independence: 8,
          climateAdaptation: {
            hot: 6,
            cold: 5,
            moderate: 7
          }
        }
      },
      {
        text: "Moderate - Regular brushing and occasional grooming",
        personality_weights: {
          energyLevel: 6,
          socialNeed: 7,
          careRequirements: 6,
          spaceNeeds: 5,
          childFriendly: 7,
          otherPetFriendly: 7,
          grooming: 6,
          noise: 5,
          intelligence: 7,
          independence: 6,
          climateAdaptation: {
            hot: 6,
            cold: 6,
            moderate: 7
          }
        }
      },
      {
        text: "High - Daily grooming and professional care",
        personality_weights: {
          energyLevel: 7,
          socialNeed: 8,
          careRequirements: 8,
          spaceNeeds: 6,
          childFriendly: 8,
          otherPetFriendly: 8,
          grooming: 9,
          noise: 6,
          intelligence: 8,
          independence: 4,
          climateAdaptation: {
            hot: 7,
            cold: 7,
            moderate: 8
          }
        }
      }
    ]
  },
  {
    question_id: "seasonal_changes",
    question_text: "How extreme are the seasonal changes in your area?",
    options: [
      {
        text: "Minimal (consistent weather year-round)",
        personality_weights: {
          energyLevel: 6,
          socialNeed: 6,
          careRequirements: 5,
          spaceNeeds: 5,
          childFriendly: 7,
          otherPetFriendly: 7,
          grooming: 5,
          noise: 5,
          intelligence: 7,
          independence: 6,
          climateAdaptation: {
            hot: 7,
            cold: 4,
            moderate: 8
          }
        }
      },
      {
        text: "Moderate (distinct seasons but not extreme)",
        personality_weights: {
          energyLevel: 7,
          socialNeed: 7,
          careRequirements: 6,
          spaceNeeds: 6,
          childFriendly: 7,
          otherPetFriendly: 7,
          grooming: 6,
          noise: 5,
          intelligence: 7,
          independence: 6,
          climateAdaptation: {
            hot: 6,
            cold: 6,
            moderate: 9
          }
        }
      },
      {
        text: "Extreme (very hot summers and very cold winters)",
        personality_weights: {
          energyLevel: 5,
          socialNeed: 7,
          careRequirements: 8,
          spaceNeeds: 6,
          childFriendly: 6,
          otherPetFriendly: 7,
          grooming: 8,
          noise: 5,
          intelligence: 8,
          independence: 7,
          climateAdaptation: {
            hot: 8,
            cold: 8,
            moderate: 5
          }
        }
      }
    ]
  },
  {
    question_id: "budget",
    question_text: "What's your budget for pet care (monthly)?",
    options: [
      {
        text: "Limited (up to $50/month)",
        personality_weights: {
          energyLevel: 4,
          socialNeed: 5,
          careRequirements: 3,
          spaceNeeds: 4,
          childFriendly: 6,
          otherPetFriendly: 6,
          grooming: 3,
          noise: 4,
          intelligence: 6,
          independence: 8,
          climateAdaptation: {
            hot: 6,
            cold: 6,
            moderate: 7
          }
        }
      },
      {
        text: "Moderate ($50-150/month)",
        personality_weights: {
          energyLevel: 6,
          socialNeed: 7,
          careRequirements: 6,
          spaceNeeds: 6,
          childFriendly: 7,
          otherPetFriendly: 7,
          grooming: 6,
          noise: 5,
          intelligence: 7,
          independence: 6,
          climateAdaptation: {
            hot: 7,
            cold: 7,
            moderate: 7
          }
        }
      },
      {
        text: "High ($150+/month)",
        personality_weights: {
          energyLevel: 8,
          socialNeed: 8,
          careRequirements: 8,
          spaceNeeds: 7,
          childFriendly: 8,
          otherPetFriendly: 8,
          grooming: 8,
          noise: 6,
          intelligence: 8,
          independence: 5,
          climateAdaptation: {
            hot: 8,
            cold: 8,
            moderate: 8
          }
        }
      }
    ]
  },
  {
    question_id: "allergies",
    question_text: "Do you or your family members have pet allergies?",
    options: [
      {
        text: "Yes, severe allergies",
        personality_weights: {
          energyLevel: 4,
          socialNeed: 5,
          careRequirements: 7,
          spaceNeeds: 4,
          childFriendly: 6,
          otherPetFriendly: 6,
          grooming: 8,
          noise: 4,
          intelligence: 7,
          independence: 7,
          climateAdaptation: {
            hot: 6,
            cold: 6,
            moderate: 7
          }
        }
      },
      {
        text: "Mild allergies",
        personality_weights: {
          energyLevel: 5,
          socialNeed: 6,
          careRequirements: 6,
          spaceNeeds: 5,
          childFriendly: 7,
          otherPetFriendly: 7,
          grooming: 7,
          noise: 5,
          intelligence: 7,
          independence: 6,
          climateAdaptation: {
            hot: 6,
            cold: 6,
            moderate: 7
          }
        }
      },
      {
        text: "No allergies",
        personality_weights: {
          energyLevel: 7,
          socialNeed: 8,
          careRequirements: 5,
          spaceNeeds: 6,
          childFriendly: 8,
          otherPetFriendly: 8,
          grooming: 5,
          noise: 6,
          intelligence: 7,
          independence: 5,
          climateAdaptation: {
            hot: 7,
            cold: 7,
            moderate: 8
          }
        }
      }
    ]
  }
];