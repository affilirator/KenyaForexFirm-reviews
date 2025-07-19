/**
 * Utility functions for fetching author data from the API
 */

/**
 * Fetches an author by their slug
 * @param slug - The author's slug
 * @returns The author data or null if not found
 */
export async function getAuthorBySlug(slug: string) {
  try {
    const response = await fetch(`https://api.kenyaforexfirm.com/api/authors?where[slug][equals]=${slug}&limit=1`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch author: ${response.status}`);
    }
    
    const data = await response.json();
    return data.docs && data.docs.length > 0 ? data.docs[0] : null;
  } catch (error) {
    console.error(`Error fetching author with slug ${slug}:`, error);
    return null;
  }
}