export interface MostSearchedArticle {
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

export const mostSearchedArticles: MostSearchedArticle[] = [
  {
    id: 301,
    title: "USDA inspector general didn't order 'mass extermination' of birds to drive up cost of poultry, eggs",
    content: `A viral social media claim suggests that the USDA inspector general ordered a mass extermination of poultry to artificially inflate food prices. Our investigation examines this serious allegation.

Investigation Methods:
- Review of USDA official documents
- Interviews with agricultural experts
- Analysis of poultry market data
- Fact-checking of viral claims
- Verification of price trends

Key Findings:
- No such order was ever issued by the USDA
- Normal agricultural practices were misrepresented
- Market prices are influenced by multiple factors
- Standard health and safety protocols were followed

The claim appears to have originated from a misinterpretation of routine agricultural health measures and standard industry practices. Our investigation found no evidence of artificial price manipulation or mass extermination orders.

Market Analysis:
- Price fluctuations follow normal market patterns
- Supply chain factors affect costs
- Disease prevention measures are standard
- No unusual culling events occurred

We rate this claim as False. The allegation of intentional market manipulation through bird extermination is completely unfounded.`,
    rating: "false",
    category: "Agriculture",
    image: "https://images.unsplash.com/photo-1569913486515-b74bf7751574?auto=format&fit=crop&q=80",
    author: "Michael Roberts",
    date: "March 15, 2024",
    sources: [
      "USDA Official Records",
      "Agricultural Market Reports",
      "Industry Expert Interviews"
    ]
  },
  {
    id: 302,
    title: "Mexico also sent troops to border during Biden administration",
    content: `Recent social media discussions have questioned whether Mexico deployed troops to its border during the Biden administration. Our fact-check examines the historical record and current situation.

Research Methodology:
- Official government records
- Diplomatic communications
- News media coverage
- Military deployment data
- Border security reports

Findings:
The Mexican government has indeed deployed military personnel to its borders during both the current and previous U.S. administrations. This is documented through:
- Official Mexican government statements
- U.S. State Department acknowledgments
- Independent media coverage
- Verified photographic evidence
- Border security statistics

Key Details:
- Multiple deployments occurred
- Bilateral security cooperation continued
- Operations were publicly documented
- Similar to previous administrations' arrangements

We rate this claim as True. Mexico has maintained border security operations, including troop deployments, during the Biden administration.`,
    rating: "true",
    category: "Politics",
    image: "https://images.unsplash.com/photo-1544375647-0f4b8e0de987?auto=format&fit=crop&q=80",
    author: "Elena Martinez",
    date: "March 14, 2024",
    sources: [
      "U.S. State Department",
      "Mexican Government Records",
      "Border Security Reports"
    ]
  },
  {
    id: 303,
    title: "25 Rumors We've Fact-Checked About Elon Musk",
    content: `Our comprehensive analysis examines 25 of the most viral claims about Elon Musk that have circulated on social media platforms. This investigation covers various allegations, statements, and rumors.

Research Process:
- Direct source verification
- Social media analysis
- Company statements
- Public records
- Media coverage review

Key Findings:
Of the 25 claims investigated:
- 8 were completely true
- 12 were false
- 5 were partially true with important context

Notable Claims:
- Business decisions and announcements
- Personal statements and tweets
- Company ownership and investments
- Technology claims and predictions
- Personal history and background

We rate this collection as Mixed, as the claims vary in accuracy and require individual evaluation.`,
    rating: "mixed",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&q=80",
    author: "David Chen",
    date: "March 13, 2024",
    sources: [
      "Company Records",
      "Public Statements",
      "SEC Filings"
    ]
  },
  {
    id: 304,
    title: "Did Trump Call for 'Termination' of Parts of Constitution?",
    content: `A viral social media post claims former President Trump called for the "termination" of parts of the Constitution. Our investigation examines the accuracy of this claim.

Investigation Methods:
- Original statement analysis
- Context examination
- Public record review
- Media coverage verification
- Official response analysis

Key Findings:
The claim is based on a real social media post made by former President Trump on his Truth Social platform. In the post, he specifically used the word "termination" in reference to constitutional processes.

Evidence:
- Original social media post
- Subsequent clarifications
- Public responses
- Media coverage
- Official statements

We rate this claim as True. The statement was made as claimed, though context and subsequent clarifications are important for full understanding.`,
    rating: "true",
    category: "Politics",
    image: "https://images.unsplash.com/photo-1589262804704-c5aa9e6def89?auto=format&fit=crop&q=80",
    author: "Sarah Johnson",
    date: "March 12, 2024",
    sources: [
      "Social Media Archives",
      "Official Statements",
      "Media Reports"
    ]
  },
  {
    id: 305,
    title: "Is ChatGPT Creating Fake Scientific Papers?",
    content: `Recent reports suggest that ChatGPT is being used to create and submit fake scientific papers to academic journals. Our investigation examines these claims and their implications.

Investigation Scope:
- Academic journal submissions
- AI detection methods
- Peer review processes
- Published retractions
- Expert consultations

Key Findings:
- Some papers were identified as AI-generated
- Detection methods are improving
- Journals are implementing new safeguards
- Both intentional and unintentional cases exist
- Impact on academic integrity varies

The situation is complex, with evidence of both confirmed cases and false positives in AI detection.

We rate this claim as Mixed. While there are confirmed cases of AI-generated papers, the scope and impact vary significantly.`,
    rating: "mixed",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
    author: "Dr. Rachel Wong",
    date: "March 11, 2024",
    sources: [
      "Academic Journals",
      "AI Research Papers",
      "Ethics Committee Reports"
    ]
  },
  {
    id: 306,
    title: "Does Video Show Real UFO Sighting?",
    content: `A viral video claiming to show a UFO sighting has gained significant attention on social media. Our analysis examines the authenticity of this footage.

Investigation Methods:
- Video forensics analysis
- Expert consultation
- Location verification
- Weather data correlation
- Historical context review

Technical Analysis:
- Digital artifact examination
- Lighting and shadow analysis
- Motion tracking studies
- Environmental consistency checks
- Comparison with known phenomena

Findings:
The video shows identifiable characteristics of digital manipulation:
- Inconsistent lighting effects
- Artificial motion patterns
- Digital artifacts
- Perspective inconsistencies

We rate this claim as False. The video shows clear signs of digital manipulation and does not represent a genuine unidentified aerial phenomenon.`,
    rating: "false",
    category: "Science",
    image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&q=80",
    author: "James Wilson",
    date: "March 10, 2024",
    sources: [
      "Video Analysis Lab",
      "Meteorological Data",
      "Aviation Records"
    ]
  }
];

export const getMostSearchedArticleById = (id: number): MostSearchedArticle | undefined => {
  return mostSearchedArticles.find(article => article.id === id);
};