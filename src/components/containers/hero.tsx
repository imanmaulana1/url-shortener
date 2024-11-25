import HeroLead from '@/components/fragments/hero-lead';
import ShortenForm from '@/components/fragments/shorten-form';

export default function Hero() {
  return (
    <section className='container sm:px-6 lg:px-8 py-4'>
      <div className='max-w-4xl mx-auto text-center space-y-8'>
        <HeroLead />
        <ShortenForm />
      </div>
    </section>
  );
}
