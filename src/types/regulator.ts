import type { BrokerImage } from "./index";

export interface Regulator {
  id: string;
  name: string;
  shortName: string;
  description: string;
  country: string;
  region: string;
  established: number;
  maxLeverage: string;
  minDepositRequirement: number;
  website: string;
  trustScore: number;
  slug: string;
  status: string;
  logo?: BrokerImage;
}

export interface RegulatorResponse {
  docs: Regulator[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}