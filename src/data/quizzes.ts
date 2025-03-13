export interface QuizQuestion {
  id: number;
  question: string;
  image: string;
  options: string[];
  correctAnswer: number; // Index of the correct answer in options array
  explanation: string;
}

export interface Quiz {
  id: number;
  title: string;
  description: string;
  date: string;
  questions: QuizQuestion[];
}

export interface LeaderboardEntry {
  position: number;
  username: string;
  score: number;
}

export const quizzes: Quiz[] = [
  {
    id: 1,
    title: "What's Fact and What's Fake?",
    description: "Test your ability to spot misinformation with our daily quiz!",
    date: "March 15, 2024",
    questions: [
      {
        id: 1,
        question: "True or False: Elon Musk and Jeffrey Epstein associate, Ghislaine Maxwell, were photographed together.",
        image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "This claim is false. The widely shared image purporting to show Elon Musk with Ghislaine Maxwell is a manipulated photo. The original image shows Musk with another person at a public event, and Maxwell's face was digitally added later."
      },
      {
        id: 2,
        question: "Which of these statements about 5G technology is true?",
        image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80",
        options: [
          "5G signals can spread viruses",
          "5G towers emit radiation that causes cancer",
          "5G frequencies fall within safe radiation limits according to scientific research",
          "5G was developed as a government surveillance tool"
        ],
        correctAnswer: 2,
        explanation: "5G frequencies fall within safe radiation limits according to scientific research. 5G technology uses radio waves that are non-ionizing, meaning they don't have enough energy to damage DNA directly. Multiple studies have found no evidence of health risks at the exposure levels from 5G networks."
      },
      {
        id: 3,
        question: "True or False: The moon landing was filmed in a Hollywood studio.",
        image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "This claim is false. There is overwhelming evidence that the Apollo moon landings were real, including independent verification from other countries, moon rocks brought back with properties that couldn't be replicated on Earth, and reflectors left on the moon's surface that are still used for scientific measurements today."
      },
      {
        id: 4,
        question: "Which of these climate change statements is supported by scientific evidence?",
        image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&q=80",
        options: [
          "Climate change is a natural cycle and not influenced by human activity",
          "Global temperatures have been decreasing over the past century",
          "The current rate of warming is primarily caused by human activities",
          "Scientists are evenly divided on whether climate change is real"
        ],
        correctAnswer: 2,
        explanation: "The current rate of warming is primarily caused by human activities. This is supported by overwhelming scientific evidence and consensus among climate scientists. Multiple independent lines of evidence show that human activities, particularly the burning of fossil fuels, are the dominant cause of the observed warming since the mid-20th century."
      },
      {
        id: 5,
        question: "True or False: Drinking alkaline water can cure cancer.",
        image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&q=80",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "This claim is false. There is no scientific evidence that alkaline water can cure cancer. The body maintains its pH levels within a very narrow range regardless of what you eat or drink, and cancer cells can grow in both acidic and alkaline environments. Major cancer research organizations do not recognize alkaline water as a cancer treatment."
      },
      {
        id: 6,
        question: "Which statement about vaccines is accurate?",
        image: "https://images.unsplash.com/photo-1605289982774-9a6fef564df8?auto=format&fit=crop&q=80",
        options: [
          "Vaccines cause autism",
          "Natural immunity is always better than vaccine-induced immunity",
          "Vaccines contain microchips for tracking people",
          "Vaccines undergo rigorous safety testing before approval"
        ],
        correctAnswer: 3,
        explanation: "Vaccines undergo rigorous safety testing before approval. Before a vaccine is approved for use, it goes through multiple phases of clinical trials involving thousands of participants to ensure it is both safe and effective. After approval, vaccines continue to be monitored for safety through various surveillance systems."
      },
      {
        id: 7,
        question: "True or False: Drinking bleach or disinfectants can protect against viruses.",
        image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "This claim is false and dangerous. Drinking bleach or disinfectants is extremely harmful and can cause severe internal damage, including burns to the digestive tract, vomiting, and even death. No health authority recommends consuming disinfectants for any medical purpose."
      },
      {
        id: 8,
        question: "Which statement about AI-generated content is correct?",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
        options: [
          "AI-generated content is always easily identifiable",
          "AI cannot create realistic images of people",
          "AI-generated content can be used to spread misinformation",
          "AI-generated text is always factually accurate"
        ],
        correctAnswer: 2,
        explanation: "AI-generated content can be used to spread misinformation. Advanced AI models can create highly convincing text, images, and videos that appear authentic but contain false information. This technology has made it easier to create and distribute misinformation at scale, presenting new challenges for fact-checkers and the public."
      },
      {
        id: 9,
        question: "True or False: Humans only use 10% of their brains.",
        image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "This claim is false. Neurological research has consistently shown that humans use their entire brain, though not all parts are active simultaneously. Different activities activate different regions, but brain scans show that even during simple tasks, much more than 10% of the brain is active. No area of the brain is completely inactive."
      },
      {
        id: 10,
        question: "Which statement about election security in the United States is accurate?",
        image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&q=80",
        options: [
          "Widespread voter fraud regularly changes election outcomes",
          "Voting machines are easily hacked remotely",
          "Mail-in ballots are inherently fraudulent",
          "Multiple security measures protect the integrity of elections"
        ],
        correctAnswer: 3,
        explanation: "Multiple security measures protect the integrity of elections. These include voter verification procedures, paper ballot backups, post-election audits, bipartisan poll watchers, chain-of-custody protocols, and testing of voting equipment. Studies and court cases have repeatedly found that significant voter fraud is extremely rare in U.S. elections."
      }
    ]
  }
];

export const leaderboard: LeaderboardEntry[] = [
  { position: 1, username: "FactChecker88", score: 88 },
  { position: 2, username: "RickyRick", score: 56 },
  { position: 3, username: "clhc", score: 44 },
  { position: 4, username: "Cathie", score: 40 },
  { position: 5, username: "tanjinaanis", score: 20 },
  { position: 6, username: "TruthSeeker", score: 18 },
  { position: 7, username: "NewsHound", score: 15 },
  { position: 8, username: "SkepticalSam", score: 12 },
  { position: 9, username: "LogicalThinker", score: 10 },
  { position: 10, username: "CriticalMind", score: 8 }
];

export const getQuizById = (id: number): Quiz | undefined => {
  return quizzes.find(quiz => quiz.id === id);
};

export const getCurrentQuiz = (): Quiz => {
  // In a real app, this would return the quiz for the current day
  return quizzes[0];
};