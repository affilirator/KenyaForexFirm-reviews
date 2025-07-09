//import * as qs from 'qs-esm'
//   'https://localhost:3000/api/posts?select[color]=true&select[group][number]=true'
import { stringify } from 'qs-esm'

const PAYLOAD_API_URL = "https://api.kenyaforexfirm.com"

const populate = {
  tradingPlatforms: {
    name: true,
    slug: true
  },
  regulation: {
    name: true,
    shortName: true,
    }
};

const query = {
  status: {
    equals: 'published'
}
}

const select = {
  brokerName: true,
  quickVerdict: true,
  brokerRating: true,
  minDeposit: true,
  regulation: true,
  
 
  
  
  // This query could be much more complex
  // and QS would handle it beautifully
}


export const getReviews = async () => {
  const stringifiedQuery = stringify(
    {
      //populate,
      select,
      where: query,
      //depth:2,
      sort: '-brokerRating',
      //status: 'published',
    },
    { addQueryPrefix: true,
    // allowDots: true,
      

      //allowDots: true,
      //encodeValuesOnly: true,
      //arrayFormat: 'repeat', // encode: false,
     
     },
     
    
  )
  console.log("The stringified query is:", stringifiedQuery)
  const response = await fetch(`${PAYLOAD_API_URL}/api/broker-reviews${stringifiedQuery}`)
  const reviews = await response.json()
  return reviews
}