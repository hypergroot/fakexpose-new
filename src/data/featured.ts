export interface FeaturedArticle {
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
  featured: boolean;
}

export const featuredArticles: FeaturedArticle[] = [
  {
    id: 101,
    title: "Are Coca-Cola Products Being Pulled from Store Shelves?",
    excerpt: "Investigating viral claims about Coca-Cola products being removed from major retailers...",
    content: `A viral social media claim suggests that Coca-Cola products are being pulled from store shelves across multiple major retailers. Our comprehensive investigation reveals the truth behind these assertions.

Our investigation covered:
- Direct communication with major retailers
- Coca-Cola Company statements
- Market analysis reports
- Sales data from multiple regions
- Social media trend analysis

Key Findings:
- No major retailers have announced any plans to remove Coca-Cola products
- Regular inventory fluctuations have been misinterpreted as product removal
- Sales data shows consistent product availability
- The rumor appears to have originated from a satirical news article

The investigation reveals that this claim is False. Coca-Cola products continue to be widely available across retail locations, and no systematic removal has been implemented or planned.

Additional Context:
- Temporary stock shortages are normal and not indicative of product discontinuation
- Supply chain adjustments may affect temporary availability
- Local inventory variations are part of normal retail operations

This case demonstrates how normal business operations can be misinterpreted and spread as misinformation through social media.`,
    image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&q=80",
    rating: "false",
    author: "John Smith",
    date: "March 15, 2024",
    category: "Business",
    featured: true,
    sources: [
      "Coca-Cola Company Official Statements",
      "Retail Industry Reports",
      "Market Analysis Data"
    ]
  },
  {
    id: 102,
    title: "Did AI Generate Fake Celebrity Endorsements for New Cryptocurrency?",
    excerpt: "Examining claims of AI-generated deepfake videos promoting cryptocurrency investments...",
    content: `Recent social media posts have featured what appear to be videos of well-known celebrities endorsing a new cryptocurrency. Our investigation reveals these are sophisticated AI-generated deepfakes created to mislead potential investors.

Our Analysis:
- Technical examination of video authenticity
- Consultation with AI experts
- Verification with celebrity representatives
- Cryptocurrency market analysis
- Blockchain transaction tracking

Key Findings:
- Videos were created using advanced AI technology
- None of the celebrities had any involvement with the cryptocurrency
- Multiple fraud reports have been filed
- Associated wallet addresses linked to previous scams

The investigation confirms this is a sophisticated scam using AI technology to create convincing but fake celebrity endorsements. We rate this claim as True - the videos are indeed AI-generated fakes.

Prevention Tips:
- Verify celebrity endorsements through official channels
- Be skeptical of investment advice from social media
- Research cryptocurrency projects thoroughly
- Check for verified social media accounts

This case highlights the growing sophistication of AI-generated content and its potential for misuse in financial scams.`,
    image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&q=80",
    rating: "true",
    author: "Emma Wilson",
    date: "March 14, 2024",
    category: "Technology",
    featured: true,
    sources: [
      "AI Analysis Reports",
      "Cryptocurrency Fraud Database",
      "Celebrity Legal Teams"
    ]
  },
  {
    id: 103,
    title: "Ancient City Discovery Under Amazon: Separating Fact from Fiction",
    excerpt: "Analyzing viral claims about a newly discovered ancient civilization beneath the Amazon rainforest...",
    content: `Social media has been buzzing with claims about an enormous ancient city discovered beneath the Amazon rainforest, allegedly proving advanced civilizations existed there thousands of years ago. Our investigation examines the truth behind these viral claims.

Research Methodology:
- Consultation with leading archaeologists
- Analysis of satellite imagery
- Review of archaeological permits
- Examination of research papers
- Verification of excavation documentation

Findings:
- Recent archaeological discoveries are significant but exaggerated
- Evidence shows sophisticated pre-Columbian settlements
- No evidence of "advanced technology" claims
- Complex agricultural systems confirmed
- Extensive trade networks documented

The Reality:
While recent discoveries in the Amazon region are indeed significant and show evidence of sophisticated pre-Columbian settlements, many viral claims have been sensationalized. The actual findings demonstrate advanced agricultural and water management systems, but claims about "alien technology" or "advanced modern capabilities" are unfounded.

We rate this claim as Mixed. While important archaeological discoveries have been made, many viral claims about their nature and significance are exaggerated or false.`,
    image: "https://images.unsplash.com/photo-1590845947698-8924d7409b56?auto=format&fit=crop&q=80",
    rating: "mixed",
    author: "Dr. Maria Rodriguez",
    date: "March 13, 2024",
    category: "Science",
    featured: true,
    sources: [
      "Archaeological Journal Publications",
      "Amazon Research Institute",
      "University Field Reports"
    ]
  },
  {
    id: 104,
    title: "5G Networks and Health Concerns: A Scientific Analysis",
    excerpt: "Investigating claims about health risks associated with 5G technology...",
    content: `Recent social media posts have raised concerns about potential health risks associated with 5G network technology. Our investigation examines the scientific evidence behind these claims.

Research Overview:
- Review of peer-reviewed scientific studies
- Analysis of radiation safety standards
- Consultation with telecommunications experts
- Examination of public health data
- Assessment of international safety guidelines

Key Findings:
- 5G frequencies fall within safe radiation limits
- No evidence of harmful health effects at current exposure levels
- Safety standards include significant margins
- Many claims based on misunderstanding of technology

The investigation reveals that common fears about 5G health risks are not supported by scientific evidence. While continued research is important, current data indicates 5G technology operates within established safety parameters.`,
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80",
    rating: "false",
    author: "Dr. James Chen",
    date: "March 12, 2024",
    category: "Technology",
    featured: true,
    sources: [
      "WHO Reports",
      "Scientific Studies Database",
      "Telecommunications Standards"
    ]
  },
  {
    id: 105,
    title: "Global Food Shortage Predictions: Analyzing the Data",
    excerpt: "Examining viral claims about imminent worldwide food shortages...",
    content: `Social media has been flooded with predictions of imminent global food shortages. Our investigation analyzes the data behind these claims and separates fact from speculation.

Investigation Methods:
- Analysis of global food production data
- Review of agricultural forecasts
- Expert consultations
- Supply chain assessment
- Climate impact studies

Findings:
- Current food production meets global needs
- Local disruptions don't indicate global shortage
- Climate changes affect regional production
- Supply chain challenges exist but are manageable

While there are legitimate concerns about food security in specific regions, claims of imminent global shortages are exaggerated. Local challenges exist but global food production remains stable.`,
    image: "https://images.unsplash.com/photo-1589923158776-cb4485d99fd6?auto=format&fit=crop&q=80",
    rating: "mixed",
    author: "Sarah Thompson",
    date: "March 11, 2024",
    category: "Environment",
    featured: true,
    sources: [
      "UN Food and Agriculture Organization",
      "Global Food Security Index",
      "Climate Research Data"
    ]
  },
  {
    id: 106,
    title: "Digital Privacy Myths: Browser Incognito Mode",
    excerpt: "Investigating common misconceptions about private browsing modes...",
    content: `Many internet users believe that their browser's incognito or private mode provides complete anonymity online. Our investigation examines what these privacy features actually do and don't do.

Research Areas:
- Browser functionality analysis
- Data privacy expert interviews
- Technical documentation review
- User privacy studies
- Real-world testing

Key Facts:
- Incognito mode doesn't make you anonymous online
- Your ISP can still see your activity
- Websites can still track your visits
- Local browsing history isn't saved
- Downloads and bookmarks may still be saved

The investigation reveals that while private browsing modes offer some privacy benefits, they provide far less protection than many users believe. Understanding these limitations is crucial for online privacy.`,
    image: "https://images.unsplash.com/photo-1614064642639-e398cf05badb?auto=format&fit=crop&q=80",
    rating: "true",
    author: "Alex Rivera",
    date: "March 10, 2024",
    category: "Technology",
    featured: true,
    sources: [
      "Browser Security Documentation",
      "Privacy Research Papers",
      "Digital Rights Foundation"
    ]
  }
];

export const getFeaturedArticleById = (id: number): FeaturedArticle | undefined => {
  return featuredArticles.find(article => article.id === id);
};