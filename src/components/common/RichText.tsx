import React from 'react'
import escapeHTML from 'escape-html'
import { cn } from '@/lib/utils'
import BlockRenderer from '../blocks/BlockRenderer'

interface RichTextProps {
  content: any
  className?: string
}
/**
 * @description - Renders rich text from payload cms
 * @prop content
 * @prop className
 * @param param0 
 * @returns 
 */
const RichText: React.FC<RichTextProps> = ({ content, className }) => {
  if (!content) return null

  const serialize = (children: any[]): React.ReactNode[] => {
    if (!Array.isArray(children)) return []

    return children.map((node, i) => {
      // Handle Lexical text nodes
      if (node.type === 'text' || node.text !== undefined) {
        let text: React.ReactNode = node.text || ''
        
        // Apply Lexical format bitmask
        if (node.format) {
          if (node.format & 1) text = <strong className="font-semibold text-foreground">{text}</strong>
          if (node.format & 2) text = <em className="italic">{text}</em>
          if (node.format & 4) text = <s className="line-through opacity-75">{text}</s>
          if (node.format & 8) text = <u className="underline decoration-2 underline-offset-2">{text}</u>
          if (node.format & 16) text = <code className="bg-muted/50 dark:bg-muted/30 px-2 py-1 rounded-md text-sm font-mono border">{text}</code>
        }
        
        return <React.Fragment key={i}>{text}</React.Fragment>
      }

      const children = node.children ? serialize(node.children) : []

      switch (node.type) {
        case 'heading':
          const HeadingTag = node.tag as keyof JSX.IntrinsicElements
          const headingClasses = {
            h1: 'text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mt-12 mb-2 leading-tight',
            h2: 'text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mt-5 mb-5 leading-tight',
            h3: 'text-2xl md:text-3xl lg:text-4xl font-display font-semibold text-foreground mt-4 mb-4 leading-tight',
            h4: 'text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mt-6 mb-3',
            h5: 'text-lg md:text-xl lg:text-2xl font-semibold text-foreground mt-6 mb-3',
            h6: 'text-base md:text-lg lg:text-xl font-semibold text-foreground mt-4 mb-2'
          }
          return (
            <HeadingTag 
              key={i} 
              className={cn(
                headingClasses[HeadingTag as keyof typeof headingClasses],
                'scroll-mt-20'
              )}
              role="heading"
              aria-level={parseInt(HeadingTag.slice(1))}
            >
              {children}
            </HeadingTag>
          )
        
        case 'paragraph':
          return (
            <p className="text-base md:text-lg font-sans leading-relaxed md:leading-relaxed text-foreground/90 my-4 md:my-4">
              {children}
            </p>
          )
        
        case 'list':
          const ListTag = node.listType === 'number' || node.listType === 'numbered' ? 'ol' : 'ul'
          const indent = node.indent || 0
          
          return (
            <ListTag 
              key={i} 
              className={cn(
                'space-y-2 md:space-y-3 my-4 md:my-6',
                ListTag === 'ol' ? 'list-decimal' : 'list-disc',
                'list-outside ml-6 md:ml-8',
                indent > 0 && `ml-${Math.min(6 + indent * 4, 20)} md:ml-${Math.min(8 + indent * 6, 24)}`
              )}
              role="list"
            >
              {children}
            </ListTag>
          )
        
        case 'listitem':
          return (
            <li 
              key={i} 
              className="text-base md:text-lg font-ui leading-relaxed text-foreground/90 pl-2"
              role="listitem"
            >
              {children}
            </li>
          )
        
        case 'quote':
          return (
            <blockquote 
              key={i} 
              className="border-l-4 border-primary/30 font-ui bg-muted/30 dark:bg-muted/20 pl-6 pr-4 py-4 my-6 md:my-8 rounded-r-lg italic text-foreground/80"
              role="blockquote"
            >
              <div className="text-base md:text-lg leading-relaxed">
                {children}
              </div>
            </blockquote>
          )
        
        case 'link':
          const url = node.fields?.url || node.url || '#'
          const isExternal = url.startsWith('http') && (typeof window === 'undefined' || !url.includes(window.location.hostname))
          
          return (
            <a
              key={i}
              href={escapeHTML(url)}
              className={cn(
                'text-primary font-ui hover:text-primary/80 underline decoration-2 underline-offset-2',
                'transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-sm'
              )}
              target={node.fields?.newTab || isExternal ? '_blank' : '_self'}
              rel={node.fields?.newTab || isExternal ? 'noopener noreferrer' : undefined}
              aria-label={isExternal ? `${children} (opens in new tab)` : undefined}
            >
              {children}
              {isExternal && (
                <span className="ml-1 -space-y-1 text-xs" aria-hidden="true">↗</span>
              )}
            </a>
          )
        
        case 'linebreak':
          return <br key={i} />
        
        case 'horizontalrule':
          return (
            <hr 
              key={i} 
              className="my-8 md:my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
              color='#cc32d2'
              role="separator"
            />
          )
        
        case 'image':
        case 'upload':
          const imageData = node.value || node
          const imageUrl = imageData.url || `/api/media/file/${imageData.filename}`
          const altText = imageData.alt || node.altText || 'Image'
          
          return (
            <figure key={i} className="my-6 md:my-8">
              <img
                src={imageUrl}
                alt={altText}
                className="w-full h-auto rounded-lg shadow-lg dark:shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
                width={imageData.width || node.width}
                height={imageData.height || node.height}
                loading="lazy"
                fetchPriority='auto'
                decoding='auto'
              />
              {altText && altText !== 'Image' && (
                <figcaption className="text-sm font-ui text-foreground/60 text-center mt-2 italic">
                  {altText}
                </figcaption>
              )}
            </figure>
          )
        
        case 'block':
          return <BlockRenderer key={i} blocks={[node.fields]} />
        
        case 'relationship':
          // Handle relationship nodes (e.g., broker references)
          if (node.value && typeof node.value === 'object') {
            return (
              <div key={i} className="max-w-4xl my-6 p-4 bg-gradient-to-r from-accent to-primary/10 border border-primary/20 rounded-lg">
                <div className="flex items-center gap-3">
                  {node.value.logo?.url && (
                    <img 
                      src={node.value.logo.url} 
                      alt={node.value.logo.alt || `${node.value.name} logo`}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                  )}
                  <div>
                    <h4 className="font-semibold text-foreground">{node.value.name}</h4>
                    {node.value.summary && (
                      <p className="text-sm text-foreground/70 mt-1">{node.value.summary}</p>
                    )}
                  </div>
                </div>
              </div>
            )
          }
          return null
        
        case 'table':
          return (
            <div key={i} className="my-6 md:my-8 overflow-x-auto rounded-lg border border-border shadow-sm">
              <table className="w-full border-collapse" role="table">
                {children}
              </table>
            </div>
          )
        
        case 'tablerow':
          return (
            <tr key={i} className="border-b border-border last:border-b-0 hover:bg-muted/30 transition-colors">
              {children}
            </tr>
          )
        
        case 'tablecell':
          const CellTag = node.headerCell ? 'th' : 'td'
          return (
            <CellTag 
              key={i} 
              className={cn(
                'px-4 py-3 text-left text-sm md:text-base',
                node.headerCell && 'bg-muted/50 font-ui font-semibold text-foreground border-b-2 border-border'
              )}
              role={node.headerCell ? 'columnheader' : 'cell'}
            >
              {children}
            </CellTag>
          )
        
        default:
          // Handle any unrecognized node types gracefully
          if (children.length > 0) {
            return (
              <div key={i} className="my-4">
                {children}
              </div>
            )
          }
          return null
      }
    })
  }

  const contentToRender = content?.root?.children || content?.children || content || []
  
  return (
    <article 
      className={cn(
        'prose prose-lg max-w-none',
        'space-y-8',
        'max-w-5xl',
        'prose-headings:scroll-mt-20',
        'prose-a:text-primary prose-a:no-underline hover:prose-a:underline',
        'prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded',
        'prose-pre:bg-muted prose-pre:border',
        'dark:prose-invert',
        className
      )}
      role="article"
    >
      {serialize(contentToRender)}
    </article>
  )
}
export default RichText