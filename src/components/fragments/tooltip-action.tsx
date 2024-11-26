import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';

interface TooltipActionsProps {
  onClick: () => void;
  icon: React.ReactNode;
  tooltipContent: string;
  className?: string;
}

export default function TooltipActions({
  onClick,
  icon,
  tooltipContent,
  className = '',
}: TooltipActionsProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          onClick={onClick}
          variant='outline'
          size='icon'
          className={`h-8 w-8 ${className}`}
        >
          {icon}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p className='text-sm'>{tooltipContent}</p>
      </TooltipContent>
    </Tooltip>
  );
}
