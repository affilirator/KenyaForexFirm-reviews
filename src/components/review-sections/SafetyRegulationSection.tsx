import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, CheckCircle, XCircle } from 'lucide-react';
import RichText from '@/components/common/RichText';
import StarRating from '@/components/react/brokers/StarRating.astro';

interface SafetyRegulationSectionProps {
  title: string;
  rating?: number;
  regulators: Array<{
    name: string;
    license?: string;
    jurisdiction?: string;
  }>;
  clientProtection: {
    segregatedAccounts?: boolean;
    depositInsurance?: string;
    negativeBalanceProtection?: boolean;
  };
  content: any;
}

const SectionHeader = ({
  icon,
  title,
  rating,
}: {
  icon: React.ReactNode;
  title: string;
  rating?: number;
}) => (
  <div className="flex items-center justify-between mb-6">
    <div className="flex items-center gap-3">
      {icon}
      <h2 className="font-headline text-3xl font-bold">{title}</h2>
    </div>
    {rating && (
      <div className="flex items-center gap-2">
        <StarRating
          rating={rating}
          size="sm"
        />
        <span className="text-sm font-medium text-muted-foreground">
          ({rating.toFixed(1)})
        </span>
      </div>
    )}
  </div>
);

export default function SafetyRegulationSection({
  title,
  rating,
  regulators,
  clientProtection,
  content,
}: SafetyRegulationSectionProps) {
  return (
    <section
      id="safety-regulation"
      className="mb-12"
    >
      <SectionHeader
        icon={<ShieldCheck className="h-8 w-8 text-green-600" />}
        title={title}
        rating={rating}
      />

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5" />
              Regulatory Authorities
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {regulators?.map((regulator, index) => (
              <div
                key={index}
                className="p-3 bg-muted/50 rounded-lg"
              >
                <div className="font-semibold">{regulator.name}</div>
                {regulator.license && (
                  <div className="text-sm text-muted-foreground">
                    License: {regulator.license}
                  </div>
                )}
                {regulator.jurisdiction && (
                  <Badge
                    variant="outline"
                    className="mt-1"
                  >
                    {regulator.jurisdiction}
                  </Badge>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Client Protection</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span>Segregated Accounts</span>
              {clientProtection?.segregatedAccounts ? (
                <CheckCircle className="h-5 w-5 text-green-600" />
              ) : (
                <XCircle className="h-5 w-5 text-red-600" />
              )}
            </div>
            <div className="flex items-center justify-between">
              <span>Negative Balance Protection</span>
              {clientProtection?.negativeBalanceProtection ? (
                <CheckCircle className="h-5 w-5 text-green-600" />
              ) : (
                <XCircle className="h-5 w-5 text-red-600" />
              )}
            </div>
            {clientProtection?.depositInsurance && (
              <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                <div className="text-sm font-medium">Deposit Insurance</div>
                <div className="text-sm text-muted-foreground">
                  {clientProtection.depositInsurance}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <RichText content={content} />
    </section>
  );
}
