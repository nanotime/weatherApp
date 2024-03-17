import { create } from 'zustand';
import { type AppConfig } from '@/Model/AppConfig';

export const useAppConfigs = create<AppConfig>()(() => ({
  name: 'Weatherify X',
  version: '0.0.1',
  description: 'An app to check the weather',
  author: {
    name: 'Javier Marin',
    email: 'nano.world.contact@gmail.com',
  },
  geo: {
    latitude: 0,
    longitude: 0,
  },
  locale: [''],
}));

export const setGeo = (latitude: number, longitude: number) => {
  useAppConfigs.setState({ geo: { latitude, longitude } });
};

export const setLocale = (locale: string | readonly string[]) => {
  useAppConfigs.setState({ locale });
};
