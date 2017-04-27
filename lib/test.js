'use strict';

var _arc = require('./arc');

var _arc2 = _interopRequireDefault(_arc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

L.Arc = L.Polyline.extend({
				options: {},

				initialize: function initialize(path, options) {
								//1
								L.setOptions(this, options);
								this._initialUpdate = true;
								this._setLatLngs(path);
				},

				getPath: function getPath() {
								return this._coords;
				},

				setPath: function setPath(path, options) {
								this._initialUpdate = true;
								this._setPath(path);
								return this.redraw();
				},

				_setLatLngs: function _setLatLngs(path) {
								//2
								this._coords = path;
								this._bounds = new L.LatLngBounds();
								this._latlngs = this._convertLatLngs(this._computeLatLngs());
				},

				_computeLatLngs: function _computeLatLngs() {
								//3
								var from = L.latLng(this._coords.from);
								var to = L.latLng(this._coords.to);
								var options = this.options;
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

								line = line.geometries[0].coords.map(function (c) {
												return c.reverse();
								});

								return line;
				},
				getBounds: function getBounds() {
								return this._bounds;
				}
});

L.arcs = function (path, options) {
				var a = new L.Arc(path, options);
				console.log(a);
				return a;
};

/*
L.SVG.include({//7
    _updatearc: function (layer) {
        var path = layer._path;
        var length = 139.97659301757812//path.getTotalLength();
        debugger
        path.animate([
            { strokeDashoffset: length },
            { strokeDashoffset: 0 }
        ], 3000);
        //layer._initialUpdate = false;

    }
});*/

L.Polyline.include({

				// Hi-res timestamp indicating when the last calculations for vertices and
				// distance took place.
				_snakingTimestamp: 0,

				// How many rings and vertices we've already visited
				// Yeah, yeah, "rings" semantically only apply to polygons, but L.Polyline
				// internally uses that nomenclature.
				_snakingRings: 0,
				_snakingVertices: 0,

				// Distance to draw (in screen pixels) since the last vertex
				_snakingDistance: 0,

				// Flag
				_snaking: false,

				/// TODO: accept a 'map' parameter, fall back to addTo() in case
				/// performance.now is not available.
				snakeIn: function snakeIn() {
								debugger;
								if (this._snaking) {
												return;
								}

								if (!('performance' in window) || !('now' in window.performance) || !this._map) {
												return;
								}

								this._snaking = true;
								this._snakingTime = performance.now();
								this._snakingVertices = this._snakingRings = this._snakingDistance = 0;

								if (!this._snakeLatLngs) {
												this._snakeLatLngs = L.Polyline._flat(this._latlngs) ? [this._latlngs] : this._latlngs;
								}

								// Init with just the first (0th) vertex in a new ring
								// Twice because the first thing that this._snake is is chop the head.
								this._latlngs = [[this._snakeLatLngs[0][0], this._snakeLatLngs[0][0]]];

								this._update();
								this._snake();
								this.fire('snakestart');
								return this;
				},

				_snake: function _snake() {

								var now = performance.now();
								var diff = now - this._snakingTime; // In milliseconds
								var forward = diff * this.options.snakingSpeed / 1000; // In pixels
								this._snakingTime = now;

								// Chop the head from the previous frame
								this._latlngs[this._snakingRings].pop();

								return this._snakeForward(forward);
				},

				_snakeForward: function _snakeForward(forward) {

								// Calculate distance from current vertex to next vertex
								var currPoint = this._map.latLngToContainerPoint(this._snakeLatLngs[this._snakingRings][this._snakingVertices]);
								var nextPoint = this._map.latLngToContainerPoint(this._snakeLatLngs[this._snakingRings][this._snakingVertices + 1]);

								var distance = currPoint.distanceTo(nextPoint);

								// 		console.log('Distance to next point:', distance, '; Now at: ', this._snakingDistance, '; Must travel forward:', forward);
								// 		console.log('Vertices: ', this._latlngs);

								if (this._snakingDistance + forward > distance) {
												// Jump to next vertex
												this._snakingVertices++;
												this._latlngs[this._snakingRings].push(this._snakeLatLngs[this._snakingRings][this._snakingVertices]);

												if (this._snakingVertices >= this._snakeLatLngs[this._snakingRings].length - 1) {
																if (this._snakingRings >= this._snakeLatLngs.length - 1) {
																				return this._snakeEnd();
																} else {
																				this._snakingVertices = 0;
																				this._snakingRings++;
																				this._latlngs[this._snakingRings] = [this._snakeLatLngs[this._snakingRings][this._snakingVertices]];
																}
												}

												this._snakingDistance -= distance;
												return this._snakeForward(forward);
								}

								this._snakingDistance += forward;

								var percent = this._snakingDistance / distance;

								var headPoint = nextPoint.multiplyBy(percent).add(currPoint.multiplyBy(1 - percent));

								// Put a new head in place.
								var headLatLng = this._map.containerPointToLatLng(headPoint);
								this._latlngs[this._snakingRings].push(headLatLng);

								this.setLatLngs(this._latlngs);
								this.fire('snake');
								L.Util.requestAnimFrame(this._snake, this);
				},

				_snakeEnd: function _snakeEnd() {

								this.setLatLngs(this._snakeLatLngs);
								this._snaking = false;
								this.fire('snakeend');
				}

});

L.Polyline.mergeOptions({
				snakingSpeed: 200 // In pixels/sec
});

/*
L.SVG.include({//7
    _updatearc: function (layer) {
        var newLine = layer;
        var totalLength = newLine._path.getTotalLength() * 4;
        newLine._path.classList.add('path-start');
        newLine._path.style.strokeDashoffset = totalLength;
        newLine._path.style.strokeDasharray = totalLength;
        setTimeout((function (path) {
            return function () {
                path.style.strokeDashoffset = 0;
            };
        })(newLine._path), 200);
    }
});*/