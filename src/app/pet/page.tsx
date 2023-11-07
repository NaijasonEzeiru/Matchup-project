import PetsFilter from '@/components/PetsFilter';
import HomePetsCard from '@/components/petsCard.tsx/HomePetsCard';
import { cat, places } from '@/utils/jsons';

export const dynamic = 'force-dynamic';

const AllPets = ({
  searchParams
}: {
  searchParams?: { [key: string]: string };
}) => {
  const query = searchParams?.query ?? null;
  const breed = searchParams?.breed || '_';
  const gender = searchParams?.gender || '_';
  const country = searchParams?.country || '_';
  const state = searchParams?.state
    ? places?.[+searchParams?.state!]?.name
    : '_';
  const category = searchParams?.category
    ? cat?.[+searchParams?.category!]?.name
    : '_';
  const city = searchParams?.city || '_';
  const purebred = searchParams?.purebred || '_';
  return (
    <main className='min-h-[calc(100vh-30rem)] md:min-h-[calc(100vh-15rem)]min-h-[calc(100vh-476px)] md:min-h-[calc(100vh-16rem)]'>
      <header className='m-auto py-8 bg-secondaryBg pt-28 '>
        <h1 className='text-2xl font-semibold mb-4 md:text-center text-center'>
          All Pets
        </h1>
      </header>
      <div className='flex flex-col md:flex-row gap-6 px-3 md:px-14 lg:px-32'>
        <PetsFilter />
        <HomePetsCard
          query={query}
          breed={breed}
          gender={gender}
          country={country}
          state={state}
          category={category}
          city={city}
          purebred={purebred}
        />
      </div>
    </main>
  );
};

export default AllPets;
