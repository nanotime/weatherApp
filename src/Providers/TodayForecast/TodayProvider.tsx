import React, { FC, useState } from 'react';
import { TodayForecast } from '@/Model/TodayForecast';
import { TodayForecastCtx } from './TodayCtxt';
import { todayCtxInitial } from '../constants';
export const TodayForecastProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [forecast, setForecast] = useState<TodayForecast>(
    todayCtxInitial.todayForecast
  );
  return (
    <TodayForecastCtx.Provider value={{ todayForecast: forecast, setForecast }}>
      {children}
    </TodayForecastCtx.Provider>
  );
};
