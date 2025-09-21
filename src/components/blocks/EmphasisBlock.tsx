import React from 'react'
import { Lightbulb, AlertTriangle, Info, Star, Quote } from 'lucide-react'
import { cn } from '@/lib/utils'
import RichText from '~/components/common/RichText'

interface EmphasisBlockProps {
  style: 'quote' | 'callout' | 'warning' | 'tip' | 'keypoint'
  content: any
  icon?: 'none' | 'lightbulb' | 'alert-triangle' | 'info' | 'star' | 'quote'
}

const iconMap = {
  lightbulb: Lightbulb,
  'alert-triangle': AlertTriangle,
  info: Info,
  star: Star,
  quote: Quote,
}

export const EmphasisBlock: React.FC<EmphasisBlockProps> = ({
  style,
  content,
  icon = 'none'
}) => {
  const IconComponent = icon !== 'none' ? iconMap[icon as keyof typeof iconMap] : null

  const styleClasses = {
    quote: 'border-l-4 border-neutral-400 bg-neutral-400/5 italic',
    callout: 'border border-blue-200 bg-blue-50 dark:bg-blue-950/20 dark:border-blue-800',
    warning: 'border border-yellow-200 bg-yellow-50 dark:bg-yellow-950/20 dark:border-yellow-800',
    tip: 'border border-green-200 bg-green-50 dark:bg-green-950/20 dark:border-green-800',
    keypoint: 'border border-purple-200 bg-purple-50 dark:bg-purple-950/20 dark:border-purple-800',
  }

  const iconColors = {
    quote: 'text-neutral-400',
    callout: 'text-blue-600',
    warning: 'text-yellow-600',
    tip: 'text-green-600',
    keypoint: 'text-purple-600',
  }

  return (
    <div className={cn('p-6 rounded-lg my-6', styleClasses[style])}>
      <div className="flex gap-3">
        {IconComponent && (
          <IconComponent className={cn('h-6 w-6 mt-1 flex-shrink-0', iconColors[style])} />
        )}
        <div className="flex-1">
          <RichText content={content} />
        </div>
      </div>
    </div>
  )
}