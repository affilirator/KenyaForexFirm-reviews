import React from 'react'
//import {Image} from 'astro:assets'
import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

interface Testimonial {
  quote: string
  author: {
    name: string
    title?: string
    company?: string
    avatar?: { url: string; alt?: string }
  }
  rating?: number
  featured?: boolean
}

interface TestimonialBlockProps {
  title?: string
  subtitle?: string
  testimonials: Testimonial[]
  layout?: 'carousel' | 'grid-2' | 'grid-3' | 'featured' | 'masonry'
  showRatings?: boolean
  showAvatars?: boolean
  autoplay?: boolean
  backgroundColor?: 'default' | 'muted' | 'primary-light' | 'dark'
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={cn(
            'h-4 w-4',
            star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
          )}
        />
      ))}
    </div>
  )
}

const TestimonialCard: React.FC<{ 
  testimonial: Testimonial
  showRatings: boolean
  showAvatars: boolean
  featured?: boolean
}> = ({ testimonial, showRatings, showAvatars, featured = false }) => {
  return (
    <Card className={cn(
      'h-full',
      featured && 'border-primary shadow-lg'
    )}>
      <CardContent className="p-6 space-y-4">
        <div className="relative">
          <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
          <blockquote className="text-lg leading-relaxed pl-6">
            "{testimonial.quote}"
          </blockquote>
        </div>

        {showRatings && testimonial.rating && (
          <StarRating rating={testimonial.rating} />
        )}

        <div className="flex items-center gap-3 pt-4 border-t">
          {showAvatars && testimonial.author.avatar && (
            <div className="relative h-12 w-12 rounded-full overflow-hidden">
              <img
                src={testimonial.author.avatar.url}
                alt={testimonial.author.avatar.alt || testimonial.author.name}
                className="object-cover"
              />
            </div>
          )}
          
          <div>
            <div className="font-semibold">{testimonial.author.name}</div>
            {(testimonial.author.title || testimonial.author.company) && (
              <div className="text-sm text-muted-foreground">
                {testimonial.author.title}
                {testimonial.author.title && testimonial.author.company && ', '}
                {testimonial.author.company}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export const TestimonialBlock: React.FC<TestimonialBlockProps> = ({
  title,
  subtitle,
  testimonials,
  layout = 'carousel',
  showRatings = true,
  showAvatars = true,
  autoplay = true,
  backgroundColor = 'muted'
}) => {
  const backgroundClasses = {
    default: 'bg-background',
    muted: 'bg-muted/50',
    'primary-light': 'bg-primary/5',
    dark: 'bg-slate-900 text-white'
  }

  const layoutClasses = {
    'grid-2': 'grid-cols-1 md:grid-cols-2',
    'grid-3': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    'masonry': 'columns-1 md:columns-2 lg:columns-3'
  }

  const featuredTestimonial = testimonials.find(t => t.featured) || testimonials[0]
  const regularTestimonials = testimonials.filter(t => !t.featured)

  return (
    <section className={cn('py-16 md:py-24', backgroundClasses[backgroundColor])}>
      <div className="container px-4 md:px-6">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            )}
            {subtitle && (
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {layout === 'carousel' && (
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <TestimonialCard
                    testimonial={testimonial}
                    showRatings={showRatings}
                    showAvatars={showAvatars}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        )}

        {layout === 'featured' && (
          <div className="space-y-8">
            <div className="max-w-4xl mx-auto">
              <TestimonialCard
                testimonial={featuredTestimonial}
                showRatings={showRatings}
                showAvatars={showAvatars}
                featured={true}
              />
            </div>
            
            {regularTestimonials.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularTestimonials.slice(0, 3).map((testimonial, index) => (
                  <TestimonialCard
                    key={index}
                    testimonial={testimonial}
                    showRatings={showRatings}
                    showAvatars={showAvatars}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {(layout === 'grid-2' || layout === 'grid-3') && (
          <div className={cn('grid gap-6', layoutClasses[layout])}>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
                showRatings={showRatings}
                showAvatars={showAvatars}
                featured={testimonial.featured}
              />
            ))}
          </div>
        )}

        {layout === 'masonry' && (
          <div className={cn('gap-6 space-y-6', layoutClasses[layout])}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="break-inside-avoid mb-6">
                <TestimonialCard
                  testimonial={testimonial}
                  showRatings={showRatings}
                  showAvatars={showAvatars}
                  featured={testimonial.featured}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}