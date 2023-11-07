import Hero from '@/components/Hero';
import Loading from '@/components/Loading';
import HomePetsCard from '@/components/petsCard.tsx/HomePetsCard';
import Link from 'next/link';
export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main className='min-h-[calc(100vh-30rem)] md:min-h-[calc(100vh-15rem)]'>
      <Hero />
      <div className='px-3 md:px-14 lg:px-32'>
        <HomePetsCard query={null} home={true} />
        <Link href={'/pet'} className='btn w-max mb-16'>
          See All Pets
        </Link>
      </div>
    </main>
  );
}
