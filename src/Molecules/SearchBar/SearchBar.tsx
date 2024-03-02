import { FC } from 'react';
import { Input, Button } from '@atoms/index';

type Props = {
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
};

export const SearchBar: FC<Props> = ({
  value = '',
  onChange,
  onBlur,
  onClick,
}) => {
  return (
    <section className="grid grid-cols-3 gap-2 mt-4">
      <Input
        theme="input-bordered"
        placeholder="Search location"
        tw={['col-span-2']}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <Button tw={['col-span-1']} onClick={onClick}>
        Search
      </Button>
    </section>
  );
};
