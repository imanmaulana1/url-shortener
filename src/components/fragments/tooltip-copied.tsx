import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { UrlData } from '@/types';

interface TooltipCopiedProps {
  data: UrlData;
}

export default function TooltipCopied({ data }: TooltipCopiedProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyUrl = (url: string, id: string) => {
    navigator.clipboard.writeText(url).then(() => {
      setCopiedId(id);
    });
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant={'ghost'}
          aria-label='copy'
          onClick={() => handleCopyUrl(data.fullShortCode, data.id)}
        >
          {copiedId === data.id ? (
            <Check className='w-4 h-4' />
          ) : (
            <Copy className='w-4 h-4' />
          )}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p className='text-sm'>Copy Link</p>
      </TooltipContent>
    </Tooltip>
  );
}
