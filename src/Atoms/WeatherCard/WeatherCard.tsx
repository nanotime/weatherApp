import { FC } from 'react';
import twClasses from '@utils/twClasses';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  tw?: string[];
  title: string;
  tempRange: number[];
};

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

export const WeatherCard: FC<Props> = ({ children, ...props }) => (
  <div
    {...props}
    className={`w-32 h-48 p-3 text-center bg-neutral ${twClasses(props.tw)}`}
  >
    <h4>{formatDate(props.title)}</h4>
    {children}
    <footer>
      {Math.trunc(props.tempRange[0])} - {Math.trunc(props.tempRange[1])}
    </footer>
  </div>
);
