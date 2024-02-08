import { FC } from 'react';
import twClasses from '@utils/twClasses';
import nulishCheck from '@utils/nulishCheck';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  theme?:
    | 'btn-primary'
    | 'btn-secondary'
    | 'btn-accent'
    | 'btn-ghost'
    | 'btn-link';
  btnType?: 'btn-outline' | 'btn-active' | 'btn-disabled' | 'glass';
  size?: 'btn-xs' | 'btn-sm' | 'btn-md' | 'btn-lg' | 'btn-wide';
  btnShape?: 'btn-circle' | 'btn-square' | 'btn-block';
  tw?: string[];
};

/**
 * Renders a button with the specified theme and tailwind classes.
 *
 * @param {ReactNode} children - The content to be displayed inside the button
 * @param {string} theme - The theme of the button (default: 'btn-primary')
 * @param {string[]} tw - An array of tailwind classes to be applied to the button
 * @return {ReactElement} The rendered button component
 */
export const Button: FC<Props> = ({
  children,
  theme = 'btn-primary',
  size = 'btn-md',
  btnShape,
  tw,
  ...props
}) => (
  <button
    {...props}
    className={`btn ${nulishCheck([theme, btnShape, size])} ${twClasses(tw)}`}
    onClick={props.onClick}
  >
    {children}
  </button>
);
