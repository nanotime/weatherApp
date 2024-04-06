import { useEffect, useState } from 'react';

const useGeo = () => {
  const [position, setPosition] = useState<GeolocationCoordinates>();
  const [error, setError] = useState<GeolocationPositionError | string | null>(
    null
  );

  useEffect(() => {
    const success = (pos: GeolocationPosition) => setPosition(pos.coords);
    const fail = (err: GeolocationPositionError) => setError(err);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, fail);
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  }, []);

  return { position, error };
};

export default useGeo;
