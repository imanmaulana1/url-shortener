import { useState } from 'react';
import { Trash2 } from 'lucide-react';
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
import { useDeleteUrl } from '@/hooks/use-urls';

interface ModalDeleteProps {
  id: string;
}

export default function ModalDelete({ id }: ModalDeleteProps) {
  const [open, setOpen] = useState(false);
  const { mutate: deleteUrl } = useDeleteUrl();
  const handleDelete = (id: string) => {
    deleteUrl(id);
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button
          variant='outline'
          size='icon'
          className={`h-8 w-8 bg-red-500 
        text-white 
        hover:text-gray-200
        hover:bg-red-600 
        dark:bg-red-600 
        dark:hover:bg-red-700 
        focus:ring-2 
        focus:ring-red-300 
        dark:focus:ring-red-800`}
        >
          <Trash2 className='h-4 w-4' />
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to delete this URL?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently deleted data
            from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => handleDelete(id)}
            className={buttonVariants({ variant: 'destructive' })}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
