//import * as qs from 'qs-esm'
//   'https://localhost:3000/api/posts?select[color]=true&select[group][number]=true'
import { stringify } from 'qs-esm'
const PAYLOAD_API_URL = "https://api.kenyaforexfirm.com"

const select = {
  brokerName: true,
  quickVerdict: true,
  brokerRating: true,
  regulation: [
    {
      name: true,
      shortName: true,
    }
  ]
  // This query could be much more complex
  // and QS would handle it beautifully
}


export const getReviews = async () => {
  const stringifiedQuery = stringify(
    {
      select, // ensure that `qs` adds the `select` property, too!
    },
    { addQueryPrefix: true },
  )
  const response = await fetch(`${PAYLOAD_API_URL}/api/broker-reviews${stringifiedQuery}`)
  const reviews = await response.json()
  return reviews
}