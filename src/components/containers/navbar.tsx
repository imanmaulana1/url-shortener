import Link from 'next/link';
import ToggleDarkmode from '../fragments/toggle-darkmode';

export default function Navbar() {
  return (
    <nav className='container py-4 md:py-6 flex items-center justify-between'>
      <Link href='/' aria-label='Home'>
        <h1 className='text-2xl md:text-2xl lg:text-3xl font-bold leading-10'>
          Linkly
        </h1>
      </Link>
      <ToggleDarkmode />
    </nav>
  );
}
