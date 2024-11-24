import { Skeleton } from '@/components/ui/skeleton';

export default function SkeletonToggleDarkmode() {
  return (
    <div className='flex items-center space-x-2'>
      <Skeleton className='w-11 h-6 rounded-full' />
      <Skeleton className='w-20 h-4 rounded' />
    </div>
  );
}
