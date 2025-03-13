import axios from 'axios';

const GOOGLE_FACT_CHECK_API = 'https://factchecktools.googleapis.com/v1alpha1/claims:search';
const API_KEY = 'AIzaSyB9fuq-VmoCipU_9MeMquqK3ukts1KH-fw';

export interface FactCheckResult {
  text: string;
  claimant?: string;
  claimDate?: string;
  claimReview: {
    publisher: {
      name: string;
      site?: string;
    };
    url: string;
    title: string;
    textualRating: string;
    languageCode: string;
  }[];
}

export interface FactCheckResponse {
  claims: FactCheckResult[];
}

export const searchFactChecks = async (query: string): Promise<FactCheckResponse> => {
  try {
    const response = await axios.get(GOOGLE_FACT_CHECK_API, {
      params: {
        key: API_KEY,
        query,
        languageCode: 'en'
      }
    });
    return response.data;
  } catch (error) {
    // Convert error to a plain object that can be cloned
    const errorMessage = error instanceof Error ? error.message : 'An error occurred while fetching fact checks';
    throw new Error(errorMessage);
  }
};