import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // from .env.local
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,     // from .env.local
  apiVersion: '2023-01-01', // 👈 use a fixed version here
  token: process.env.SANITY_API_WRITE_TOKEN,           // from .env.local
  useCdn: true, // Optional: set to true for faster response times
});
export default sanityClient;