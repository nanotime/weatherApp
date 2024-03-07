import { FC, useState } from 'react';
import twClasses from '@utils/twClasses';
import nulishCheck from '@/utils/nulishCheck';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  tw?: string[];
  theme?:
    | 'input-bordered'
    | 'input-primary'
    | 'input-secondary'
    | 'input-accent'
    | 'input-ghost';
  size?: 'input-xs' | 'input-sm' | 'input-md' | 'input-lg';
  status?: 'input-success' | 'input-error' | 'input-warning' | 'input-info';
};

/**
 * Renders an input component with the specified placeholder, theme, size, status, value, and additional props.
 *
 * @param {Props} placeholder - The placeholder for the input field.
 * @param {string} tw - The Tailwind CSS classes for styling.
 * @param {string} theme - The theme for the input component.
 * @param {string} size - The size of the input component.
 * @param {string} status - The status of the input component.
 * @param {string} value - The value of the input component.
 * @param {...any} props - Additional props for the input component.
 * @return {JSX.Element} The input component.
 */
export const Input: FC<Props> = ({
  placeholder,
  tw,
  theme,
  size,
  status,
  value,
  ...props
}) => {
  const [innerValue, setInnerValue] = useState(value ?? '');

  return (
    <input
      {...props}
      type={props.type ?? 'text'}
      placeholder={placeholder ?? placeholder}
      className={`input ${nulishCheck([theme, size, status])} ${twClasses(tw)}`}
      value={innerValue}
      onChange={(e) => {
        setInnerValue(e.target.value);
        props.onChange?.(e);
      }}
      onBlur={(e) => {
        setInnerValue(e.target.value);
        props.onBlur?.(e);
      }}
    />
  );
};
