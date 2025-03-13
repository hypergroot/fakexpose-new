export interface PoliticsArticle {
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

export const politicsArticles: PoliticsArticle[] = [
  {
    id: 401,
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
    id: 402,
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
    excerpt: "Examining claims that former President Trump called for terminating parts of the Constitution...",
    image: "https://images.unsplash.com/photo-1589262804704-c5aa9e6def89?auto=format&fit=crop&q=80",
    rating: "true",
    author: "Michael Roberts",
    date: "March 12, 2024",
    category: "Politics",
    sources: [
      "Social Media Archives",
      "Official Statements",
      "Media Reports"
    ]
  },
  {
    id: 403,
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
    excerpt: "Fact-checking claims about Mexican military deployments at the border during the current administration...",
    image: "https://images.unsplash.com/photo-1544375647-0f4b8e0de987?auto=format&fit=crop&q=80",
    rating: "true",
    author: "Elena Martinez",
    date: "March 14, 2024",
    category: "Politics",
    sources: [
      "U.S. State Department",
      "Mexican Government Records",
      "Border Security Reports"
    ]
  },
  {
    id: 404,
    title: "Viral claim about new federal tax on home sales is misleading",
    content: `A viral social media post claims that a new federal tax will take 30% of profits when homeowners sell their property. Our investigation examines the accuracy of this widely shared claim.

Research Methods:
- Tax code analysis
- Expert consultations
- Legislative history review
- Comparison with existing regulations
- Source verification

Key Findings:
The viral claim significantly misrepresents current tax laws. There is no new 30% federal tax on home sales. The post appears to confuse several different tax concepts:

1. Capital Gains Exemption: Most homeowners are exempt from capital gains taxes on the first $250,000 of profit ($500,000 for married couples) when selling a primary residence they've lived in for at least two of the past five years.

2. Existing Capital Gains Rates: For profits above the exemption threshold, standard capital gains rates apply (0%, 15%, or 20% depending on income), not 30%.

3. Net Investment Income Tax: A 3.8% tax applies to investment income (which can include some home sale profits) for high-income earners (above $200,000 for individuals or $250,000 for married couples).

The claim appears to have originated from a misinterpretation of existing tax laws, combined with confusion about proposed (but not enacted) tax changes from previous years.

We rate this claim as False. There is no new 30% federal tax on home sales, and most homeowners remain eligible for significant capital gains exemptions.`,
    excerpt: "Examining viral claims about a supposed new 30% federal tax on home sales...",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80",
    rating: "false",
    author: "David Thompson",
    date: "March 10, 2024",
    category: "Politics",
    sources: [
      "IRS Tax Code",
      "Congressional Budget Office",
      "Tax Policy Center"
    ]
  },
  {
    id: 405,
    title: "Did the President sign an executive order banning gas stoves?",
    content: `A viral claim suggests that the President signed an executive order banning gas stoves nationwide. Our investigation examines whether this claim is accurate.

Research Methodology:
- Review of all recent executive orders
- Analysis of regulatory announcements
- Consultation with energy policy experts
- Examination of media coverage
- Verification of government statements

Key Findings:
No executive order banning gas stoves has been signed. The claim appears to stem from a misinterpretation of comments made by a Consumer Product Safety Commission (CPSC) commissioner about potential health concerns related to gas stoves.

The Facts:
- No executive order exists banning gas stoves
- The CPSC clarified they are not seeking to ban gas stoves
- Some studies have raised health concerns about indoor air pollution from gas stoves
- Some localities have enacted building codes that favor electric appliances in new construction
- No federal ban has been implemented or signed into law

We rate this claim as False. While there have been discussions about the health impacts of gas stoves and some local regulations affecting new construction, no federal ban has been implemented through executive order or otherwise.`,
    excerpt: "Investigating claims about a supposed executive order banning gas stoves nationwide...",
    image: "https://images.unsplash.com/photo-1556911220-bda9f7f7597e?auto=format&fit=crop&q=80",
    rating: "false",
    author: "Jennifer Wilson",
    date: "March 8, 2024",
    category: "Politics",
    sources: [
      "White House Records",
      "CPSC Statements",
      "Federal Register"
    ]
  },
  {
    id: 406,
    title: "Examining claims about changes to Social Security benefits",
    content: `A widely shared social media post claims that major changes to Social Security benefits have been secretly approved. Our investigation examines the accuracy of these claims.

Research Methods:
- Social Security Administration records
- Congressional legislation tracking
- Expert interviews
- Public announcement verification
- Historical context analysis

Key Findings:
The viral claims about "secret" changes to Social Security benefits are misleading. While there have been routine annual adjustments, no major structural changes have been approved without public notice.

The Facts:
- The annual cost-of-living adjustment (COLA) was announced publicly, not secretly
- No legislation making major changes to Social Security has been passed recently
- The Social Security Trust Fund status remains unchanged from previous projections
- Routine administrative adjustments are made annually and are publicly documented
- Any significant changes to Social Security would require legislation and public announcement

The claim appears to conflate routine annual adjustments with major policy changes, creating a false impression of secretive government action.

We rate this claim as Mostly False. While routine adjustments to Social Security do occur annually, no major changes have been secretly approved as suggested in the viral posts.`,
    excerpt: "Fact-checking viral claims about supposed secret changes to Social Security benefits...",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80",
    rating: "mixed",
    author: "Robert Chen",
    date: "March 5, 2024",
    category: "Politics",
    sources: [
      "Social Security Administration",
      "Congressional Record",
      "Federal Register"
    ]
  }
];

export const getPoliticsArticleById = (id: number): PoliticsArticle | undefined => {
  return politicsArticles.find(article => article.id === id);
};