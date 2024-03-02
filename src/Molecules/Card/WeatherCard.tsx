import { FC } from 'react';
import twClasses from '@utils/twClasses';
// import flatenizeTw from '@/utils/flatenizeTw';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  tw?: string[];
  title: string;
  tempRange: string[];
};

export const WeatherCard: FC<Props> = ({ children, ...props }) => (
  <div
    {...props}
    className={`w-32 h-48 p-3 text-center bg-neutral ${twClasses(props.tw)}`}
  >
    <h4>{props.title}</h4>
    {children}
    <footer>
      {props.tempRange[0]} {props.tempRange[1]}
    </footer>
  </div>
);
