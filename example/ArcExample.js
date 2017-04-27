import React from 'react';
import { Map, TileLayer, FeatureGroup, Marker } from 'react-leaflet'
import { Arc } from '../src'
import { divIcon } from 'leaflet'

const pathOne = {from:[50.14874640066278, 14.106445312500002], to:[49.866316729538674, 25.0927734375]}

export default class ArcExample extends React.Component {
  constructor() {
    super();
    this.state = {
      latngs: null
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(props) {
    let route;
    route = pathOne
    this.setState({ latngs: route });
  }

  render() {
    const icon = divIcon({ className: 'divicon' });
    let arc = this.state.latngs !=null ? <Arc position={this.state.latngs} option={{color: 'red', snakingSpeed: 12,vertices: 100, offset: 10}}/> : null
    return ( 
      <Map center={[45.616037,15.951813]} zoom={4} zoomControl={true}>
        <TileLayer
          url='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        {arc}
        <FeatureGroup onClick={this.handleClick}>
          <Marker position={[50.14874640066278, 14.106445312500002]} icon={icon} /></FeatureGroup>
        <Marker position={[49.866316729538674, 25.0927734375]} icon={icon}>
        </Marker>
      </Map>
    )
  }
}
