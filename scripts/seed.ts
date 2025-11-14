import { MeiliSearch } from 'meilisearch';
import sampleListings from '../src/data/sample-listings.js';

// Creating client directly for seed script, not using @/lib/meili.ts, because 'server-only'
// constraint throws an error when used outside of a Next.js Server Component context.
const meiliClient = new MeiliSearch({
  host: process.env.MEILI_HOST || 'http://localhost:7700',
  apiKey: process.env.MEILI_API_KEY,
});

/**
 * Seeds the Meilisearch database with sample Airbnb listings.
 *
 * This function performs the following steps:
 * 1. Connects to the Meilisearch instance
 * 2. Configures the 'listings' index with searchable, filterable, and sortable attributes
 * 3. Uploads sample listing documents to the index
 *
 * @async
 * @returns {Promise<void>} A promise that resolves when seeding is complete
 * @throws {Error} If connection to Meilisearch fails or seeding encounters an error.
 *                 The process will exit with code 1 on failure.
 */
async function seed(): Promise<void> {
  try {
    console.log('🔌 Connecting to Meilisearch...');

    const index = meiliClient.index('listings');

    console.log('⚙️  Configuring index settings...');

    const settingsTask = await index.updateSettings({
      searchableAttributes: ['title', 'description', 'amenities'],
      filterableAttributes: ['price', 'rating', 'amenities'],
      sortableAttributes: ['price', 'rating', '_geoDistance'],
    });

    await meiliClient.tasks.waitForTask(settingsTask.taskUid);
    console.log('✅ Index settings configured successfully');

    console.log(`📤 Uploading ${sampleListings.length} listings...`);

    const documentsTask = await index.addDocuments(sampleListings);
    await meiliClient.tasks.waitForTask(documentsTask.taskUid);

    console.log(`✅ Successfully seeded ${sampleListings.length} listings to Meilisearch!`);
    console.log('🎉 Seeding completed successfully!');

  } catch (error) {
    console.error('❌ Error seeding Meilisearch:');
    if (error instanceof Error) {
      console.error(`   ${error.message}`);
    } else {
      console.error(error);
    }
    process.exit(1);
  }
}

seed();

