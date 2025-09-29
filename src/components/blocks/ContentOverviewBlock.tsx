import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface OverviewItem {
  text: string;
  anchor?: string;
}

interface ContentOverviewBlockProps {
  title?: string;
  items: OverviewItem[];
  style: 'numbered' | 'bullets' | 'checks';
}

export const ContentOverviewBlock: React.FC<ContentOverviewBlockProps> = ({
  title = 'In This Article',
  items,
  style,
}) => {
  const renderItem = (item: OverviewItem, index: number) => {
    const content = item.anchor ? (
      <a
        href={`#${item.anchor}`}
        className="text-primary hover:underline"
      >
        {item.text}
      </a>
    ) : (
      item.text
    );

    switch (style) {
      case 'numbered':
        return (
          <li
            key={index}
            className="flex gap-3 items-start"
          >
            <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
              {index + 1}
            </span>
            <span>{content}</span>
          </li>
        );

      case 'checks':
        return (
          <li
            key={index}
            className="flex gap-3 items-start"
          >
            <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span>{content}</span>
          </li>
        );

      default:
        return (
          <li
            key={index}
            className="list-disc ml-4"
          >
            {content}
          </li>
        );
    }
  };

  return (
    <div className="bg-muted/50 border rounded-lg p-6 my-8">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ul className={cn('space-y-3', style === 'bullets' && 'list-inside')}>
        {items.map(renderItem)}
      </ul>
    </div>
  );
};
