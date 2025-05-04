import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // from .env.local
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,     // from .env.local
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION, // from .env.local
  token: process.env.SANITY_API_WRITE_TOKEN,           // from .env.local
  useCdn: true, // Optional: set to true for faster response times
});
export default sanityClient;