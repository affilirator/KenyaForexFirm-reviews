
import React from 'react';
import escapeHTML from 'escape-html';

type RichTextProps = {
  content: any;
  className?: string;
};

// Lexical format bitmasks
const IS_BOLD = 1;
const IS_ITALIC = 1 << 1;
const IS_STRIKETHROUGH = 1 << 2;
const IS_UNDERLINE = 1 << 3;

const RichText: React.FC<RichTextProps> = ({ content, className }) => {
  if (!content) {
    return null;
  }

  const serialize = (nodes: any[]): React.ReactNode[] => {
    return nodes.map((node, i) => {
      // Text node
      if (node.type === 'text') {
        let text = <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text).replace(/\\n/g, '<br>') }} />;

        if (node.format & IS_BOLD) {
          text = <strong key={i}>{text}</strong>;
        }
        if (node.format & IS_ITALIC) {
          text = <em key={i}>{text}</em>;
        }
        if (node.format & IS_UNDERLINE) {
          text = <u key={i}>{text}</u>;
        }
        if (node.format & IS_STRIKETHROUGH) {
            text = <s key={i}>{text}</s>
        }

        return <React.Fragment key={i}>{text}</React.Fragment>;
      }

      if (!node) {
        return null;
      }

      switch (node.type) {
        case 'h1':
          return <h1 key={i} className="font-headline text-4xl font-bold mt-12 mb-4">{serialize(node.children)}</h1>;
        case 'h2':
          return <h2 key={i} className="font-headline text-3xl font-bold mt-10 mb-4">{serialize(node.children)}</h2>;
        case 'h3':
          return <h3 key={i} className="font-headline text-2xl font-bold mt-8 mb-4">{serialize(node.children)}</h3>;
        case 'h4':
            return <h4 key={i} className="font-headline text-xl font-bold mt-6 mb-4">{serialize(node.children)}</h4>;
        case 'h5':
            return <h5 key={i} className="font-headline text-lg font-bold mt-6 mb-4">{serialize(node.children)}</h5>;
        case 'h6':
            return <h6 key={i} className="font-headline text-base font-bold mt-6 mb-4">{serialize(node.children)}</h6>;
        case 'quote':
          return <blockquote key={i} className="border-l-4 border-primary pl-4 italic my-6">{serialize(node.children)}</blockquote>;
        case 'ul':
          return <ul key={i} className="list-disc list-inside my-6 space-y-2">{serialize(node.children)}</ul>;
        case 'ol':
          return <ol key={i} className="list-decimal list-inside my-6 space-y-2">{serialize(node.children)}</ol>;
        case 'li':
          return <li key={i}>{serialize(node.children)}</li>;
        case 'link':
          return (
            <a href={escapeHTML(node.fields.url)} key={i} className="text-primary hover:underline" target={node.fields.newTab ? '_blank' : '_self'} rel="noopener noreferrer">
              {serialize(node.children)}
            </a>
          );

        default:
          // paragraph is the default
          return <p key={i} className="my-4 leading-relaxed">{serialize(node.children)}</p>;
      }
    });
  }

  // Handle cases where content might be just the root object
  const nodesToSerialize = content?.root?.children || content || [];

  return <div className={className}>{serialize(nodesToSerialize)}</div>;
};

export default RichText;