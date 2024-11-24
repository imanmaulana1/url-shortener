import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main>
      <h1 className='text-3xl font-bold underline text-red-500'>
        Shorten Your Loooong Links
      </h1>
      <Button variant={'link'}>Button</Button>
    </main>
  );
}
