//import {Image} from 'astro:assets';
//import a from 'next/a';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import StarRating from './StarRating';
import type { BrokerProps } from '@/types';

interface BrokerCardProps {
  broker: BrokerProps;
}

export default function BrokerCard({ broker }: BrokerCardProps) {
  const logoUrl = (typeof broker.logo === 'object' && broker.logo.url) ? broker.logo.url : '/images/default-logo.png';
  
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-primary/10 transition-all duration-300">
      <CardHeader className="p-6">
        <div className="flex items-center gap-4">
            <img src={logoUrl} alt={`${broker.brokerName} Logo`} width={56} height={56} className="rounded-lg border p-1" />
            <div>
                <CardTitle className="font-headline text-2xl">
                    <a href={`/best-forex-brokers/${broker.slug}`} className="hover:text-primary transition-colors">
                        {broker.brokerName}
                    </a>
                </CardTitle>
                <div className="flex items-center gap-2 mt-1">
                    <StarRating rating={broker.brokerRating} />
                    <span className="text-sm font-bold text-muted-foreground">{broker.brokerRating.toFixed(1)}</span>
                </div>
            </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-0 flex-grow">
        <p className="text-sm text-muted-foreground mb-4">{broker.quickVerdict}</p>
        <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
                <Check className="h-4 w-4 mt-0.5 text-green-500 shrink-0"/>
                <p><span className="font-semibold">Best for:</span> {broker.bestFor}</p>
            </div>
            <div className="flex items-start gap-2">
                <Check className="h-4 w-4 mt-0.5 text-green-500 shrink-0"/>
                <p><span className="font-semibold">Min. Deposit:</span> ${broker.minDeposit}</p>
            </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex gap-2">
        <Button asChild className="flex-1">
          <a href={`https://kenyaforexfirm.com/goto/${broker.slug}/`} target="_blank" rel="noopener noreferrer nofollow">Visit Broker</a>
        </Button>
        <Button asChild variant="outline" className="flex-1">
          <a href={`/best-forex-brokers/${broker.slug}`}>
            Read Review
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}