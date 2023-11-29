import Hero from '@/components/Hero';
import LoadingPage from '@/components/LoadingPage';
import Toast from '@/components/Toast';
import HomePetsCard from '@/components/petsCard.tsx/HomePetsCard';
import Link from 'next/link';
import { Suspense } from 'react';

export default function Home({
  searchParams
}: {
  searchParams?: { [key: string]: string };
}) {
  const alert = searchParams?.alert ?? null;
  return (
    <main className='min-h-[calc(100vh-30rem)] md:min-h-[calc(100vh-15rem)]'>
      <Hero />
      <div className='px-3 md:px-14 lg:px-32'>
        <Suspense fallback={<LoadingPage />}>
          <HomePetsCard query={null} home={true} />
        </Suspense>
        <Link href={'/pet'} className='btn w-max mb-16'>
          See All Pets
        </Link>
        <Toast alert={alert} />
      </div>
    </main>
  );
}
