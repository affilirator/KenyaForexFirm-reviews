export async function fetchSessions() {
  try {
    const response = await fetch(
      `${apiUrl}/api/trading-sessions?limit=100&sort=createdAt`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Network response was not ok: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();

    if (!data || typeof data !== 'object' || !Array.isArray(data.docs)) {
      throw new Error('Invalid data structure received');
    }

    return data.docs;
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching forex regulators:', error.message);
    } else {
      console.error('An unexpected error occurred:', error);
    }
    // Return an empty array as a fallback value in case of an error
    return [];
  }
}
