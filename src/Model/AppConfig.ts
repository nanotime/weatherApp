export type AppConfig = {
  name: string;
  version: string;
  description: string;
  author: {
    name: string;
    email: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  locale: string | readonly string[];
};
