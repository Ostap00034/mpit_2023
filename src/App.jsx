import React from 'react'
import {
  YMaps,
  Map,
  Placemark,
  GeolocationControl,
} from '@pbe/react-yandex-maps'
// import useAuth from './hooks/useAuth'

import './styles/index.css'
import marker1 from './assets/icons/marker1.png'

const App = () => {
  // const { isAuth, email, id, phoneNumber } = useAuth()

  // console.log(isAuth)

  return (
    <YMaps
      query={{
        apikey: 'ccc18204-547d-4626-a187-3251f258a2d0',
        ns: 'use-load-option',
        load: 'Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon',
      }}
    >
      Beer
      <h1 className="text-lg font-serif font-bold text-rose-600">MAP</h1>
      <div>
        <ul>
          <li>
            <a href={`/registration`}>Registration</a>
          </li>
          <li>
            <a href={`/authorization`}>Authorization</a>
          </li>
          <li>
            <a href={`/request`}>Requests</a>
          </li>
        </ul>
      </div>
      <Map
        defaultState={{
          center: [62.0397, 129.7422],
          zoom: 20,
          controls: ['zoomControl', 'fullscreenControl'],
        }}
        modules={['layout.ImageWithContent']}
        width="80vw"
        height="80vh"
      >
        <GeolocationControl options={{ float: 'left' }} />
        <Placemark
          options={{
            iconLayout: 'default#imageWithContent',
            iconImageHref: marker1,
            iconImageSize: [40, 40],
            iconImageOffset: [0, 0],
          }}
          properties={{
            balloonContent: `<h1 className='text-lg font-mono font-bold'>BEEER</h1>`,
          }}
          modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
          geometry={[55.684758, 37.738521]}
        />
      </Map>
    </YMaps>
  )
}

export default App
