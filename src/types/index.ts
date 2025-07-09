interface Regulation {
  name: string;
  shortName: string;
  country: string;
}

export interface IndexBrokerProps {
  name: string;
  rating: number;
  features: string[];
  regulation: Regulation[];
  minDeposit: number;
  spread: string;
  logo: string;
}