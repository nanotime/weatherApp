import { HightlightCard } from '@/Atoms';
import { useWeather } from '@/Store/Weather';

export const Visibility = () => {
  const visibility = useWeather((s) => s.visibility);
  return (
    <HightlightCard title="Visibility">
      <p className="text-6xl" data-testid="visibility-value">
        {visibility} km
      </p>
      {/* Just to keep the same alignment as the other cards */}
      <span />
    </HightlightCard>
  );
};
