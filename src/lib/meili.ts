// This directive guarantees that the file is only imported in server-side code,
// preventing the MEILI_API_KEY from being exposed to the browser.
import 'server-only';
import { MeiliSearch } from "meilisearch";

/**
 * Meilisearch Client
 *
 * ⚠️ **SERVER-SIDE ONLY** ⚠️
 *
 * This file exports a configured Meilisearch client that should ONLY be imported
 * in server-side code. Use it in:
 * - Server Components (default in Next.js App Router)
 * - Route Handlers (files in app/api directories)
 * - Server Actions (functions with 'use server' directive)
 *
 * **NEVER import this file in Client Components** (components with 'use client')
 * as it will expose the MEILI_API_KEY to the browser, which is a security risk.
 *
 * Environment Variables:
 * - MEILI_HOST: The URL of your Meilisearch instance (e.g., http://localhost:7700)
 * - MEILI_API_KEY: The master API key for your Meilisearch instance
 *
 * These environment variables are only available server-side in Next.js by default.
 * They will not be exposed to the browser unless explicitly prefixed with NEXT_PUBLIC_.
 *
 * @example
 * // ✅ CORRECT: In a Server Component
 * import { meiliClient } from '@/lib/meili';
 *
 * async function SearchResults() {
 *   const index = meiliClient.index('listings');
 *   const results = await index.search('query');
 *   return <div>...</div>;
 * }
 *
 * @example
 * // ✅ CORRECT: In a Route Handler
 * import { meiliClient } from '@/lib/meili';
 *
 * export async function GET(request: Request) {
 *   const index = meiliClient.index('listings');
 *   const results = await index.search('query');
 *   return Response.json(results);
 * }
 *
 * @example
 * // ❌ WRONG: In a Client Component
 * 'use client';
 * import { meiliClient } from '@/lib/meili'; // This will expose MEILI_API_KEY!
 */
export const meiliClient = new MeiliSearch({
  host: process.env.MEILI_HOST || "http://localhost:7700",
  apiKey: process.env.MEILI_API_KEY,
});

