import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

import "./styles/index.css";
import marker1 from "./assets/icons/marker1.png";

const App = () => {
  const defaultState = {
    center: [55.751574, 37.573856],
    zoom: 5,
  };

  return (
    <YMaps>
      Beer
      <h1 className="text-lg font-serif font-bold text-rose-600">MAP</h1>
      <Map
        defaultState={defaultState}
        modules={["layout.ImageWithContent"]}
        width="80vw"
        height="80vh"
      >
        <Placemark
          options={{
            balloonContent: "beer",
            iconLayout: "default#imageWithContent",
            iconImageHref: marker1,
            iconImageSize: [40, 40],
            iconImageOffset: [0, 0],
            iconContentLayout: "<div>HUI</div>",
          }}
          geometry={[55.684758, 37.738521]}
        />
      </Map>
    </YMaps>
  );
};

export default App;
