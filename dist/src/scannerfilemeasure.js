'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = scannerFileMeasure;


function scannerFileMeasure() {
    var UNITS = ['cm', 'in'];
    var MEGABYTE = 1048576;

    var bitspixel = 8;
    var page = {
        width: 0,
        height: 0
    };

    var unit = 'cm';
    var rh = void 0,
        rv = void 0;

    return {
        setPage: setPage,
        setUnit: setUnit,
        setResolution: setResolution,
        getDimension: getBytesDimensiones,
        bits: bitspixel

        /**
         * @desc Configura ancho y alto de la página física
         * @param {int} width ancho de la página
         * @param {int} height alto de la página
         */
    };function setPage(width, height) {
        var isNumber = Number.isInteger(width) && Number.isInteger(height) && width > 0 && height > 0;

        if (!isNumber) throw 'Error en las dimensiones';

        page.width = width;
        page.height = height;

        return page.width + ' / ' + page.height;
    }

    /**
     * @desc Configuración de la unidad de medida de la hoja
     * @param {string} _unit_ 
     */
    function setUnit(_unit_) {
        if (UNITS.indexOf(_unit_) == -1) throw 'Error unidad de medida, sólo  cm y in';

        unit = _unit_;

        return unit;
    }

    /**
     * @desc Configuración de la resolución del escanner
     * @param {int} _rh_ resolucion horizontal
     * @param {int} _rv_ resolucion vertical
     */
    function setResolution(_rh_, _rv_) {
        var isNumber = Number.isInteger(_rh_) && Number.isInteger(_rv_) && _rh_ > 0 && _rv_ > 0;

        if (!isNumber) throw 'Error en las resoluciones';

        rh = _rh_;
        rv = _rv_;

        return rv + ' / ' + rh;
    }

    /**
     * @desc obtiene el valor en Mb del tamaño del archivo escaneado
     * @return {string} mensaje de salida con el tamaño
     */
    function getBytesDimensiones() {
        var isReady = page.width > 0 && page.height > 0 && rh > 0 && rv > 0;

        if (!isReady) throw 'Configurar página, resolución y unidad de medida';

        var npixel = Math.round(page.width * 1 / 2.54 * rh * (page.height * 1 / 2.54 * rv));
        var nbits = bitspixel * npixel * 1 / bitspixel / MEGABYTE;

        return Number(nbits.toFixed(2));
    }
}