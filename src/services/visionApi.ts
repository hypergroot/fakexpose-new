import axios from 'axios';

const VISION_API_KEY = 'AIzaSyA49goneCuvS5sslC7k44RNmjvGhk68HnI';
const VISION_API_URL = `https://vision.googleapis.com/v1/images:annotate?key=${VISION_API_KEY}`;

export interface VisionAnalysisResult {
  isManipulated: boolean;
  confidence: number;
  webMatches: {
    url: string;
    score: number;
    title?: string;
  }[];
  manipulationDetails?: string;
}

export const analyzeImage = async (imageUrl: string): Promise<VisionAnalysisResult> => {
  try {
    const response = await axios.post(VISION_API_URL, {
      requests: [
        {
          image: {
            source: {
              imageUri: imageUrl
            }
          },
          features: [
            {
              type: 'WEB_DETECTION',
              maxResults: 10
            },
            {
              type: 'IMAGE_PROPERTIES',
              maxResults: 10
            }
          ]
        }
      ]
    });

    const webDetection = response.data.responses[0].webDetection;
    const imageProperties = response.data.responses[0].imageProperties;

    // Analyze web matches
    const webMatches = webDetection.visuallySimilarImages?.map((match: any) => ({
      url: match.url,
      score: match.score,
      title: match.title
    })) || [];

    // Determine if image might be manipulated based on various signals
    const hasUnusualPatterns = imageProperties?.dominantColors?.colors?.some(
      (color: any) => color.score > 0.9
    );
    const hasManyMatches = webMatches.length > 5;
    const hasHighSimilarity = webMatches.some(match => match.score > 0.9);

    return {
      isManipulated: hasUnusualPatterns || (hasManyMatches && hasHighSimilarity),
      confidence: hasHighSimilarity ? 0.9 : 0.5,
      webMatches,
      manipulationDetails: hasUnusualPatterns 
        ? 'Image shows patterns consistent with digital manipulation'
        : hasManyMatches 
          ? 'Multiple similar images found online'
          : 'No clear signs of manipulation detected'
    };
  } catch (error) {
    throw new Error('Failed to analyze image');
  }
};