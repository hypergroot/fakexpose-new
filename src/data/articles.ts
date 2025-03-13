export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  rating: 'true' | 'false' | 'mixed';
  author: string;
  date: string;
  category: string;
  sources?: string[];
}

export const articles: Article[] = [
  {
    id: 1,
    title: "Elon Musk the leader of Mars? Rumor suggests old science fiction novel may have predicted it",
    excerpt: "A viral social media post claims a 1952 science fiction novel predicted Elon Musk's involvement with Mars colonization...",
    content: `A viral social media post has been circulating claiming that a 1952 science fiction novel titled "The Mars Project" predicted Elon Musk's involvement with Mars colonization. The post suggests that the novel mentioned a leader named "Elon" who would guide humanity to Mars.

Our investigation reveals that while there is indeed a book called "The Mars Project" from 1952, written by Wernher von Braun, it was actually a technical paper outlining potential plans for a Mars expedition, not a work of fiction. The book does not contain any mention of a character named "Elon" or predictions about future Mars leaders.

The confusion appears to stem from a misinterpretation of von Braun's work combined with the coincidental similarity to Elon Musk's current Mars ambitions through SpaceX. While Musk is indeed working on Mars colonization plans, there is no evidence of any historical prediction specifically naming him as a future Mars leader.

Key Findings:
- The 1952 "Mars Project" was a technical paper, not a science fiction novel
- No mention of an "Elon" character exists in the original text
- The viral claim appears to be a modern fabrication
- The similarity to current events is coincidental

Sources have been verified through original copies of von Braun's work and contemporary scientific literature from the 1950s.`,
    image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80",
    rating: "mixed",
    author: "Joey Esposito",
    date: "March 15, 2024",
    category: "Technology",
    sources: [
      "Original 1952 publication of 'The Mars Project'",
      "SpaceX official announcements",
      "NASA historical archives"
    ]
  },
  {
    id: 2,
    title: "No evidence Elizabeth Warren said Americans had no right to see how tax money is spent",
    excerpt: "Social media users are sharing an alleged quote from Senator Elizabeth Warren about tax transparency...",
    content: `A viral social media post attributes a controversial quote about tax transparency to Senator Elizabeth Warren. The alleged statement claims that she said American citizens "have no right to know" how their tax dollars are spent.

Our investigation found no evidence that Senator Warren ever made such a statement. We reviewed:
- Official congressional records
- Public speeches and appearances
- Media interviews
- Social media posts
- Campaign materials

In fact, Senator Warren has consistently advocated for greater transparency in government spending and has supported various measures to increase public access to information about federal expenditures.

The misattributed quote appears to have originated from a satirical social media account, which was later shared as genuine by various users. This demonstrates how easily misinformation can spread when context is removed and content is shared without verification.

Key Findings:
- No record of Senator Warren making the claimed statement
- The quote contradicts her documented positions on government transparency
- The claim originated from a satirical source
- The misattribution spread through social media without proper context`,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80",
    rating: "false",
    author: "Sarah Johnson",
    date: "March 14, 2024",
    category: "Politics",
    sources: [
      "Congressional Record",
      "Official press releases",
      "Public statements database"
    ]
  },
  {
    id: 3,
    title: "Was the Moon Landing Actually Filmed in a Studio?",
    excerpt: "Examining the persistent conspiracy theory about NASA's historic Apollo 11 mission...",
    content: `The moon landing conspiracy theory has persisted for decades, suggesting that the 1969 Apollo 11 mission was filmed in a studio rather than actually landing on the moon. We've conducted a thorough analysis of the evidence and claims.

Our investigation examined:
- Original NASA footage and photographs
- Technical documentation from the mission
- Independent verification from other space agencies
- Physical evidence including moon rocks
- Testimonies from astronauts and NASA personnel
- Modern scientific analysis of the mission data

The evidence overwhelmingly supports the reality of the moon landing:
- Multiple independent tracking stations worldwide monitored the mission
- Reflectors left on the moon's surface are still used for scientific measurements today
- Moon rocks brought back have properties that could not have been replicated on Earth
- The technology and physics displayed in the footage are consistent with a lunar environment
- Thousands of people were involved in the mission, making a cover-up practically impossible

We rate this claim as False. The moon landing was real, and the conspiracy theories surrounding it have been thoroughly debunked by scientific evidence and historical documentation.`,
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80",
    rating: "false",
    author: "Michael Chen",
    date: "March 14, 2024",
    category: "Science",
    sources: [
      "NASA Archives",
      "Scientific American",
      "Smithsonian Institution"
    ]
  },
  {
    id: 4,
    title: "Did AI Generate Fake Celebrity Endorsements for Cryptocurrency?",
    excerpt: "Investigation into AI-generated deepfake videos of celebrities promoting cryptocurrency investments...",
    content: `Recent social media posts have featured what appear to be videos of well-known celebrities endorsing various cryptocurrency investments. Our investigation reveals these videos are AI-generated deepfakes created to mislead potential investors.

The investigation focused on:
- Video analysis using forensic tools
- Verification with celebrity representatives
- Tracking of associated cryptocurrency wallets
- Social media spread patterns

Key findings:
- Advanced AI technology was used to create highly realistic fake videos
- None of the featured celebrities had any involvement with the promoted cryptocurrencies
- Multiple scam reports have been filed with authorities
- The associated cryptocurrency addresses have been flagged for fraudulent activity

This case highlights the growing sophistication of AI-generated content and its potential for misuse in financial scams.`,
    image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&q=80",
    rating: "true",
    author: "Rachel Martinez",
    date: "March 13, 2024",
    category: "Technology",
    sources: [
      "FBI Cyber Division",
      "Cryptocurrency fraud reports",
      "Celebrity legal teams"
    ]
  },
  {
    id: 5,
    title: "Ancient City Discovery: Separating Fact from Fiction",
    excerpt: "Viral claims about a newly discovered ancient city beneath the Amazon rainforest...",
    content: `Social media has been buzzing with claims about an enormous ancient city discovered beneath the Amazon rainforest, allegedly proving advanced civilizations existed there thousands of years ago. Our investigation examines these claims.

The investigation involved:
- Consultation with leading archaeologists
- Review of satellite imagery
- Analysis of original research papers
- Verification of archaeological permits and documentation

While recent archaeological discoveries in the Amazon region are significant, many viral claims have been exaggerated or misrepresented. The actual findings show:
- Evidence of sophisticated pre-Columbian settlements
- Complex agricultural systems
- Advanced water management
- Extensive trade networks

However, claims about "advanced technology" and "alien involvement" are completely unfounded.

This case demonstrates how legitimate archaeological discoveries can be sensationalized and misrepresented on social media.`,
    image: "https://images.unsplash.com/photo-1590845947698-8924d7409b56?auto=format&fit=crop&q=80",
    rating: "mixed",
    author: "David Thompson",
    date: "March 12, 2024",
    category: "Science",
    sources: [
      "Journal of Archaeological Science",
      "Amazon Research Institute",
      "University of São Paulo"
    ]
  },
  {
    id: 6,
    title: "Global Weather Manipulation Conspiracy Debunked",
    excerpt: "Examining viral claims about weather control technology and climate engineering...",
    content: `A series of viral posts claim that recent extreme weather events are the result of secret government weather control technology. Our comprehensive investigation examines these claims and the scientific evidence.

Our analysis included:
- Review of meteorological data
- Consultation with climate scientists
- Examination of weather patterns
- Analysis of cited "evidence"

The investigation reveals:
- Natural causes explain observed weather patterns
- Claimed "weather control technology" doesn't exist
- Misinterpreted weather radar images
- Confusion about cloud seeding vs. weather control

While cloud seeding technology exists for limited rainfall enhancement, claims about large-scale weather control are false. The observed extreme weather events are consistent with climate change predictions.`,
    image: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?auto=format&fit=crop&q=80",
    rating: "false",
    author: "Emily Wilson",
    date: "March 11, 2024",
    category: "Environment",
    sources: [
      "World Meteorological Organization",
      "Climate Science Alliance",
      "National Weather Service"
    ]
  },
  {
    id: 7,
    title: "AI Art Copyright Claims: Understanding the Truth",
    excerpt: "Investigating viral claims about AI-generated art and copyright law...",
    content: `Recent social media discussions have sparked controversy about AI-generated art and copyright claims. Our investigation examines the legal status of AI art and common misconceptions.

The investigation covered:
- Current copyright laws
- Recent court decisions
- Expert legal opinions
- Artist community responses

Key findings:
- AI-generated art's copyright status is still evolving
- No blanket protection exists for AI-generated works
- Human input remains a crucial factor
- Many viral claims misinterpret existing laws

This investigation helps clarify the complex intersection of AI technology and copyright law, while addressing common misconceptions spreading online.`,
    image: "https://images.unsplash.com/photo-1633265486501-46e9a68c5401?auto=format&fit=crop&q=80",
    rating: "mixed",
    author: "Alex Rivera",
    date: "March 10, 2024",
    category: "Technology",
    sources: [
      "Copyright Office",
      "Legal precedent database",
      "AI Ethics Board"
    ]
  },
  {
    id: 8,
    title: "Space Tourism Safety Records: Fact vs Fiction",
    excerpt: "Analyzing claims about the safety of commercial space travel...",
    content: `With the rise of commercial space tourism, various claims about safety records and risks have emerged. Our investigation examines the actual safety data and common misconceptions.

The investigation analyzed:
- Official safety records
- Technical specifications
- Industry standards
- Expert testimonies

Key findings:
- Safety protocols exceed aviation standards
- Risk factors are well-documented
- Some viral claims exaggerate dangers
- Others underestimate real risks

This investigation provides a balanced view of space tourism safety, addressing both overblown fears and unrealistic optimism.`,
    image: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&q=80",
    rating: "mixed",
    author: "Chris Anderson",
    date: "March 9, 2024",
    category: "Science",
    sources: [
      "Space Safety Board",
      "Commercial Space Federation",
      "Aerospace Medical Association"
    ]
  }
];

export const getArticleById = (id: number): Article | undefined => {
  return articles.find(article => article.id === id);
};