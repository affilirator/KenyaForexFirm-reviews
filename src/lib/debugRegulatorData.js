/**
 * Debug utility to check regulator data
 */

// Function to fetch and log regulator data
export async function debugRegulatorData(slug) {
  try {
    const API_BASE_URL = 'https://api.kenyaforexfirm.com/api';
    const response = await fetch(`${API_BASE_URL}/globals/${slug}?depth=1`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.error(`Failed to fetch regulator data: ${response.statusText}`);
      return null;
    }

    const data = await response.json();
    
    // Log the entire data structure
    console.log('Full regulator data:', JSON.stringify(data, null, 2));
    
    // Specifically check contentSections
    console.log('Content Sections:', data.contentSections);
    console.log('Content Sections length:', data.contentSections ? data.contentSections.length : 0);
    
    return data;
  } catch (error) {
    console.error(`Error fetching regulator data for ${slug}:`, error);
    return null;
  }
}