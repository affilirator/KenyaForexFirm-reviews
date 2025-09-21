import React, { useEffect, useRef, useState } from 'react'
import { Trophy, Users, Globe, Star, Target, TrendingUp, DollarSign, Shield } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StatItem {
  number: string
  suffix?: string
  label: string
  description?: string
  icon?: string
}

interface StatsBlockProps {
  title?: string
  description?: string
  stats: StatItem[]
  layout?: 'grid-2' | 'grid-3' | 'grid-4' | 'row'
  backgroundColor?: 'default' | 'muted' | 'primary' | 'dark'
  animateOnScroll?: boolean
}

const iconMap = {
  trophy: Trophy,
  users: Users,
  globe: Globe,
  star: Star,
  target: Target,
  'trending-up': TrendingUp,
  'dollar-sign': DollarSign,
  shield: Shield,
}

const AnimatedNumber: React.FC<{ value: string; animate: boolean }> = ({ value, animate }) => {
  const [displayValue, setDisplayValue] = useState('0')
  
  useEffect(() => {
    if (!animate) {
      setDisplayValue(value)
      return
    }

    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''))
    if (isNaN(numericValue)) {
      setDisplayValue(value)
      return
    }

    let start = 0
    const duration = 2000
    const increment = numericValue / (duration / 16)
    
    const timer = setInterval(() => {
      start += increment
      if (start >= numericValue) {
        setDisplayValue(value)
        clearInterval(timer)
      } else {
        setDisplayValue(Math.floor(start).toString())
      }
    }, 16)

    return () => clearInterval(timer)
  }, [value, animate])

  return <span>{displayValue}</span>
}

export const StatsBlock: React.FC<StatsBlockProps> = ({
  title,
  description,
  stats,
  layout = 'grid-3',
  backgroundColor = 'default',
  animateOnScroll = true
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const layoutClasses = {
    'grid-2': 'grid-cols-1 md:grid-cols-2',
    'grid-3': 'grid-cols-1 md:grid-cols-3',
    'grid-4': 'grid-cols-2 md:grid-cols-4',
    'row': 'grid-cols-1 md:grid-cols-4'
  }

  const backgroundClasses = {
    default: 'bg-background',
    muted: 'bg-muted/50',
    primary: 'bg-primary text-primary-foreground',
    dark: 'bg-slate-900 text-white'
  }

  return (
    <section 
      ref={ref}
      className={cn('py-16 md:py-24', backgroundClasses[backgroundColor])}
    >
      <div className="container px-4 md:px-6">
        {(title || description) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            )}
            {description && (
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}

        <div className={cn('grid gap-8', layoutClasses[layout])}>
          {stats.map((stat, index) => {
            const IconComponent = stat.icon ? iconMap[stat.icon as keyof typeof iconMap] : null
            
            return (
              <div
                key={index}
                className="text-center space-y-3 p-6 rounded-lg hover:bg-background/50 transition-colors"
              >
                {IconComponent && (
                  <div className="flex justify-center">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                )}
                
                <div className="space-y-1">
                  <div className="text-4xl md:text-5xl font-bold">
                    <AnimatedNumber 
                      value={stat.number} 
                      animate={animateOnScroll && isVisible} 
                    />
                    {stat.suffix && (
                      <span className="text-primary">{stat.suffix}</span>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-semibold">{stat.label}</h3>
                  
                  {stat.description && (
                    <p className="text-sm text-muted-foreground">
                      {stat.description}
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}