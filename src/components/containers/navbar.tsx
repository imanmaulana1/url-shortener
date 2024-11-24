import Link from 'next/link';
import ToggleDarkmode from '../fragments/toggle-darkmode';

export default function Navbar() {
  return (
    <nav className='h-[60px] md:h-[80px] container max-w-7xl flex items-center justify-between'>
      <Link href='/' aria-label='Home'>
        Linkly
      </Link>
      <ToggleDarkmode />
    </nav>
  );
}
