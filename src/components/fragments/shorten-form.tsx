'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { useMutation } from '@tanstack/react-query';

const urlSchema = z.object({
  url: z.string().url({
    message: 'Please enter a valid URL',
  }),
});

export default function ShortenForm() {
  const form = useForm<z.infer<typeof urlSchema>>({
    resolver: zodResolver(urlSchema),
    defaultValues: {
      url: '',
    },
  });

  const {} = useMutation({
    mutationFn: async () => {},
    onSuccess: () => {},
    onError: () => {},
  });

  const onSubmit = (values: z.infer<typeof urlSchema>) => {
    console.log(values.url);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='w-full max-w-2xl mx-auto'
      >
        <FormField
          control={form.control}
          name='url'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='sr-only'>Url</FormLabel>
              <FormMessage className='text-start text-red-700 dark:text-[#FF4136]' />
              <FormControl>
                <div className='relative flex items-center'>
                  <div className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none'>
                    <Link className='h-5 w-5' />
                  </div>
                  <Input
                    {...field}
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
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
