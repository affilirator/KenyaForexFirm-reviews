import { getAuthors } from './api-service';
import type { Author } from '../types/author';

// Cache for authors to avoid repeated API calls
let authorsCache: Author[] | null = null;

/**
 * Get all authors with caching
 */
export async function getAllAuthors(): Promise<Author[]> {
  if (authorsCache) {
    return authorsCache;
  }

  try {
    const authorsData = await getAuthors();
    authorsCache = authorsData?.docs || [];
    return authorsCache;
  } catch (error) {
    console.error('Failed to fetch authors:', error);
    return [];
  }
}

/**
 * Get default author (first author in the list)
 */
export async function getDefaultAuthor(): Promise<Author | undefined> {
  const authors = await getAllAuthors();
  return authors.length > 0 ? authors[0] : undefined;
}

/**
 * Get author by slug
 */
export async function getAuthorBySlugCached(
  slug: string
): Promise<Author | null> {
  const authors = await getAllAuthors();
  return authors.find((author) => author.slug === slug) || null;
}

/**
 * Get author by ID
 */
export async function getAuthorByIdCached(id: string): Promise<Author | null> {
  const authors = await getAllAuthors();
  return authors.find((author) => author.id === id) || null;
}
