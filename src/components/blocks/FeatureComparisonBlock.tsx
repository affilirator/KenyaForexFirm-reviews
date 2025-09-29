import React from 'react';
//import img from 'next/img'
import { Check, X, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';

interface ComparisonItem {
  name: string;
  logo?: { url: string; alt?: string };
  featured?: boolean;
  badge?: string;
  ctaButton: {
    text: string;
    url: string;
    openInNewTab?: boolean;
  };
}

interface Feature {
  feature: string;
  description?: string;
  values: Array<{
    value: string;
    type: 'text' | 'boolean' | 'rating' | 'highlight';
    highlight?: boolean;
  }>;
}

interface FeatureComparisonBlockProps {
  title: string;
  description?: string;
  comparisonItems: ComparisonItem[];
  features: Feature[];
  layout?: 'table' | 'cards' | 'compact';
  showOnMobile?: boolean;
}

const ValueRenderer: React.FC<{
  value: string;
  type: 'text' | 'boolean' | 'rating' | 'highlight';
  highlight?: boolean;
}> = ({ value, type, highlight }) => {
  switch (type) {
    case 'boolean':
      const isTrue =
        value.toLowerCase() === 'true' || value === '✓' || value === 'yes';
      return isTrue ? (
        <Check className="h-5 w-5 text-green-500 mx-auto" />
      ) : (
        <X className="h-5 w-5 text-red-500 mx-auto" />
      );

    case 'rating':
      const rating = parseFloat(value);
      return (
        <div className="flex items-center justify-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={cn(
                'h-4 w-4',
                star <= rating
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300'
              )}
            />
          ))}
        </div>
      );

    case 'highlight':
      return (
        <Badge
          variant="secondary"
          className="bg-primary/10 text-primary"
        >
          {value}
        </Badge>
      );

    default:
      return (
        <span className={cn(highlight && 'font-semibold text-primary')}>
          {value}
        </span>
      );
  }
};

export const FeatureComparisonBlock: React.FC<FeatureComparisonBlockProps> = ({
  title,
  description,
  comparisonItems,
  features,
  layout = 'table',
  showOnMobile = true,
}) => {
  if (layout === 'table') {
    return (
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            {description && (
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>

          <div
            className={cn(
              'overflow-x-auto',
              !showOnMobile && 'hidden md:block'
            )}
          >
            <Table className="min-w-full">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Features</TableHead>
                  {comparisonItems.map((item, index) => (
                    <TableHead
                      key={index}
                      className="text-center min-w-[150px]"
                    >
                      <div className="space-y-2">
                        {item.logo && (
                          <div className="flex justify-center">
                            <img
                              src={item.logo.url}
                              alt={item.logo.alt || item.name}
                              width={40}
                              height={40}
                              className="object-contain"
                            />
                          </div>
                        )}
                        <div className="font-semibold">{item.name}</div>
                        {item.badge && (
                          <Badge
                            variant={item.featured ? 'default' : 'secondary'}
                          >
                            {item.badge}
                          </Badge>
                        )}
                      </div>
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {features.map((feature, featureIndex) => (
                  <TableRow key={featureIndex}>
                    <TableCell className="font-medium">
                      <div>
                        <div>{feature.feature}</div>
                        {feature.description && (
                          <div className="text-sm text-muted-foreground mt-1">
                            {feature.description}
                          </div>
                        )}
                      </div>
                    </TableCell>
                    {feature.values.map((value, valueIndex) => (
                      <TableCell
                        key={valueIndex}
                        className="text-center"
                      >
                        <ValueRenderer {...value} />
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell className="font-medium">Action</TableCell>
                  {comparisonItems.map((item, index) => (
                    <TableCell
                      key={index}
                      className="text-center"
                    >
                      <Button
                        asChild
                        variant={item.featured ? 'default' : 'outline'}
                        size="sm"
                      >
                        <a
                          href={item.ctaButton.url}
                          target={
                            item.ctaButton.openInNewTab ? '_blank' : '_self'
                          }
                          rel={
                            item.ctaButton.openInNewTab
                              ? 'noopener noreferrer'
                              : undefined
                          }
                        >
                          {item.ctaButton.text}
                        </a>
                      </Button>
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
    );
  }

  if (layout === 'cards') {
    return (
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            {description && (
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comparisonItems.map((item, itemIndex) => (
              <Card
                key={itemIndex}
                className={cn(
                  'relative',
                  item.featured && 'border-primary shadow-lg scale-105'
                )}
              >
                {item.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge variant={item.featured ? 'default' : 'secondary'}>
                      {item.badge}
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center">
                  {item.logo && (
                    <div className="flex justify-center mb-4">
                      <img
                        src={item.logo.url}
                        alt={item.logo.alt || item.name}
                        width={60}
                        height={60}
                        className="object-contain"
                      />
                    </div>
                  )}
                  <CardTitle>{item.name}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex justify-between items-center"
                    >
                      <span className="text-sm font-medium">
                        {feature.feature}
                      </span>
                      <ValueRenderer {...feature.values[itemIndex]} />
                    </div>
                  ))}

                  <Button
                    asChild
                    className="w-full mt-6"
                    variant={item.featured ? 'default' : 'outline'}
                  >
                    <a
                      href={item.ctaButton.url}
                      target={item.ctaButton.openInNewTab ? '_blank' : '_self'}
                      rel={
                        item.ctaButton.openInNewTab
                          ? 'noopener noreferrer'
                          : undefined
                      }
                    >
                      {item.ctaButton.text}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return null;
};
