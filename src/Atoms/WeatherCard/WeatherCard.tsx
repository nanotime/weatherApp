import { FC } from 'react';
import twClasses from '@utils/twClasses';
import flatenizeTw from '@/utils/flatenizeTw';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  tw?: string[];
  title: string;
  locales: string | readonly string[];
  tempRange: number[];
};

const classes = flatenizeTw([
  ['card', 'text-center', 'bg-neutral'],
  ['w-full', 'shadow-xl'],
]);

const formatDate = (date: string, locales: string | readonly string[]) => {
  const locale: string = Array.isArray(locales) ? locales[0] : locales;
  return new Date(date).toLocaleDateString(locale || 'en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
};

export const WeatherCard: FC<Props> = ({ children, ...props }) => (
  <div {...props} className={`${classes} ${twClasses(props.tw)}`}>
    <div className="card-body">
      <h4>{formatDate(props.title, props.locales)}</h4>
      {Math.trunc(props.tempRange[0])} - {Math.trunc(props.tempRange[1])}
    </div>
    <figure>{children}</figure>
  </div>
);
