import Hero from '@/components/containers/hero';
import TableListUrl from '@/components/containers/table-list-url';

export default function Home() {
  return (
    <>
      <Hero />
      <section className='hidden lg:block'>
        <TableListUrl />
      </section>
    </>
  );
}
