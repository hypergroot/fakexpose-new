export interface TrendingArticle {
  id: number;
  title: string;
  content: string;
  rating: 'true' | 'false' | 'mixed';
  category: string;
  image: string;
  author: string;
  date: string;
  sources?: string[];
}

export const trendingArticles: TrendingArticle[] = [
  {
    id: 201,
    title: "Did Scientists Really Create a 'Time Machine'?",
    content: `A viral claim suggesting that scientists have created a working time machine has been circulating on social media. Our investigation reveals the truth behind these sensational headlines.

Key Points Investigated:
- Original research paper and methodology
- Expert interviews with quantum physicists
- Media coverage analysis
- Scientific consensus on time travel

Our Findings:
The research in question actually involves quantum computing experiments that manipulate quantum states in a way that simulates time reversal at a microscopic scale. This is fundamentally different from the popular concept of a "time machine" that could transport people or objects through time.

The scientists were studying quantum mechanics and information theory, not building a device for time travel. The research has important implications for quantum computing and our understanding of quantum mechanics, but it cannot be used for actual time travel.

Technical Details:
- The experiment involved quantum bits (qubits)
- Used quantum algorithms to reverse certain quantum states
- No macroscopic objects were involved
- Cannot be scaled up to affect regular objects or people

We rate this claim as False. While the underlying research is real and significant for quantum computing, it has been misrepresented as a "time machine" by sensationalist media coverage.`,
    rating: "false",
    category: "Science",
    image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&q=80",
    author: "Dr. James Chen",
    date: "March 15, 2024",
    sources: [
      "Nature Physics Journal",
      "Quantum Research Institute",
      "Scientific American"
    ]
  },
  {
    id: 202,
    title: "New Study Links Coffee to Increased Lifespan",
    content: `Recent social media posts have been sharing headlines about a new study that supposedly proves coffee drinking leads to significantly increased lifespan. Our investigation examines these claims and the underlying research.

Research Analysis:
- Reviewed original peer-reviewed study
- Consulted medical experts
- Examined methodology and sample size
- Analyzed statistical significance
- Compared with previous research

Key Findings:
The study did find some correlation between moderate coffee consumption and certain health benefits, but the claims about "increased lifespan" have been oversimplified and exaggerated.

Study Details:
- Observational study over 10 years
- 500,000 participants
- Controlled for various lifestyle factors
- Multiple coffee consumption levels studied

The research shows some health benefits associated with moderate coffee consumption (2-3 cups per day), but does not definitively prove direct causation for increased lifespan.

We rate this claim as Mixed. While there is evidence for some health benefits of moderate coffee consumption, the viral claims overstate and oversimplify the research findings.`,
    rating: "mixed",
    category: "Health",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80",
    author: "Dr. Sarah Thompson",
    date: "March 14, 2024",
    sources: [
      "Journal of Nutrition",
      "Coffee Research Institute",
      "WHO Health Reports"
    ]
  },
  {
    id: 203,
    title: "Viral Social Media Post About Climate Change",
    content: `A viral social media post claiming to show dramatic climate change effects has gained significant attention. Our fact-check examines the authenticity and context of these claims.

Investigation Methods:
- Image verification analysis
- Historical climate data review
- Expert climatologist consultation
- Location-specific research
- Timeline verification

The Evidence:
The images shared in the viral post are genuine and unaltered, showing the retreat of the Petermann Glacier in Greenland between 2000 and 2024. The photographs were taken by NASA's Earth Observatory program and accurately represent documented climate change effects.

Supporting Data:
- Satellite imagery confirmation
- Temperature records
- Ice mass measurements
- Sea level data
- Scientific publications

We rate this claim as True. The viral post accurately represents documented climate change effects, and all shared information is supported by scientific evidence.`,
    rating: "true",
    category: "Environment",
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&q=80",
    author: "Emma Wilson",
    date: "March 13, 2024",
    sources: [
      "NASA Earth Observatory",
      "Climate Science Journal",
      "NOAA Data"
    ]
  }
];

export const getTrendingArticleById = (id: number): TrendingArticle | undefined => {
  return trendingArticles.find(article => article.id === id);
};