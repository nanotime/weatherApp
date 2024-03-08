import { HightlightCard } from '@/Atoms';
import { useWeather } from '@/Store/Weather';

export const Humidity = () => {
  const humidity = useWeather((s) => s.main.humidity);

  return (
    <HightlightCard tw={['mt-2', 'md:mt-0']} title="Humidity">
      <p className="text-6xl">{humidity}%</p>
      <div data-testid="humidity-bar">
        <div className="flex justify-between" data-testid="humidity-bar-labels">
          <span>0%</span>
          <span>50%</span>
          <span>100%</span>
        </div>

        <progress
          data-testid="humidity-bar-progress"
          className="progress progress-warning w-full rounded"
          value={humidity}
          max="100"
        />

        <div className="flex justify-end">
          <span>%</span>
        </div>
      </div>
    </HightlightCard>
  );
};
