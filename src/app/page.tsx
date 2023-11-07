import Hero from '@/components/Hero';
import Loading from '@/components/Loading';
import HomePetsCard from '@/components/petsCard.tsx/HomePetsCard';
export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main className='min-h-[calc(100vh-30rem)] md:min-h-[calc(100vh-15rem)]min-h-screen'>
      <Hero />
      <div className='px-3 md:px-14 lg:px-32'>
        <HomePetsCard query={null} />
      </div>
    </main>
  );
}
