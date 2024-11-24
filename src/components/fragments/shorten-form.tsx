import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'lucide-react';

export default function ShortenForm() {
  return (
    <div className='w-full max-w-2xl mx-auto'>
      <div className='relative flex items-center'>
        <div className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none'>
          <Link className='h-5 w-5' />
        </div>
        <Input
          type='text'
          className='h-12 w-full pl-10 pr-28 sm:pr-32 rounded-lg border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-primary'
          placeholder='Enter the link here'
        />
        <Button
          className='absolute right-1 top-1/2 -translate-y-1/2 h-10 px-4 sm:px-6'
          type='submit'
        >
          Shorten
        </Button>
      </div>
    </div>
  );
}
