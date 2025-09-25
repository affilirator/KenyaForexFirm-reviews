//import { Metadata } from 'next';
//import a from 'next/a';
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

const year = new Date().getFullYear();

export const metadata = {
  title: `Best Forex Brokers in Kenya - ${year} | MahingeFX`,
  description: 'Find the best Forex broker for your trading needs in Kenya. In-depth reviews, comparisons, and expert ratings.',
};

async function fetchBrokers(): Promise<BrokerProps[]> {
    try {
        const response = await fetch(`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/brokers?limit=10&sort=-brokerRating`, {
            //next: { revalidate: 3600 } // Revalidate every hour
        });
        if (!response.ok) {
            throw new Error('Failed to fetch brokers');
        }
        const data = await response.json();
        return data.docs || [];
    } catch (error) {
        console.error("Broker fetch error:", error);
        return [];
    }
}

export default async function BrokersPage() {
  const brokers = await fetchBrokers();

  if (!brokers || brokers.length === 0) {
    return (
       <div className="container mx-auto px-4 md:px-6 py-12 text-center">
            <h1 className="font-headline text-3xl font-bold">Could Not Load Brokers</h1>
            <p className="text-muted-foreground mt-4">We're having trouble fetching the latest broker reviews. Please check back later.</p>
        </div>
    )
  }

  return (
    <div className="space-y-12">
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
                Best Forex Brokers in Kenya - {year} Update
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                We've spent hundreds of hours testing and reviewing the top forex brokers available to Kenyan traders. Our goal is to provide you with clear, unbiased information to help you make a confident choice.
                </p>
            </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6">
        <h2 className="font-headline text-3xl font-bold mb-6">Top Broker Comparison</h2>
        <div className="overflow-x-auto">
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
                {brokers.map((broker) => (
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
                                <a href={`/review/best-forex-brokers/${broker.slug}`}>Read Review</a>
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
          {brokers.map((broker) => (
            <BrokerCard key={broker.id} broker={broker} />
          ))}
        </div>
       </section>

    </div>
  );
}