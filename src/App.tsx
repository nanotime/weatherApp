import { useEffect } from 'react';
import flatenizeTw from '@utils/flatenizeTw';
import { Content, Sidebar } from '@organisms/index';
import { setGeo, setLocale } from '@/Store/AppConfigs';
import { useGeolocation } from 'react-use';

import './index.css';

const mainClasses = flatenizeTw([['md:grid', 'md:grid-cols-6']]);

const userLocales =
  navigator.languages && navigator.languages.length
    ? navigator.languages
    : navigator.language;

function App() {
  const { latitude, longitude } = useGeolocation();

  useEffect(() => {
    if (latitude && longitude) setGeo(latitude, longitude);
    setLocale(userLocales);
  }, [latitude, longitude]);

  return (
    <main className={mainClasses}>
      <Sidebar />
      <Content />
    </main>
  );
}

export default App;
