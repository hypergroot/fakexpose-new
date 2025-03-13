export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "What does 'FakeXpose' mean?",
    answer: "FakeXpose (pronounced /feɪkˈspəʊz/) is a portmanteau of 'fake' and 'expose,' reflecting our mission to uncover and expose misinformation. Our name represents our commitment to revealing the truth behind viral claims, misleading content, and false information that circulates online and in other media.",
    category: "About Us"
  },
  {
    id: 2,
    question: "What makes FakeXpose a reliable resource?",
    answer: "FakeXpose maintains reliability through rigorous fact-checking methodology, transparency in our sources, and a commitment to non-partisan analysis. Our team includes experienced journalists, researchers, and subject matter experts who follow a strict verification process. We provide detailed citations for all claims, explain our reasoning, and maintain transparency about our funding and organizational structure. Additionally, we regularly review and update our fact-checks when new information emerges.",
    category: "About Us"
  },
  {
    id: 3,
    question: "May I submit items for FakeXpose to fact-check?",
    answer: "Yes! We encourage our readers to submit claims for fact-checking. You can use the 'Submit a Claim' form on our website to send us viral content, suspicious claims, or statements you'd like us to investigate. While we can't check every submission due to volume, we review all requests and prioritize claims that are widely circulating, have significant public impact, or address important issues. Your submissions help us identify emerging misinformation trends.",
    category: "Submissions"
  },
  {
    id: 4,
    question: "What is FakeXpose's fact-checking process?",
    answer: "Our fact-checking process follows a rigorous methodology: First, we identify claims to check based on virality, impact, and reader submissions. Then, we research the claim by consulting primary sources, experts, and relevant data. We analyze the evidence, considering context and nuance. Our rating system categorizes claims as True, False, or Mixed based on the evidence. Before publishing, each fact-check undergoes editorial review for accuracy and fairness. Finally, we publish our findings with full transparency about our sources and reasoning.",
    category: "Methodology"
  },
  {
    id: 5,
    question: "How does FakeXpose choose what to fact-check?",
    answer: "We select claims to fact-check based on several factors: virality (how widely the claim is spreading), potential impact (whether the claim could influence public opinion or behavior), reader submissions, and diversity of topics. We prioritize claims that are gaining significant traction across multiple platforms, address matters of public importance, or could cause harm if left unchecked. We strive to cover a balanced range of topics and sources rather than focusing exclusively on any particular viewpoint or subject area.",
    category: "Methodology"
  },
  {
    id: 6,
    question: "How is FakeXpose funded?",
    answer: "FakeXpose maintains financial independence through a diverse funding model. Our revenue comes from a combination of foundation grants, individual donations from readers, and limited non-partisan sponsorships. We maintain strict editorial independence from all funding sources, and our fact-checking decisions are never influenced by financial considerations. We publish an annual transparency report detailing our funding sources and expenditures to ensure our readers can trust our independence.",
    category: "About Us"
  },
  {
    id: 7,
    question: "What do your fact-check ratings mean?",
    answer: "Our rating system includes three main categories: 'True' indicates claims that are accurate and supported by evidence; 'False' indicates claims that are inaccurate or misleading based on available evidence; and 'Mixed' indicates claims that contain elements of both truth and falsehood, require significant context, or where evidence is inconclusive. These ratings help readers quickly understand our assessment while encouraging them to read the full analysis for complete context.",
    category: "Methodology"
  },
  {
    id: 8,
    question: "How can I report an error in a fact-check?",
    answer: "We take accuracy seriously and welcome corrections. If you believe you've found an error in one of our fact-checks, please use the 'Report an Error' form on our website. Include specific details about the potential error and any evidence or sources that support your correction. Our editorial team will review your submission promptly. If we confirm an error, we'll update the article with a correction notice and explain the change. This feedback helps us maintain the highest standards of accuracy.",
    category: "Feedback"
  },
  {
    id: 9,
    question: "Does FakeXpose have a political bias?",
    answer: "FakeXpose is committed to non-partisan, evidence-based fact-checking. We apply the same rigorous standards to claims from all political perspectives and strive for fairness in our coverage. Our team includes people with diverse viewpoints, and we have internal processes to check for potential bias in our work. We focus on verifiable facts rather than opinions or values judgments. Our methodology, sources, and reasoning are transparent, allowing readers to evaluate our work independently regardless of their own political views.",
    category: "About Us"
  },
  {
    id: 10,
    question: "How can I use FakeXpose content in my classroom or publication?",
    answer: "We encourage educational use of our content! Teachers and professors are welcome to use our fact-checks in their classrooms with appropriate attribution. For media outlets or publications seeking to republish our content, please contact us through the 'Permissions' form on our website. We typically grant permission for non-commercial educational use at no cost, while commercial republication may require a licensing agreement. We also offer workshops and resources specifically designed for educators teaching media literacy.",
    category: "Usage"
  },
  {
    id: 11,
    question: "How quickly does FakeXpose publish fact-checks on breaking news?",
    answer: "We prioritize accuracy over speed. While we work to address viral claims quickly, especially those related to breaking news or emergencies, we never rush our verification process. Some fact-checks may take hours or days to complete as we consult multiple sources, reach out to experts, and thoroughly verify information. For rapidly evolving situations, we may publish preliminary assessments clearly labeled as such, then update them as more information becomes available. Our commitment to thoroughness means we won't sacrifice accuracy for speed.",
    category: "Methodology"
  },
  {
    id: 12,
    question: "Does FakeXpose fact-check opinions?",
    answer: "We focus on factual claims rather than opinions or value judgments. Statements like 'Tax cuts are good policy' or 'This artwork is beautiful' are subjective opinions that can't be objectively verified as true or false. However, we do fact-check factual claims that may be embedded within opinions, such as 'This tax cut will create 5 million jobs' or 'This is the most popular artwork in museum history.' We distinguish between the factual elements that can be verified and the subjective judgments that cannot.",
    category: "Methodology"
  }
];

export const getFaqsByCategory = (category: string): FAQ[] => {
  return faqs.filter(faq => faq.category === category);
};

export const getAllCategories = (): string[] => {
  const categories = new Set(faqs.map(faq => faq.category));
  return Array.from(categories);
};