import { HightlightCard } from '@/Atoms';
import { AiFillLeftCircle } from 'react-icons/ai';
import { useWeather } from '@/Store/Weather';

export const WindStatus = () => {
  const wind = useWeather((state) => state.wind);

  return (
    <HightlightCard title="Wind status">
      <p className="text-6xl">{wind.speed} Kph</p>
      <div>
        <p className={`flex align-middle justify-center items-center gap-5`}>
          <AiFillLeftCircle
            data-testid="wind-direction-icon"
            size={30}
            style={{ transform: `rotate(${wind.deg}deg)` }}
          />
          Wind direction
        </p>
      </div>
    </HightlightCard>
  );
};
