import { Skeleton } from '@/components/ui/skeleton';

export default function SkeletonToggleDarkmode() {
  return (
    <div className='flex items-center space-x-2'>
      <Skeleton className='h-6 w-11 rounded-full' />
      <Skeleton className='h-4 w-20 rounded' />
    </div>
  );
}
