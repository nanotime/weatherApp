import { FC } from 'react';
import twClasses from '@utils/twClasses';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  tw?: string[];
  title: string;
  locales: string | readonly string[];
  tempRange: number[];
};

const formatDate = (date: string, locales: string | readonly string[]) => {
  const locale: string = Array.isArray(locales) ? locales[0] : locales;
  return new Date(date).toLocaleDateString(locale, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
};

export const WeatherCard: FC<Props> = ({ children, ...props }) => (
  <div
    {...props}
    className={`w-32 h-48 p-3 text-center bg-neutral ${twClasses(props.tw)}`}
  >
    <h4>{formatDate(props.title, props.locales)}</h4>
    {children}
    <footer>
      {Math.trunc(props.tempRange[0])} - {Math.trunc(props.tempRange[1])}
    </footer>
  </div>
);
