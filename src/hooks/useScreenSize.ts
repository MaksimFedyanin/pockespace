import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

const useScreenSize = () => {
  const [screen, setScreen] = useState(Dimensions.get('screen'));
  const [window, setWindow] = useState(Dimensions.get('window'));

  useEffect(() => {
    const handleChange = ({ screen, window: win }) => {
      setScreen(screen);
      setWindow(win);
    };

    Dimensions.addEventListener('change', handleChange);

    return () => {
      Dimensions.removeEventListener('change', handleChange);
    };
  }, []);

  return [window, screen];
};

export default useScreenSize;
