'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from '@/hooks/use-toast';
import { z } from 'zod';
import { Link } from 'lucide-react';
import api from '@/lib/axios';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { LoadingSpinner } from '@/components/ui/spinner';

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

  const queryClient = useQueryClient();

  const { mutate: shorten, isPending } = useMutation({
    mutationFn: async (values: z.infer<typeof urlSchema>) => {
      const response = await api.post('/api/shorten', values);
      return response.data;
    },
    onSuccess: (data) => {
      toast({
        title: 'Success',
        description: data.message,
        variant: 'success',
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ['urls'] });
    },
    onError: (error) => {
      toast({
        title: 'Failed',
        description: error.message,
        variant: 'destructive',
      });
    },
  });

  const onSubmit = (values: z.infer<typeof urlSchema>) => {
    shorten(values);
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
                    {isPending ? (
                      <>
                        <LoadingSpinner /> Shortening...
                      </>
                    ) : (
                      'Shorten'
                    )}
                  </Button>
                </div>
              </FormControl>
              <FormMessage className='text-start text-red-700 dark:text-[#FF4136]' />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
