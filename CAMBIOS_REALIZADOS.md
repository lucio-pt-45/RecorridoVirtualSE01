# Versión 1.1

# Cambios y modificaciones realizadas

Fecha de actualización: 9 de septiembre de 2026.

## Minimapa interactivo

- Se añadió un minimapa interactivo al recorrido de Marzipano.
- El minimapa utiliza la vista arquitectónica numerada del lote como imagen base:
  `RecorridoVirtualSE01/img/mapa-terreno-numerado.jpg`.
- El mapa queda abierto por defecto al cargar el recorrido.
- Se añadieron marcadores para las cámaras incluidas en el plano.
- Al seleccionar un marcador, el recorrido cambia a la escena correspondiente.
- La cámara activa se resalta en color naranja.
- Se añadió un indicador direccional naranja que se actualiza en tiempo real
  según la orientación de la vista panorámica.

## Ubicación de cámaras

- Se recalcularon las posiciones de las cámaras usando la imagen con números
  rojos proporcionada por el cliente.
- Las posiciones están centralizadas en el objeto `mapPositions` de
  `RecorridoVirtualSE01/index.js`.
- No se muestra “Suplementaria 1” en el minimapa, ya que el plano no incluye
  la ubicación o el número 17 para esa escena.

## Calibración de orientación

- Se implementó una calibración de orientación independiente para cada
  panorama, porque las referencias angulares de las capturas no son iguales.
- La configuración está en `sceneMapYawOffsets` dentro de
  `RecorridoVirtualSE01/index.js`.
- Las 20 cámaras visibles en el minimapa están calibradas: 19 con desfase
  específico por escena y “Vista aérea general” con el desfase predeterminado
  de 132 grados.
- Se añadió una herramienta temporal de lectura de orientación que muestra los
  ejes X (yaw), Y (pitch), el rumbo del panorama y el rumbo del minimapa.
- La herramienta temporal permanece instalada, pero está oculta. Se puede
  volver a mostrar cambiando `display: none` por `display: block` en
  `RecorridoVirtualSE01/orientation-calibration.css`.
- Se eliminó la rosa de los vientos que se mostraba alrededor de la cámara
  “Vista aérea general”.

## Archivos modificados o añadidos

- `RecorridoVirtualSE01/index.html`: estructura del minimapa, carga de la
  herramienta temporal y mapa abierto por defecto.
- `RecorridoVirtualSE01/index.js`: marcadores, navegación desde el mapa,
  actualización del indicador direccional y calibraciones por cámara.
- `RecorridoVirtualSE01/style.css`: apariencia y distribución del minimapa.
- `RecorridoVirtualSE01/orientation-calibration.js`: lógica temporal de
  lectura de orientación.
- `RecorridoVirtualSE01/orientation-calibration.css`: apariencia de la
  herramienta temporal; actualmente oculta.
- `RecorridoVirtualSE01/img/mapa-terreno-numerado.jpg`: imagen base numerada
  del minimapa.
- `LICENSE.txt`: aviso de que la versión fue modificada por PARRA Y PARRA y
  que se respetan los derechos y licencias de los autores originales.

## Pendiente

- Si en el futuro se proporciona la ubicación de “Suplementaria 1” (número
  17), se puede volver a incorporar su marcador y calibrar su orientación.
