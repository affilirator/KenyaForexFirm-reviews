//import { Metadata } from 'next';
//import { getReviews } from '~/lib/qs-esm';
import { getReviews } from '~/lib/qs-esm';
//import a from 'next/a';
//import { fullYear } from '@/components/common/dates';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Button } from '@/components/ui/button';
import BrokerCard from '@/components/react/brokers/BrokerCard';
import StarRating from '@/components/react/brokers/StarRating';
import type { BrokerProps } from '@/types';

import RichText from '@/components/common/RichText';
import { websiteSchema } from '@/lib/schema/website-schema';
import { personSchema } from '@/lib/schema/person-schema';
import { StructuredData } from '@/components/seo/StructuredData';

//const year = new Date().getFullYear();

const siteRes = await fetch('https://fx.mahinge.com/api/globals/site-config?depth=2&draft=false&locale=undefined&trash=false')

const site = await siteRes.json();
const pageRes = await fetch('https://fx.mahinge.com/api/pages/68ccaebe63b3e43add6c8c6f?depth=2&draft=false&locale=undefined&trash=false')
const page = await pageRes.json();
const slug = site.siteUrl + '/' + page.slug

export const metadata = {
  title: `Best Forex Brokers in Kenya - | MahingeFX`,
  
  description: 'Find the best Forex broker for your trading needs in Kenya. In-depth reviews, comparisons, and expert ratings by Patrick Mahinge.',
  keywords: ['best forex brokers Kenya', 'top forex brokers Kenya', 'forex trading Kenya', 'Kenya forex broker reviews', 'trusted forex brokers Kenya', 'forex trading platforms Kenya', 'forex broker comparisons', 'forex trading accounts Kenya'],
  alternates: {
    canonical: slug,
  },
  openGraph: {
    type: 'article',
    title: `Best Forex Brokers in Kenya (2025)`,
    description: 'Find the best Forex broker for your trading needs in Kenya. In-depth reviews, comparisons, and expert ratings.',
    url: slug,
    siteName: 'MahingeFX',
    images: [
      {
        url: site.siteUrl + '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Best Forex Brokers in Kenya',
      },
    ],
    locale: 'en_US',
  },
};


const structuredData = {
  "@context": 'https://schema.org',
  "@type": 'Article',
  "headline": "Best Forex Brokers in Kenya - 2025 Update",
  "description": "Find the best Forex broker for your trading needs in Kenya. In-depth reviews, comparisons, and expert ratings by Patrick Mahinge.",
  "datePublished": "2024-03-25",
  "dateModified": new Date().toISOString(),
  "author": {
    //"@type": "Person",
    ...personSchema
    
    
  },
  "publisher": {
    "@type": "Organization",
    '@id': site.siteUrl + '/#organization',
    
  },
  "image": {
    "@type": "ImageObject",
    "url": site.siteUrl + '/logo.png',
    "width": 1200,
    "height": 630
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": site.siteUrl + '/best-forex-brokers',
    isPartOf: {
      //"@id": site.siteUrl,
      ...websiteSchema
    },
    
    breadcrumb: {
      "@id": site.siteUrl + '/#breadcrumb',
      "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": site.siteUrl
  },{
    "@type": "ListItem",
    "position": 2,
    "name": "Best Forex Brokers in Kenya",
    "item": site.siteUrl + '/best-forex-brokers'
  }]
}
    },
    }
  
  




export default async function BrokersPage() {
  
  const brokers = await getReviews()
  
  if (!brokers || brokers.docs.length === 0) {
    return (
       <div className="container mx-auto px-4 md:px-6 py-12 text-center">
            <h1 className="font-headline text-3xl font-bold">Could Not Load Brokers</h1>
            <p className="text-muted-foreground mt-4">We're having trouble fetching the latest broker reviews. Please check back later.</p>
        </div>
    )
  }

  return (
    <div className="space-y-12">
       <StructuredData  data={structuredData} />
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
            <Breadcrumb className="mb-8">
                <BreadcrumbList>
                    <BreadcrumbItem><BreadcrumbLink asChild><a href="/">Home</a></BreadcrumbLink></BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem><BreadcrumbPage>Broker Reviews</BreadcrumbPage></BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className="text-center max-w-3xl mx-auto">
                <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                Best Forex Brokers in Kenya
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                We've spent hundreds of hours testing and reviewing the top forex brokers in Kenya. Our goal is to provide you with clear, unbiased information to help you make a confident choice.
                </p>
            </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6">
        <h2 className="font-headline text-3xl font-bold mb-6">Top Broker Comparison</h2>
        <div className="overflow-x-hidden">
        <Table>
            <TableHeader>
                <TableRow>
                <TableHead>Broker</TableHead>
                <TableHead className="text-center">Overall Rating</TableHead>
                <TableHead>Min. Deposit</TableHead>
                <TableHead>Regulation</TableHead>
                <TableHead>Best For</TableHead>
                <TableHead></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {brokers.docs.map((broker) => (
                    <TableRow key={broker.id}>
                        <TableCell className="font-medium">{broker.brokerName}</TableCell>
                        <TableCell className="text-center">
                            <div className="flex items-center justify-center gap-1">
                                <StarRating rating={broker.brokerRating} />
                                <span className="font-bold text-sm">({broker.brokerRating.toFixed(1)})</span>
                            </div>
                        </TableCell>
                        <TableCell>${broker.minDeposit}</TableCell>
                        <TableCell>
                                                    {broker.regulations?.map((reg, index) => (
                                                        <span key={index}>
                                                            {reg.regulator.shortName}
                                                            {index < (broker.regulations?.length || 0) - 1 && ', '}
                                                        </span>
                                                    ))}
                                                </TableCell>
                        <TableCell>{broker.bestFor}</TableCell>
                        <TableCell className="text-right">
                           <Button asChild size="sm">
                                <a href={`/best-forex-brokers/${broker.slug}`}>Read Review</a>
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        </div>
      </section>
      
       <section className="container mx-auto px-4 md:px-6">
        <h2 className="font-headline text-3xl font-bold mb-6">Detailed Reviews</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {brokers.docs.map((broker) => (
            <BrokerCard key={broker.id} broker={broker} />
          ))}
        </div>
       </section>
        <section className="bg-card py-16 md:py-24 mx-auto px-4 md:px-6">
            <div className="container prose max-w-5xl mx-auto px-4 md:px-6">
                <RichText content={page.content} />
            </div>
        </section>

    </div>
  );
}