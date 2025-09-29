import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RichText from '@/components/common/RichText';

interface Takeaway {
  takeaway: string;
}

interface NextStepAction {
  text: string;
  url: string;
}

interface ConclusionBlockProps {
  title?: string;
  content: any;
  keyTakeaways?: Takeaway[];
  nextSteps?: {
    enabled: boolean;
    title: string;
    actions: NextStepAction[];
  };
}

export const ConclusionBlock: React.FC<ConclusionBlockProps> = ({
  title = 'Conclusion',
  content,
  keyTakeaways = [],
  nextSteps,
}) => {
  return (
    <div className="border-t-4 border-primary bg-gradient-to-br from-primary/5 to-transparent rounded-lg p-8 my-12">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <CheckCircle className="h-6 w-6 text-primary" />
        {title}
      </h2>

      <div className="mb-6">
        <RichText content={content} />
      </div>

      {keyTakeaways.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Key Takeaways</h3>
          <ul className="space-y-2">
            {keyTakeaways.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-2"
              >
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>{item.takeaway}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {nextSteps?.enabled && nextSteps.actions.length > 0 && (
        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold mb-4">{nextSteps.title}</h3>
          <div className="flex flex-col sm:flex-row gap-3">
            {nextSteps.actions.map((action, index) => (
              <Button
                key={index}
                asChild
                variant={index === 0 ? 'default' : 'outline'}
              >
                <a
                  href={action.url}
                  className="gap-2"
                >
                  {action.text}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
