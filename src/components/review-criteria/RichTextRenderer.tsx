import React from 'react';

interface Props {
  content: any;
}

function renderText(node: any): string {
  if (!node.text) return '';
  let text = node.text;
  if (node.format === 1) text = `<strong>${text}</strong>`;
  return text;
}

function renderChildren(children: any[]): string {
  if (!children) return '';
  return children.map(child => {
    if (child.type === 'text') return renderText(child);
    return '';
  }).join('');
}

export default function RichTextRenderer({ content }: Props) {
  if (!content?.children) return null;

  return (
    <>
      {content.children.map((node: any, index: number) => {
        if (node.type === 'paragraph' && node.children?.length > 0) {
          return <p key={index} dangerouslySetInnerHTML={{ __html: renderChildren(node.children) }} />;
        }
        
        if (node.type === 'heading' && node.children?.length > 0) {
          const tag = node.tag || 'h2';
          return React.createElement(tag, {
            key: index,
            dangerouslySetInnerHTML: { __html: renderChildren(node.children) }
          });
        }
        
        if (node.type === 'list' && node.children?.length > 0) {
          const tag = node.tag || 'ul';
          return React.createElement(tag, { key: index }, 
            node.children.map((item: any, itemIndex: number) => (
              <li key={itemIndex} dangerouslySetInnerHTML={{ __html: renderChildren(item.children) }} />
            ))
          );
        }
        
        if (node.type === 'horizontalrule') {
          return <hr key={index} className="my-6 border-neutral-700" />;
        }
        
        if (node.type === 'block' && node.fields?.blockType === 'conclusion') {
          return (
            <div key={index} className="mt-8 p-6 bg-primary-500/10 border border-primary-500/20 rounded-xl">
              <h3 className="text-lg font-bold text-primary-400 mb-3">{node.fields.title}</h3>
              <div className="text-neutral-300 mb-4">
                <RichTextRenderer content={node.fields.content?.root} />
              </div>
              
              {node.fields.keyTakeaways?.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-neutral-400 mb-2">Key Takeaway:</h4>
                  {node.fields.keyTakeaways.map((takeaway: any, takeawayIndex: number) => (
                    <p key={takeawayIndex} className="text-sm text-neutral-300">{takeaway.takeaway}</p>
                  ))}
                </div>
              )}
              
              {node.fields.nextSteps?.enabled && node.fields.nextSteps.actions?.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-neutral-400 mb-2">{node.fields.nextSteps.title}</h4>
                  {node.fields.nextSteps.actions.map((action: any, actionIndex: number) => (
                    <a 
                      key={actionIndex}
                      href={action.url} 
                      className="inline-block text-primary-400 hover:text-primary-300 text-sm underline"
                    >
                      {action.text}
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        }
        
        return null;
      })}
    </>
  );
}