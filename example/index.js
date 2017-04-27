import React from 'react';
import { render } from 'react-dom';
import ArcExample from "./ArcExample";



const example = (
  <div>
    <h1>React-Leaflet-Arc Example</h1>
    <ArcExample />
  </div>
)

render(example, document.getElementById('app'));