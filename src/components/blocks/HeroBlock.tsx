import React from 'react'
//import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface HeroBlockProps {
  headline: string
  subheadline?: string
  backgroundImage?: { url: string; alt?: string }
  ctaButtons?: Array<{
    text: string
    url: string
    style: 'primary' | 'secondary' | 'outline'
    openInNewTab?: boolean
  }>
  alignment?: 'left' | 'center' | 'right'
  overlay?: {
    enabled: boolean
    opacity: number
    color: 'dark' | 'primary' | 'gradient'
  }
}

export const HeroBlock: React.FC<HeroBlockProps> = ({
  headline,
  subheadline,
  backgroundImage,
  ctaButtons = [],
  alignment = 'center',
  overlay = { enabled: true, opacity: 50, color: 'dark' }
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  }

  const overlayClasses = {
    dark: 'bg-black',
    primary: 'bg-primary',
    gradient: 'bg-gradient-to-r from-primary to-primary/80'
  }

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage.url}
            alt={backgroundImage.alt || ''}
            
            className="object-cover"
            
          />
        </div>
      )}
      
      {overlay.enabled && (
        <div 
          className={cn(
            'absolute inset-0 z-10',
            overlayClasses[overlay.color]
          )}
          style={{ opacity: overlay.opacity / 100 }}
        />
      )}

      <div className="container relative z-20 px-4 md:px-6">
        <div className={cn('flex flex-col max-w-4xl mx-auto space-y-6', alignmentClasses[alignment])}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
            {headline}
          </h1>
          
          {subheadline && (
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
              {subheadline}
            </p>
          )}

          {ctaButtons.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {ctaButtons.map((button, index) => (
                <Button
                  key={index}
                  asChild
                  size="lg"
                  variant={button.style === 'primary' ? 'default' : button.style}
                  className="text-lg px-8 py-6"
                >
                  <a
                    href={button.url}
                    target={button.openInNewTab ? '_blank' : '_self'}
                    rel={button.openInNewTab ? 'noopener noreferrer' : undefined}
                  >
                    {button.text}
                  </a>
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}