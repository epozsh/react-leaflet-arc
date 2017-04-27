import React, { PropTypes } from 'react';
import { Path } from 'react-leaflet';
import L from 'leaflet'
import  './leaflet.arc';
//import { arcs } from './test';


export default class Arc extends Path {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    option:PropTypes.object,
    position: PropTypes.object.isRequired
  };
/*
  createLeafletElement (props) {
    const { position, option, ...options } = props
    return L.arcs(position, option, this.getOptions(options))
  }*/

  
  createLeafletElement (props) {
    const { position, option, ...options } = props
    return L.Polyline.Arc(position.from, position.to, option,this.getOptions(options))
  }

  updateLeafletElement (fromProps, toProps) {
    if (toProps.position !== fromProps.position) {
      this.leafletElement._createLatLngs(line, toProps.position.from)
    }
    this.setStyleIfChanged(fromProps, toProps)
  }
}
