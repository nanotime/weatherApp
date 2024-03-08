import { useState } from 'react';
import { AiOutlineAim, AiOutlineClose, AiOutlineRight } from 'react-icons/ai';
import { SearchBar } from '@molecules/index';
import { Button } from '@atoms/index';
import { useKeyDown } from '@/utils/useKeydown';
import flatenizeTw from '@/utils/flatenizeTw';

type SearchListProps = {
  items: string[];
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
};

const computedPanelStyles = (show: boolean) => {
  const conditionalHide = show
    ? ['block', 'h-screen', 'w-full', 'bg-base-100', 'z-10']
    : ['hidden'];
  return flatenizeTw([
    ['panel', 'absolute', 'top-0', 'left-0', 'p-4'],
    conditionalHide,
  ]);
};

const computedListStyles = flatenizeTw([
  ['mt-2', 'p-3'],
  ['hover:border', 'border-gray-400', 'text-white'],
  ['flex', 'justify-between'],
]);

const SearchList: React.FC<SearchListProps> = ({ items, onClose }) => {
  return (
    <ul className="list-none mt-2">
      {items.map((item, index) => (
        <li
          className={computedListStyles}
          onClick={() => onClose(false)}
          key={index}
        >
          {item} <AiOutlineRight />
        </li>
      ))}
    </ul>
  );
};

export const NavBar = () => {
  const [showPanel, setShowPanel] = useState(false);

  useKeyDown((ev) => {
    if (ev.key === 'Escape') {
      setShowPanel(false);
    }
  });

  return (
    <nav className="flex justify-between relative p-4">
      <Button
        tw={['bg-gray-400', 'border-gray-400', 'text-white', 'z-10']}
        onClick={() => setShowPanel(!showPanel)}
      >
        Search for places
      </Button>
      <Button
        tw={['bg-gray-400', 'border-gray-400', 'text-white']}
        btnShape="btn-circle"
      >
        <AiOutlineAim size={20} />
      </Button>
      <div className={computedPanelStyles(showPanel)}>
        <div className="flex justify-end">
          <AiOutlineClose
            className="cursor-pointer"
            onClick={() => setShowPanel(false)}
          />
        </div>
        <SearchBar onClick={() => setShowPanel(false)} />
        <SearchList
          items={['Caracas', 'Ciudad de mexico']}
          onClose={setShowPanel}
        />
      </div>
    </nav>
  );
};
