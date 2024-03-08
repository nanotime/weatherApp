import { HightlightCard } from '@/Atoms';
import { useWeather } from '@/Store/Weather';

export const Pressure = () => {
  const pressure = useWeather((s) => s.main.pressure);
  return (
    <HightlightCard title="Air pressure" tw={['mt-2', 'md:mt-0']}>
      <p className="text-6xl" data-testid="pressure-value">
        {pressure} mb
      </p>
      {/* Just to keep the same alignment as the other cards */}
      <span />
    </HightlightCard>
  );
};
