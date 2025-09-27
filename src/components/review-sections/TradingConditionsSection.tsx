import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Zap, BarChart3 } from 'lucide-react';
import RichText from '@/components/common/RichText';
import StarRating from '@/components/react/brokers/StarRating.astro';

interface TradingConditionsSectionProps {
  title: string;
  rating?: number;
  spreads: {
    eurusd?: string;
    gbpusd?: string;
    usdjpy?: string;
    spreadType?: string;
  };
  execution: {
    type?: string;
    slippage?: string;
    requotes?: boolean;
  };
  leverage: {
    max?: string;
    forex?: string;
    indices?: string;
    commodities?: string;
  };
  content: any;
}

const SectionHeader = ({ icon, title, rating }: { icon: React.ReactNode; title: string; rating?: number }) => (
  <div className="flex items-center justify-between mb-6">
    <div className="flex items-center gap-3">
      {icon}
      <h2 className="font-headline text-3xl font-bold">{title}</h2>
    </div>
    {rating && (
      <div className="flex items-center gap-2">
        <StarRating rating={rating} size="sm" />
        <span className="text-sm font-medium text-muted-foreground">({rating.toFixed(1)})</span>
      </div>
    )}
  </div>
);

export default function TradingConditionsSection({
  title,
  rating,
  spreads,
  execution, 
  leverage,
  content,
}: TradingConditionsSectionProps) {
  return (
    <section id="trading-conditions" className="mb-12">
      <SectionHeader 
        icon={<TrendingUp className="h-8 w-8 text-blue-600" />}
        title={title}
        rating={rating}
      />

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Spreads
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {spreads?.eurusd && (
              <div className="flex justify-between">
                <span>EUR/USD</span>
                <Badge variant="secondary">{spreads.eurusd}</Badge>
              </div>
            )}
            {spreads?.gbpusd && (
              <div className="flex justify-between">
                <span>GBP/USD</span>
                <Badge variant="secondary">{spreads.gbpusd}</Badge>
              </div>
            )}
            {spreads?.usdjpy && (
              <div className="flex justify-between">
                <span>USD/JPY</span>
                <Badge variant="secondary">{spreads.usdjpy}</Badge>
              </div>
            )}
            {spreads?.spreadType && (
              <div className="pt-2 border-t">
                <Badge variant="outline">{spreads.spreadType} Spreads</Badge>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Execution
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {execution?.type && (
              <div className="flex justify-between">
                <span>Type</span>
                <Badge>{execution.type}</Badge>
              </div>
            )}
            {execution?.slippage && (
              <div className="flex justify-between">
                <span>Slippage</span>
                <span className="text-sm">{execution.slippage}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>Requotes</span>
              <Badge variant={execution?.requotes ? "destructive" : "default"}>
                {execution?.requotes ? "Yes" : "No"}
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Leverage</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {leverage?.max && (
              <div className="flex justify-between">
                <span>Maximum</span>
                <Badge variant="secondary">{leverage.max}</Badge>
              </div>
            )}
            {leverage?.forex && (
              <div className="flex justify-between">
                <span>Forex</span>
                <span className="text-sm">{leverage.forex}</span>
              </div>
            )}
            {leverage?.indices && (
              <div className="flex justify-between">
                <span>Indices</span>
                <span className="text-sm">{leverage.indices}</span>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <RichText content={content} />
    </section>
  );
}