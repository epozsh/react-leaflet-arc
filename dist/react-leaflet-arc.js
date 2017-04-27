(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-leaflet"), require("leaflet"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-leaflet", "leaflet"], factory);
	else if(typeof exports === 'object')
		exports["ReactLeaflet"] = factory(require("react"), require("react-leaflet"), require("leaflet"));
	else
		root["ReactLeaflet"] = factory(root["React"], root[undefined], root["L"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Arc = undefined;

	var _ArcComponent = __webpack_require__(1);

	var _ArcComponent2 = _interopRequireDefault(_ArcComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Arc = _ArcComponent2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactLeaflet = __webpack_require__(3);

	var _leaflet = __webpack_require__(4);

	var _leaflet2 = _interopRequireDefault(_leaflet);

	__webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	//import { arcs } from './test';


	var Arc = function (_Path) {
	  _inherits(Arc, _Path);

	  function Arc() {
	    _classCallCheck(this, Arc);

	    return _possibleConstructorReturn(this, (Arc.__proto__ || Object.getPrototypeOf(Arc)).apply(this, arguments));
	  }

	  _createClass(Arc, [{
	    key: 'createLeafletElement',

	    /*
	      createLeafletElement (props) {
	        const { position, option, ...options } = props
	        return L.arcs(position, option, this.getOptions(options))
	      }*/

	    value: function createLeafletElement(props) {
	      var position = props.position,
	          option = props.option,
	          options = _objectWithoutProperties(props, ['position', 'option']);

	      return _leaflet2.default.Polyline.Arc(position.from, position.to, option, this.getOptions(options));
	    }
	  }, {
	    key: 'updateLeafletElement',
	    value: function updateLeafletElement(fromProps, toProps) {
	      if (toProps.position !== fromProps.position) {
	        this.leafletElement._createLatLngs(line, toProps.position.from);
	      }
	      this.setStyleIfChanged(fromProps, toProps);
	    }
	  }]);

	  return Arc;
	}(_reactLeaflet.Path);

	Arc.propTypes = {
	  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
	  option: _react.PropTypes.object,
	  position: _react.PropTypes.object.isRequired
	};
	exports.default = Arc;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _arc = __webpack_require__(6);

	var _arc2 = _interopRequireDefault(_arc);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Transform L.LatLng to {x, y} object
	 * @param {L.LatLng} latlng
	 * @returns {{x: {number}, y: {number}}}
	 * @private
	 */
	var _latLngToXY = function _latLngToXY(latlng) {
	    return {
	        x: latlng.lng,
	        y: latlng.lat
	    };
	};

	/**
	 * Create array of L.LatLng objects from line produced by arc.js
	 * @param {object} line
	 * @param {L.LatLng} from
	 * @private
	 * @returns {Array}
	 */
	function _createLatLngs(line, from) {
	    if (line.geometries[0] && line.geometries[0].coords[0]) {
	        /**
	         * stores how many times arc is broken over 180 longitude
	         * @type {number}
	         */
	        var wrap = from.lng - line.geometries[0].coords[0][0] - 360;

	        return line.geometries.map(function (subLine) {
	            wrap += 360;
	            return subLine.coords.map(function (point) {
	                return L.latLng([point[1], point[0] + wrap]);
	            });
	        }).reduce(function (all, latlngs) {
	            return all.concat(latlngs);
	        });
	    } else {
	        return [];
	    }
	}

	if (!L) {
	    throw "Leaflet.js not included";
	} else if (!_arc2.default || !_arc2.default.GreatCircle) {
	    throw "arc.js not included";
	} else {
	    L.Polyline.Arc = function (from, to, options) {
	        from = L.latLng(from);
	        to = L.latLng(to);

	        var vertices = 10;
	        var arcOptions = {};
	        if (options) {
	            if (options.offset) {
	                arcOptions.offset = options.offset;
	                delete options.offset;
	            }
	            if (options.vertices) {
	                vertices = options.vertices;
	                delete options.vertices;
	            }
	        }

	        var generator = new _arc2.default.GreatCircle({ x: from.lng, y: from.lat }, { x: to.lng, y: to.lat });

	        var line = generator.Arc(vertices, arcOptions);

	        var newLine = L.polyline(line.geometries[0].coords.map(function (c) {
	            return c.reverse();
	        }), options);

	        var _updatePath = function _updatePath() {
	            newLine._renderer._updatearc(this);
	        };
	        if (newLine._map) {
	            updatePath();
	        }

	        var totalLength = newLine._path.getTotalLength() * 4;
	        newLine._path.classList.add('path-start');
	        newLine._path.style.strokeDashoffset = totalLength;
	        newLine._path.style.strokeDasharray = totalLength;
	        setTimeout(function (path) {
	            return function () {
	                path.style.strokeDashoffset = 0;
	            };
	        }(newLine._path), 200);

	        return newLine;
	    };
	}

	L.SVG.include({ //7
	    _updatearc: function _updatearc(layer) {
	        var newLine = layer._path;
	        var totalLength = newLine._path.getTotalLength() * 4;
	        newLine._path.classList.add('path-start');
	        newLine._path.style.strokeDashoffset = totalLength;
	        newLine._path.style.strokeDasharray = totalLength;
	        setTimeout(function (path) {
	            return function () {
	                path.style.strokeDashoffset = 0;
	            };
	        }(newLine._path), 200);
	    }
	});

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	var D2R = Math.PI / 180;
	var R2D = 180 / Math.PI;

	var Coord = function Coord(lon, lat) {
	    this.lon = lon;
	    this.lat = lat;
	    this.x = D2R * lon;
	    this.y = D2R * lat;
	};

	Coord.prototype.view = function () {
	    return String(this.lon).slice(0, 4) + ',' + String(this.lat).slice(0, 4);
	};

	Coord.prototype.antipode = function () {
	    var anti_lat = -1 * this.lat;
	    var anti_lon = this.lon < 0 ? 180 + this.lon : (180 - this.lon) * -1;
	    return new Coord(anti_lon, anti_lat);
	};

	var LineString = function LineString() {
	    this.coords = [];
	    this.length = 0;
	};

	LineString.prototype.move_to = function (coord) {
	    this.length++;
	    this.coords.push(coord);
	};

	var Arc = function Arc(properties) {
	    this.properties = properties || {};
	    this.geometries = [];
	};

	Arc.prototype.json = function () {
	    if (this.geometries.length <= 0) {
	        return { 'geometry': { 'type': 'LineString', 'coordinates': null },
	            'type': 'Feature', 'properties': this.properties
	        };
	    } else if (this.geometries.length == 1) {
	        return { 'geometry': { 'type': 'LineString', 'coordinates': this.geometries[0].coords },
	            'type': 'Feature', 'properties': this.properties
	        };
	    } else {
	        var multiline = [];
	        for (var i = 0; i < this.geometries.length; i++) {
	            multiline.push(this.geometries[i].coords);
	        }
	        return { 'geometry': { 'type': 'MultiLineString', 'coordinates': multiline },
	            'type': 'Feature', 'properties': this.properties
	        };
	    }
	};

	// TODO - output proper multilinestring
	Arc.prototype.wkt = function () {
	    var wkt_string = '';
	    var wkt = 'LINESTRING(';
	    var collect = function collect(c) {
	        wkt += c[0] + ' ' + c[1] + ',';
	    };
	    for (var i = 0; i < this.geometries.length; i++) {
	        if (this.geometries[i].coords.length === 0) {
	            return 'LINESTRING(empty)';
	        } else {
	            var coords = this.geometries[i].coords;
	            coords.forEach(collect);
	            wkt_string += wkt.substring(0, wkt.length - 1) + ')';
	        }
	    }
	    return wkt_string;
	};

	/*
	 * http://en.wikipedia.org/wiki/Great-circle_distance
	 *
	 */
	var GreatCircle = function GreatCircle(start, end, properties) {
	    if (!start || start.x === undefined || start.y === undefined) {
	        throw new Error("GreatCircle constructor expects two args: start and end objects with x and y properties");
	    }
	    if (!end || end.x === undefined || end.y === undefined) {
	        throw new Error("GreatCircle constructor expects two args: start and end objects with x and y properties");
	    }
	    this.start = new Coord(start.x, start.y);
	    this.end = new Coord(end.x, end.y);
	    this.properties = properties || {};

	    var w = this.start.x - this.end.x;
	    var h = this.start.y - this.end.y;
	    var z = Math.pow(Math.sin(h / 2.0), 2) + Math.cos(this.start.y) * Math.cos(this.end.y) * Math.pow(Math.sin(w / 2.0), 2);
	    this.g = 2.0 * Math.asin(Math.sqrt(z));

	    if (this.g == Math.PI) {
	        throw new Error('it appears ' + start.view() + ' and ' + end.view() + " are 'antipodal', e.g diametrically opposite, thus there is no single route but rather infinite");
	    } else if (isNaN(this.g)) {
	        throw new Error('could not calculate great circle between ' + start + ' and ' + end);
	    }
	};

	/*
	 * http://williams.best.vwh.net/avform.htm#Intermediate
	 */
	GreatCircle.prototype.interpolate = function (f) {
	    var A = Math.sin((1 - f) * this.g) / Math.sin(this.g);
	    var B = Math.sin(f * this.g) / Math.sin(this.g);
	    var x = A * Math.cos(this.start.y) * Math.cos(this.start.x) + B * Math.cos(this.end.y) * Math.cos(this.end.x);
	    var y = A * Math.cos(this.start.y) * Math.sin(this.start.x) + B * Math.cos(this.end.y) * Math.sin(this.end.x);
	    var z = A * Math.sin(this.start.y) + B * Math.sin(this.end.y);
	    var lat = R2D * Math.atan2(z, Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)));
	    var lon = R2D * Math.atan2(y, x);
	    return [lon, lat];
	};

	/*
	 * Generate points along the great circle
	 */
	GreatCircle.prototype.Arc = function (npoints, options) {
	    var first_pass = [];
	    if (!npoints || npoints <= 2) {
	        first_pass.push([this.start.lon, this.start.lat]);
	        first_pass.push([this.end.lon, this.end.lat]);
	    } else {
	        var delta = 1.0 / (npoints - 1);
	        for (var i = 0; i < npoints; ++i) {
	            var step = delta * i;
	            var pair = this.interpolate(step);
	            first_pass.push(pair);
	        }
	    }
	    /* partial port of dateline handling from:
	      gdal/ogr/ogrgeometryfactory.cpp
	      TODO - does not handle all wrapping scenarios yet
	    */
	    var bHasBigDiff = false;
	    var dfMaxSmallDiffLong = 0;
	    // from http://www.gdal.org/ogr2ogr.html
	    // -datelineoffset:
	    // (starting with GDAL 1.10) offset from dateline in degrees (default long. = +/- 10deg, geometries within 170deg to -170deg will be splited)
	    var dfDateLineOffset = options && options.offset ? options.offset : 10;
	    var dfLeftBorderX = 180 - dfDateLineOffset;
	    var dfRightBorderX = -180 + dfDateLineOffset;
	    var dfDiffSpace = 360 - dfDateLineOffset;

	    // https://github.com/OSGeo/gdal/blob/7bfb9c452a59aac958bff0c8386b891edf8154ca/gdal/ogr/ogrgeometryfactory.cpp#L2342
	    for (var j = 1; j < first_pass.length; ++j) {
	        var dfPrevX = first_pass[j - 1][0];
	        var dfX = first_pass[j][0];
	        var dfDiffLong = Math.abs(dfX - dfPrevX);
	        if (dfDiffLong > dfDiffSpace && (dfX > dfLeftBorderX && dfPrevX < dfRightBorderX || dfPrevX > dfLeftBorderX && dfX < dfRightBorderX)) {
	            bHasBigDiff = true;
	        } else if (dfDiffLong > dfMaxSmallDiffLong) {
	            dfMaxSmallDiffLong = dfDiffLong;
	        }
	    }

	    var poMulti = [];
	    if (bHasBigDiff && dfMaxSmallDiffLong < dfDateLineOffset) {
	        var poNewLS = [];
	        poMulti.push(poNewLS);
	        for (var k = 0; k < first_pass.length; ++k) {
	            var dfX0 = parseFloat(first_pass[k][0]);
	            if (k > 0 && Math.abs(dfX0 - first_pass[k - 1][0]) > dfDiffSpace) {
	                var dfX1 = parseFloat(first_pass[k - 1][0]);
	                var dfY1 = parseFloat(first_pass[k - 1][1]);
	                var dfX2 = parseFloat(first_pass[k][0]);
	                var dfY2 = parseFloat(first_pass[k][1]);
	                if (dfX1 > -180 && dfX1 < dfRightBorderX && dfX2 == 180 && k + 1 < first_pass.length && first_pass[k - 1][0] > -180 && first_pass[k - 1][0] < dfRightBorderX) {
	                    poNewLS.push([-180, first_pass[k][1]]);
	                    k++;
	                    poNewLS.push([first_pass[k][0], first_pass[k][1]]);
	                    continue;
	                } else if (dfX1 > dfLeftBorderX && dfX1 < 180 && dfX2 == -180 && k + 1 < first_pass.length && first_pass[k - 1][0] > dfLeftBorderX && first_pass[k - 1][0] < 180) {
	                    poNewLS.push([180, first_pass[k][1]]);
	                    k++;
	                    poNewLS.push([first_pass[k][0], first_pass[k][1]]);
	                    continue;
	                }

	                if (dfX1 < dfRightBorderX && dfX2 > dfLeftBorderX) {
	                    // swap dfX1, dfX2
	                    var tmpX = dfX1;
	                    dfX1 = dfX2;
	                    dfX2 = tmpX;
	                    // swap dfY1, dfY2
	                    var tmpY = dfY1;
	                    dfY1 = dfY2;
	                    dfY2 = tmpY;
	                }
	                if (dfX1 > dfLeftBorderX && dfX2 < dfRightBorderX) {
	                    dfX2 += 360;
	                }

	                if (dfX1 <= 180 && dfX2 >= 180 && dfX1 < dfX2) {
	                    var dfRatio = (180 - dfX1) / (dfX2 - dfX1);
	                    var dfY = dfRatio * dfY2 + (1 - dfRatio) * dfY1;
	                    poNewLS.push([first_pass[k - 1][0] > dfLeftBorderX ? 180 : -180, dfY]);
	                    poNewLS = [];
	                    poNewLS.push([first_pass[k - 1][0] > dfLeftBorderX ? -180 : 180, dfY]);
	                    poMulti.push(poNewLS);
	                } else {
	                    poNewLS = [];
	                    poMulti.push(poNewLS);
	                }
	                poNewLS.push([dfX0, first_pass[k][1]]);
	            } else {
	                poNewLS.push([first_pass[k][0], first_pass[k][1]]);
	            }
	        }
	    } else {
	        // add normally
	        var poNewLS0 = [];
	        poMulti.push(poNewLS0);
	        for (var l = 0; l < first_pass.length; ++l) {
	            poNewLS0.push([first_pass[l][0], first_pass[l][1]]);
	        }
	    }

	    var arc = new Arc(this.properties);
	    for (var m = 0; m < poMulti.length; ++m) {
	        var line = new LineString();
	        arc.geometries.push(line);
	        var points = poMulti[m];
	        for (var j0 = 0; j0 < points.length; ++j0) {
	            line.move_to(points[j0]);
	        }
	    }
	    return arc;
	};

	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	    // nodejs
	    module.exports.Coord = Coord;
	    module.exports.Arc = Arc;
	    module.exports.GreatCircle = GreatCircle;
	} else {
	    // browser
	    var arc = {};
	    arc.Coord = Coord;
	    arc.Arc = Arc;
	    arc.GreatCircle = GreatCircle;
	}

/***/ }
/******/ ])
});
;