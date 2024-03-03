import { FC } from 'react';
import twClasses from '@/utils/twClasses';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  tw?: string[];
  title: string;
};

export const HightlightCard: FC<Props> = ({ children, ...props }) => (
  <div
    {...props}
    className={`w-full h-48 p-3 flex flex-col justify-between text-center bg-neutral ${twClasses(
      props.tw
    )}`}
  >
    <h4>{props.title}</h4>
    {children}
  </div>
);
