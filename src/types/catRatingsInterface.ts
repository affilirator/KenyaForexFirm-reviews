// Data from PayloadCMS available in the broker-reviews collection
export interface CatRatings {
  researchEducation:   { catScore: number }
  customerService:     { catScore: number }
  userReviewsTrust:    { catScore: number }
  safetyAndRegulation: { catScore: number }
  feesAndCommissions:  { catScore: number }
  marketAccess:        { catScore: number }
  mobileTrading:       { catScore: number }
  tradingPlatforms:    { catScore: number }
  overallExperience:   { catScore: number }
}

/*
Example data from PayloadCMS
{
  "docs": [
  "acceptsMpesa": true,
      "cmaRegulated": false,
      "copytrading": false,
      "islamicAccount": true,
      "bonusAvailable": true,
      "maxLeverage": "1:2000",
      "brokerRating": 6.6,
"catRatings": {

"researchEducation": {
"catScore": 6
},

"customerService": {
"catScore": 7
},

"userReviewsTrust": {
"catScore": 6
},

"safetyAndRegulation": {
"catScore": 6
},

"feesAndCommissions": {
"catScore": 7
},

"marketAccess": {
"catScore": 7
},

"mobileTrading": {
"catScore": 7
},

"tradingPlatforms": {
"catScore": 7
},

"overallExperience": {
"catScore": 6
}
},
]
}
*/

export type CatRatingsType = {
  [category: string]: {
    catScore: number;
  };
};