const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

// Validate all required environment variables are present
const requiredEnvVars = [
  'appwriteUrl',
  'appwriteProjectId',
  'appwriteDatabaseId',
  'appwriteCollectionId',
  'appwriteBucketId',
];

for (const key of requiredEnvVars) {
  if (!conf[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
}

export default conf;
