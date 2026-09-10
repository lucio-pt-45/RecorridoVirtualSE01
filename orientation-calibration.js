/* Temporal: lectura de ejes para calibrar el rumbo del minimapa. */
(function() {
  'use strict';

  var panel = document.createElement('div');
  panel.id = 'orientationCalibration';
  panel.hidden = true;
  panel.innerHTML =
    '<strong>Calibración de orientación</strong>' +
    '<div class="orientation-values">' +
      '<span>Escena</span><span id="calibrationScene">—</span>' +
      '<span>Eje X · yaw</span><span id="calibrationYaw">—</span>' +
      '<span>Eje Y · pitch</span><span id="calibrationPitch">—</span>' +
      '<span>Rumbo panorama</span><span id="calibrationHeading">—</span>' +
      '<span>Rumbo minimapa</span><span id="calibrationMapHeading">—</span>' +
    '</div>';
  document.body.appendChild(panel);

  var sceneElement = document.querySelector('#calibrationScene');
  var yawElement = document.querySelector('#calibrationYaw');
  var pitchElement = document.querySelector('#calibrationPitch');
  var headingElement = document.querySelector('#calibrationHeading');
  var mapHeadingElement = document.querySelector('#calibrationMapHeading');

  function degrees(radians) {
    return radians * 180 / Math.PI;
  }

  function normalize(value) {
    return ((value % 360) + 360) % 360;
  }

  function format(value) {
    return normalize(value).toFixed(1) + '°';
  }

  window.addEventListener('orientation-calibration-update', function(event) {
    var orientation = event.detail;
    var rawHeading = degrees(orientation.yaw);
    var pitch = degrees(orientation.pitch);

    sceneElement.textContent = orientation.sceneName;
    yawElement.textContent = rawHeading.toFixed(1) + '°';
    pitchElement.textContent = pitch.toFixed(1) + '°';
    headingElement.textContent = format(rawHeading) + ' (N=0°)';
    mapHeadingElement.textContent = format(orientation.mapHeading) + ' (N=0°)';
  });
})();
