import SafetyRegulationSection from './SafetyRegulationSection';
import TradingConditionsSection from './TradingConditionsSection';
import RichText from '@/components/common/RichText';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import StarRating from '@/components/react/brokers/StarRating.astro';
import { 
  Monitor, 
  CreditCard, 
  Headphones, 
  GraduationCap,
  ExternalLink,
  CheckCircle,
  XCircle
} from 'lucide-react';

interface ReviewSectionProps {
  blockType: string;
  rating?: number;
  [key: string]: any;
}

const SectionHeader = ({ icon, title, rating }: { icon: React.ReactNode; title: string; rating?: number }) => (
  <div className="flex items-center justify-between mb-6">
    <div className="flex items-center gap-3">
      {icon}
      <h2 className="font-headline text-3xl font-bold">{title}</h2>
    </div>
    {rating && (
      <div className="flex items-center gap-2">
        <StarRating rating={rating} className='' />
        <span className="text-sm font-medium text-muted-foreground">({rating.toFixed(1)})</span>
      </div>
    )}
  </div>
);

export default function ReviewSectionRenderer({ blockType, ...props }: ReviewSectionProps) {
  switch (blockType) {
    case 'safety-regulation':
      return <SafetyRegulationSection {...props} />;
    
    case 'trading-conditions':
      return <TradingConditionsSection {...props} />;
    
    case 'platforms-tools':
      return (
        <section id="platforms-tools" className="mb-12">
          <SectionHeader 
            icon={<Monitor className="h-8 w-8 text-purple-600" />}
            title={props.title}
            rating={props.rating}
          />
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle>Available Platforms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {props.platforms?.map((platform: any, index: number) => (
                  <div key={index} className="p-3 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-medium">{platform.name}</span>
                      <Badge variant="outline">{platform.type}</Badge>
                    </div>
                    {platform.features && (
                      <p className="text-sm text-muted-foreground">{platform.features}</p>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Trading Tools</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {props.tools?.charting && (
                  <div className="flex justify-between">
                    <span>Charting Package</span>
                    <span className="text-sm">{props.tools.charting}</span>
                  </div>
                )}
                {props.tools?.indicators && (
                  <div className="flex justify-between">
                    <span>Technical Indicators</span>
                    <Badge variant="secondary">{props.tools.indicators}+</Badge>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Expert Advisors</span>
                  {props.tools?.expertAdvisors ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-600" />
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <RichText content={props.content} />
        </section>
      );
    
    case 'deposits-withdrawals':
      return (
        <section id="deposits-withdrawals" className="mb-12">
          <SectionHeader 
            icon={<CreditCard className="h-8 w-8 text-green-600" />}
            title={props.title}
            rating={props.rating}
          />
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {props.methods?.map((method: any, index: number) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">{method.name}</h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      {method.minDeposit && <div>Min: ${method.minDeposit}</div>}
                      {method.fees && <div>Fees: {method.fees}</div>}
                      {method.processingTime && <div>Time: {method.processingTime}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <RichText content={props.content} />
        </section>
      );
    
    case 'customer-service':
      return (
        <section id="customer-service" className="mb-12">
          <SectionHeader 
            icon={<Headphones className="h-8 w-8 text-orange-600" />}
            title={props.title}
            rating={props.rating}
          />
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle>Support Channels</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {Object.entries(props.channels || {}).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                    {value ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-600" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Availability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {props.availability?.hours && (
                  <div>
                    <span className="font-medium">Hours:</span>
                    <span className="ml-2">{props.availability.hours}</span>
                  </div>
                )}
                {props.languages && (
                  <div>
                    <span className="font-medium">Languages:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {props.languages.map((lang: any, index: number) => (
                        <Badge key={index} variant="outline">{lang.language}</Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          
          <RichText content={props.content} />
        </section>
      );
    
    case 'education-research':
      return (
        <section id="education-research" className="mb-12">
          <SectionHeader 
            icon={<GraduationCap className="h-8 w-8 text-indigo-600" />}
            title={props.title}
            rating={props.rating}
          />
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle>Educational Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {Object.entries(props.educational || {}).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                    {value ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-600" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Research Tools</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {Object.entries(props.research || {}).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                    {value ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-600" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          
          {props.resources && props.resources.length > 0 && (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Available Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {props.resources.map((resource: any, index: number) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">{resource.name}</h4>
                        <Badge variant={resource.type === 'Free' ? 'default' : 'secondary'}>
                          {resource.type}
                        </Badge>
                      </div>
                      {resource.description && (
                        <p className="text-sm text-muted-foreground mb-2">{resource.description}</p>
                      )}
                      {resource.url && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={resource.url} target="_blank" rel="noopener noreferrer">
                            Access <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
          
          <RichText content={props.content} />
        </section>
      );
    
    default:
      return null;
  }
}