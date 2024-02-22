import { Dispatch, SetStateAction, createContext } from 'react';
import { TodayForecast } from '@models/TodayForecast';
import { todayCtxInitial } from '../constants';

export type TodayCtx = {
  todayForecast: TodayForecast;
  setForecast: Dispatch<SetStateAction<TodayForecast>>;
};

const TodayForecastCtx = createContext<TodayCtx>(todayCtxInitial);

export { TodayForecastCtx };
