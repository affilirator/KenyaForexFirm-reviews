export interface TradingSession {
  id: string;
  name: string;
  slug: string;
  timezone: string;
  kenyaOpenTime: string;
  kenyaCloseTime: string;
  localOpenTime: string;
  localCloseTime: string;
  volatility: 'low' | 'medium' | 'high' | 'very-high';
  majorPairs?:
    | {
        pair: string;
        avgSpread: number;
        id?: string | null;
      }[]
    | null;
  characteristics?:
    | {
        characteristic: string;
        id?: string | null;
      }[]
    | null;
  bestFor?:
    | {
        strategy: string;
        id?: string | null;
      }[]
    | null;
  description: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  author: string;
  quiz?: string;
  image?: string;
  tips?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  order?: number | null;
  updatedAt: string;
  createdAt: string;
}
