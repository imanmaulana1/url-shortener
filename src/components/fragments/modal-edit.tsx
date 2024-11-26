import { useState, useEffect } from 'react';
import { Edit2 } from 'lucide-react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useUpdateUrl, useUrl } from '@/hooks/use-urls';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { urlSchema } from '@/lib/schemas';

interface ModalEditProps {
  id: string;
}

export default function ModalEdit({ id }: ModalEditProps) {
  const [open, setOpen] = useState(false);
  const { data: url } = useUrl(id);
  const { mutate: updateUrl } = useUpdateUrl();

  const form = useForm<z.infer<typeof urlSchema>>({
    resolver: zodResolver(urlSchema),
    defaultValues: {
      url: '',
    },
  });

  const originalUrl = url?.data?.originalUrl || '';

  useEffect(() => {
    if (url?.data?.originalUrl) {
      form.setValue('url', url.data.originalUrl);
    }
  }, [url, form]);

  const onSubmit = (value: z.infer<typeof urlSchema>) => {
    updateUrl(
      { id, url: value.url },
      {
        onSuccess: () => {
          setOpen(false);
        },
      }
    );
  };

  const handleEdit = () => {
    form.handleSubmit((data: z.infer<typeof urlSchema>) => {
      onSubmit(data);
    })();
  };

  const handleReset = () => {
    form.setValue('url', originalUrl);
    form.clearErrors('url');
  };

  return (
    <AlertDialog
      open={open}
      onOpenChange={(isOpen) => {
        if (isOpen) {
          form.setValue('url', originalUrl);
          form.clearErrors('url');
        }
        setOpen(isOpen);
      }}
    >
      <AlertDialogTrigger asChild>
        <Button
          variant='outline'
          size='icon'
          className={`h-8 w-8 bg-blue-500 
        text-white 
        hover:text-gray-200
        hover:bg-blue-600 
        dark:bg-blue-600 
        dark:hover:bg-blue-700 
        focus:ring-2 
        focus:ring-blue-300 
        dark:focus:ring-blue-800`}
        >
          <Edit2 className='h-4 w-4' />
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Edit URL</AlertDialogTitle>
          <AlertDialogDescription>
            {`Make changes to your url here. Click save when you're done.`}
          </AlertDialogDescription>
        </AlertDialogHeader>
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
                    <div className='py-4'>
                      <div className='space-y-2'>
                        <Label htmlFor='name'>Original URL</Label>
                        <Input {...field} id='name' />
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage className='text-start text-red-700 dark:text-[#FF4136]' />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={handleReset}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            type='button'
            onClick={(e) => {
              e.preventDefault();
              handleEdit();
            }}
            className={buttonVariants({ variant: 'default' })}
          >
            Edit
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
