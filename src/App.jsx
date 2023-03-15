import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import './styles/index.css'

const App = () => {
  const defaultState = {
    center: [55.751574, 37.573856],
    zoom: 5,
  };

  return (
    <YMaps>
      Beer
      <h1 className='text-lg font-serif font-bold text-rose-600'>MAP</h1>
      <Map defaultState={defaultState} width="80vw" height="80vh">
        <Placemark geometry={[55.684758, 37.738521]} />
      </Map>
    </YMaps>
  );
}

export default App