import { FC } from 'react';
import twClasses from '@utils/twClasses';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  tw?: string[];
};

type Composition = {
  Title: FC<Props>;
  Actions: FC<Props>;
};

/**
 * Card compound component
 *
 * @param {Props} children - The content to be displayed inside the card.
 * @param {Props} tw - The tailwind classes to be applied to the card.
 * @param {Composition} props - Additional properties for the card component.
 * @return {JSX.Element} The rendered card component.
 */
export const Card: FC<Props> & Composition = ({ children, ...props }) => (
  <div {...props} className={`card ${twClasses(props.tw)}`}>
    <div className="card-body">{children}</div>
  </div>
);

Card.Title = ({ children, ...props }) => (
  <h2 {...props} className={`card-head ${twClasses(props.tw)}`}>
    {children}
  </h2>
);

Card.Actions = ({ children, ...props }) => (
  <div {...props} className={`card-actions ${twClasses(props.tw)}`}>
    {children}
  </div>
);
