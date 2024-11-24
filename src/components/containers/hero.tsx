import HeroLead from '../fragments/hero-lead';
import ShortenForm from '../fragments/shorten-form';

export default function Hero() {
  return (
    <section className='container sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20'>
      <div className='max-w-4xl mx-auto text-center space-y-8 sm:space-y-12'>
        <HeroLead />
        <ShortenForm />
      </div>
    </section>
  );
}
