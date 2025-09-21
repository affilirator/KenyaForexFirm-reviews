import React, { useState, useEffect } from 'react'
//import img from 'next/img'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight, ExternalLink, Download, Play, Phone, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CTAButton {
  text: string
  url: string
  style: 'primary' | 'secondary' | 'outline' | 'ghost'
  size: 'sm' | 'default' | 'lg'
  openInNewTab?: boolean
  icon: 'none' | 'arrow-right' | 'external-link' | 'download' | 'play' | 'phone' | 'mail'
}

interface CallToActionBlockProps {
  style: 'banner' | 'card' | 'split' | 'centered' | 'newsletter'
  headline: string
  description?: string
  img?: { url: string; alt?: string }
  buttons?: CTAButton[]
  emailCapture?: {
    enabled: boolean
    placeholder: string
    buttonText: string
    privacyText: string
  }
  urgency?: {
    enabled: boolean
    type: 'time' | 'quantity' | 'countdown'
    text: string
    endDate?: string
  }
  backgroundColor?: 'default' | 'primary' | 'secondary' | 'muted' | 'dark' | 'gradient'
  textColor?: 'auto' | 'light' | 'dark'
}

const iconMap = {
  'arrow-right': ArrowRight,
  'external-link': ExternalLink,
  download: Download,
  play: Play,
  phone: Phone,
  mail: Mail,
}

const CountdownTimer: React.FC<{ endDate: string }> = ({ endDate }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const end = new Date(endDate).getTime()
      const difference = end - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [endDate])

  return (
    <div className="flex gap-4 justify-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="text-2xl font-bold">{value}</div>
          <div className="text-sm uppercase">{unit}</div>
        </div>
      ))}
    </div>
  )
}

export const CallToActionBlock: React.FC<CallToActionBlockProps> = ({
  style,
  headline,
  description,
  img,
  buttons = [],
  emailCapture,
  urgency,
  backgroundColor = 'primary',
  textColor = 'auto'
}) => {
  const [email, setEmail] = useState('')

  const backgroundClasses = {
    default: 'bg-background',
    primary: 'bg-primary text-primary-foreground',
    secondary: 'bg-secondary text-secondary-foreground',
    muted: 'bg-muted',
    dark: 'bg-slate-900 text-white',
    gradient: 'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground'
  }

  const textColorClasses = {
    auto: '',
    light: 'text-white',
    dark: 'text-slate-900'
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission
    console.log('Email submitted:', email)
    setEmail('')
  }

  const renderButtons = () => (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      {buttons.map((button, index) => {
        const IconComponent = button.icon !== 'none' ? iconMap[button.icon as keyof typeof iconMap] : null
        
        return (
          <Button
            key={index}
            asChild
            variant={button.style}
            size={button.size}
            className="gap-2"
          >
            <a
              href={button.url}
              target={button.openInNewTab ? '_blank' : '_self'}
              rel={button.openInNewTab ? 'noopener noreferrer' : undefined}
            >
              {button.text}
              {IconComponent && <IconComponent className="h-4 w-4" />}
            </a>
          </Button>
        )
      })}
    </div>
  )

  const renderEmailCapture = () => (
    emailCapture?.enabled && (
      <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto space-y-4">
        <div className="flex gap-2">
          <Input
            type="email"
            placeholder={emailCapture.placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
          />
          <Button type="submit" variant="secondary">
            {emailCapture.buttonText}
          </Button>
        </div>
        <p className="text-xs text-center opacity-80">
          {emailCapture.privacyText}
        </p>
      </form>
    )
  )

  const renderUrgency = () => (
    urgency?.enabled && (
      <div className="bg-black/20 rounded-lg p-4 max-w-md mx-auto">
        <div className="text-center space-y-2">
          <div className="text-sm font-medium">{urgency.text}</div>
          {urgency.type === 'countdown' && urgency.endDate && (
            <CountdownTimer endDate={urgency.endDate} />
          )}
        </div>
      </div>
    )
  )

  if (style === 'split') {
    return (
      <section className={cn('py-16 md:py-24', backgroundClasses[backgroundColor], textColorClasses[textColor])}>
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">{headline}</h2>
              {description && (
                <p className="text-lg opacity-90">{description}</p>
              )}
              {renderUrgency()}
              {renderButtons()}
              {renderEmailCapture()}
            </div>
            {img && (
              <div className="relative h-64 md:h-96">
                <img
                  src={img.url}
                  alt={img.alt || ''}
        
                  className="object-cover rounded-lg"
                />
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }

  if (style === 'card') {
    return (
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className={cn(
            'max-w-4xl mx-auto rounded-2xl p-8 md:p-12 text-center space-y-8',
            backgroundClasses[backgroundColor],
            textColorClasses[textColor]
          )}>
            {img && (
              <div className="relative h-48 w-48 mx-auto">
                <img
                  src={img.url}
                  alt={img.alt || ''}
                 
                  className="object-cover rounded-lg"
                />
              </div>
            )}
            <h2 className="text-3xl md:text-4xl font-bold">{headline}</h2>
            {description && (
              <p className="text-lg opacity-90 max-w-2xl mx-auto">{description}</p>
            )}
            {renderUrgency()}
            {renderButtons()}
            {renderEmailCapture()}
          </div>
        </div>
      </section>
    )
  }

  // Default banner style
  return (
    <section className={cn('py-16 md:py-24', backgroundClasses[backgroundColor], textColorClasses[textColor])}>
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold">{headline}</h2>
          {description && (
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">{description}</p>
          )}
          {renderUrgency()}
          {renderButtons()}
          {renderEmailCapture()}
        </div>
      </div>
    </section>
  )
}