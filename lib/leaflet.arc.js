"use strict";

var _arc = require("./arc");

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