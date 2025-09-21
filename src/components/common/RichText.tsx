import React from 'react'
import escapeHTML from 'escape-html'
import { cn } from '@/lib/utils'
import BlockRenderer from '../blocks/BlockRenderer'

interface RichTextProps {
  content: any
  className?: string
}

const RichText: React.FC<RichTextProps> = ({ content, className }) => {
  if (!content) return null

  // Debug: Log the content structure
  console.log('RichText content:', JSON.stringify(content, null, 2))

  const serialize = (children: any[]): React.ReactNode[] => {
    if (!Array.isArray(children)) {
      console.log('Children is not an array:', children)
      return []
    }

    return children.map((node, i) => {
      console.log(`Node ${i}:`, node)

      // Handle text nodes
      if (node.text !== undefined) {
        let text: React.ReactNode = node.text
        
        // Apply text formatting based on format bitmask
        if (node.format) {
          if (node.format & 1) text = <strong key={`bold-${i}`}>{text}</strong> // Bold
          if (node.format & 2) text = <em key={`italic-${i}`}>{text}</em> // Italic
          if (node.format & 4) text = <s key={`strike-${i}`}>{text}</s> // Strikethrough
          if (node.format & 8) text = <u key={`underline-${i}`}>{text}</u> // Underline
          if (node.format & 16) text = <code key={`code-${i}`} className="bg-muted px-1 py-0.5 rounded text-sm">{text}</code> // Code
        }
        
        return <React.Fragment key={i}>{text}</React.Fragment>
      }

      // Handle element nodes comprehensively
      const children = node.children ? serialize(node.children) : []

      switch (node.type) {
        case 'heading':
          const HeadingTag = node.tag as keyof JSX.IntrinsicElements
          const headingClasses = {
            h1: 'text-4xl font-bold mt-8 mb-4',
            h2: 'text-3xl font-semibold mt-6 mb-3', 
            h3: 'text-2xl font-semibold mt-6 mb-3',
            h4: 'text-xl font-semibold mt-4 mb-2',
            h5: 'text-lg font-semibold mt-4 mb-2',
            h6: 'text-base font-semibold mt-4 mb-2'
          }
          return (
            <HeadingTag key={i} className={headingClasses[HeadingTag as keyof typeof headingClasses]}>
              {children}
            </HeadingTag>
          )
        
        case 'paragraph':
          return (
            <p key={i} className="text-base my-4">
              {children}
            </p>
          )
        
        case 'list':
          const ListTag = node.listType === 'number' ? 'ol' : 'ul'
          const indent = node.indent || 0
          const listStyles = {
            0: node.listType === 'number' ? 'list-decimal' : 'list-disc',
            1: node.listType === 'number' ? 'list-decimal' : 'list-circle', 
            2: node.listType === 'number' ? 'list-decimal' : 'list-square'
          }
          const listStyle = listStyles[Math.min(indent, 2) as keyof typeof listStyles] || 'list-disc'
          
          return (
            <ListTag key={i} className={cn(
              listStyle,
              'list-inside space-y-1',
              indent === 0 ? 'my-4' : 'my-2',
              indent > 0 && `ml-${Math.min(indent * 6, 24)}`
            )}>
              {children}
            </ListTag>
          )
        
        case 'listitem':
          const itemIndent = node.indent || 0
          const hasNestedList = children.some((child: any) => 
            React.isValidElement(child) && 
            (child.type === 'ul' || child.type === 'ol')
          )
          
          return (
            <li key={i} className={cn(
              'leading-relaxed',
              itemIndent > 0 && `ml-${Math.min(itemIndent * 4, 16)}`,
              hasNestedList && 'mb-2'
            )}>
              {children}
            </li>
          )
        
        case 'quote':
          return (
            <blockquote key={i} className="border-l-4 border-neutral-300 pl-4 italic my-4">
              {children}
            </blockquote>
          )
        
        case 'link':
          return (
            <a
              key={i}
              href={escapeHTML(node.fields?.url || node.url || '#')}
              className="text-accent-400 hover:underline"
              target={node.fields?.newTab ? '_blank' : '_self'}
              rel={node.fields?.newTab ? 'noopener noreferrer' : undefined}
            >
              {children}
            </a>
          )
        
        case 'linebreak':
          return <br key={i} />
        
        case 'horizontalrule':
          return <hr key={i} className="my-6 border-t border-border" />
        
        case 'image':
        case 'upload':
          const imageData = node.value || node
          const imageUrl = imageData.url || `/api/media/file/${imageData.filename}`
          return (
            <img
              key={i}
              src={imageUrl}
              alt={imageData.alt || node.altText || ''}
              className="max-w-full h-auto my-4 rounded"
              width={imageData.width || node.width}
              height={imageData.height || node.height}
            />
          )
        
        case 'block':
          return <BlockRenderer key={i} blocks={[node.fields]} />
        
        case 'table':
          return (
            <div key={i} className="my-6 overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                {children}
              </table>
            </div>
          )
        
        case 'tablerow':
          return (
            <tr key={i} className="border-b border-border">
              {children}
            </tr>
          )
        
        case 'tablecell':
          const CellTag = node.headerCell ? 'th' : 'td'
          return (
            <CellTag key={i} className={cn(
              'border border-border px-4 py-2 text-left',
              node.headerCell && 'bg-muted font-semibold'
            )}>
              {children}
            </CellTag>
          )
        
        default:
          console.warn(`Unknown node type: ${node.type}`, node)
          return (
            <div key={i} className="my-4">
              {children}
            </div>
          )
      }
    })
  }

  // Try different content structures
  const contentToRender = content?.root?.children || content?.children || content || []
  
  return (
    <div className={className}>
      {serialize(contentToRender)}
    </div>
  )
}
export default RichText