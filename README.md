# SCANNER FILE MEASURE

## Description

Módulo para obtener las dimensiones de salida en bytes a partir de las dimensiones físicas del elemento a escanear.

 - Configura ancho y alto de la página física
 - Configuración de la unidad de medida de la hoja 
 - Configuración de la resolución del escanner
 - Setear profundidad de bits (8, 24, 32)
 - obtiene el valor en Mb del tamaño del archivo escaneado

## Instalación

```
npm install scannerfilemeasure
```

## Uso

```
import scannerFileMeasure from scannerfilemeasure

var sfm = scannerFileMeasure()
sfm.setPage(w,h) // ancho - alto
sfm.setUnit(unidad) // cm o in
sfm.setResolution(rh,rv) // resolución horizontal , resolución vertical
sfm.bits = 8 // default: 8 - otras: 24, 32
sfm.getDimension()  // return MB file size in number format
```
