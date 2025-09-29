/**
 * Utility functions for working with regulator data
 */

/**
 * Extracts the domain from a URL
 * @param {string} url - The URL to extract the domain from
 * @returns {string} The domain
 */
export function extractDomain(url) {
  if (!url) return '';
  return url
    .replace(/^https?:\/\//i, '')
    .replace(/^www\\./i, '')
    .split('/')[0];
}

/**
 * Normalizes a regulator name for comparison
 * @param {string} name - The regulator name to normalize
 * @returns {string} The normalized name
 */
export function normalizeRegulatorName(name) {
  if (!name) return '';

  // Convert to lowercase
  let normalized = name.toLowerCase();

  // Remove common words
  normalized = normalized.replace(
    /\\b(financial|securities|investments|commission|authority|regulation|regulatory|agency|board)\\b/gi,
    ''
  );

  // Remove parentheses and their contents
  normalized = normalized.replace(/\\([^)]*\\)/g, '');

  // Remove special characters and extra spaces
  normalized = normalized
    .replace(/[^a-z0-9]/g, ' ')
    .replace(/\\s+/g, ' ')
    .trim();

  return normalized;
}

/**
 * Checks if two regulator names are similar
 * @param {string} name1 - First regulator name
 * @param {string} name2 - Second regulator name
 * @returns {boolean} True if the names are similar
 */
export function areRegulatorNamesSimilar(name1, name2) {
  const normalized1 = normalizeRegulatorName(name1);
  const normalized2 = normalizeRegulatorName(name2);

  // Check if one contains the other
  return normalized1.includes(normalized2) || normalized2.includes(normalized1);
}

/**
 * Gets the regulator short name from a full name
 * @param {string} fullName - The full regulator name
 * @returns {string} The short name (usually an acronym)
 */
export function getRegulatorShortName(fullName) {
  if (!fullName) return '';

  // Check if the name contains parentheses with an acronym
  const acronymMatch = fullName.match(/\\(([A-Z]+)\\)/);
  if (acronymMatch && acronymMatch[1]) {
    return acronymMatch[1];
  }

  // Otherwise, try to extract acronym from capital letters
  const capitals = fullName.match(/\\b[A-Z]/g);
  if (capitals && capitals.length > 1) {
    return capitals.join('');
  }

  // Fallback: return the first word
  return fullName.split(' ')[0];
}
