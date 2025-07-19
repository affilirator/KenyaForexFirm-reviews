/**
 * Script to test the regulators API endpoint
 * 
 * Run with: node src/scripts/testRegulatorsApi.js
 */

async function testRegulatorsApi() {
  try {
    console.log('Fetching regulators from API...');
    const response = await fetch('https://api.kenyaforexfirm.com/api/regulators');
    
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }
    
    const data = await response.json();
    console.log(`Found ${data.docs?.length || 0} regulators`);
    
    // Log the first regulator as an example
    if (data.docs && data.docs.length > 0) {
      console.log('Example regulator:');
      console.log(JSON.stringify(data.docs[0], null, 2));
    }
    
    // Log all regulator slugs
    if (data.docs && data.docs.length > 0) {
      console.log('All regulator slugs:');
      data.docs.forEach(regulator => {
        console.log(`- ${regulator.slug} (${regulator.name})`);
      });
    }
  } catch (error) {
    console.error('Error testing regulators API:', error);
  }
}

// Run the test
testRegulatorsApi();