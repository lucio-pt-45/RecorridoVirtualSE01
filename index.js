/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';
// Bloquear únicamente teléfonos móviles.
// Permitir computadores y tablets (iPad y Android).

const ua = navigator.userAgent;

const isiPhone = /iPhone/i.test(ua);

const isAndroidPhone =
    /Android/i.test(ua) &&
    /Mobile/i.test(ua);

if (isiPhone || isAndroidPhone) {

    document.body.innerHTML = `
        <div style="
            display:flex;
            justify-content:center;
            align-items:center;
            height:100vh;
            background:#1d2939;
            color:white;
            font-family:Arial, sans-serif;
            text-align:center;
            padding:40px;
        ">
            <div style="max-width:500px">

                <h1 style="margin-bottom:20px;">
                    Recorrido optimizado para computador o tablet
                </h1>

                <p style="font-size:18px; line-height:1.6;">
                    Este recorrido virtual fue diseñado para visualizarse
                    desde un computador o una tablet.
                </p>

                <p style="opacity:.75;">
                    Por favor, ábralo desde un PC, Mac o iPad para disfrutar
                    de la mejor experiencia.
                </p>

            </div>
        </div>
    `;

    throw new Error("Acceso desde teléfono bloqueado");
}
(function() {
  var Marzipano = window.Marzipano;
  var bowser = window.bowser;
  var screenfull = window.screenfull;
  var data = window.APP_DATA;

  // Grab elements from DOM.
  var panoElement = document.querySelector('#pano');
  var sceneNameElement = document.querySelector('#titleBar .sceneName');
  var sceneListElement = document.querySelector('#sceneList');
  var sceneElements = document.querySelectorAll('#sceneList .scene');
  var sceneListToggleElement = document.querySelector('#sceneListToggle');
  var autorotateToggleElement = document.querySelector('#autorotateToggle');
  var fullscreenToggleElement = document.querySelector('#fullscreenToggle');
  var mapToggleElement = document.querySelector('#mapToggle');
  var miniMapElement = document.querySelector('#miniMap');
  var mapCloseElement = document.querySelector('#mapClose');
  var mapMarkersElement = document.querySelector('#mapMarkers');

  // Posiciones expresadas como porcentaje sobre la imagen numerada del mapa (x, y).
  // Se corresponden con los números rojos entregados para cada panorama.
  var mapPositions = {
    '0-vista-aerea-general': [51.5, 53.1], // 21
    '1-panorama-de-entrada': [14.4, 60.4], // 11
    '2-entrada-principal': [25.9, 56.7], // 10
    '3-explanacion-inferior-1': [41.3, 60.3], // 14
    '4-explanacion-inferior-2': [50.9, 62.2], // 15
    '5-explanacion-inferior-3': [59.8, 64.1], // 16
    '6-via-de-acceso-6-a-explanacion-superior': [60.5, 31.2], // 4
    '7-explanacion-superior-1': [28.4, 29.3], // 1
    '8-explanacion-superior2': [42.4, 28.2], // 2
    '9-explanacion-superior-3': [57.5, 25.0], // 3
    '11-suplementaria-2': [63.2, 49.0], // 18
    '12-suplementaria-3': [66.9, 33.5], // 19
    '13-suplementaria-4': [55.1, 49.1], // 20
    '14-via-de-acceso-1-lote-superior-e-inferior': [33.9, 55.5], // 9
    '15-via-de-acceso-2': [40.7, 49.0], // 8
    '16-via-de-acceso-3': [48.6, 41.7], // 7
    '17-via-de-acceso-4': [53.6, 38.0], // 6
    '18-via-de-acceso-5': [57.9, 33.7], // 5
    '19-vista-panoramica-del-entorno-1': [22.5, 34.7], // 13
    '20-vista-panoramica-del-entorno-2': [28.0, 42.9] // 12
  };

  // Desfase predeterminado entre el yaw de Marzipano y el norte de este plano.
  var mapYawOffset = 132 * Math.PI / 180;
  // Algunos panoramas fueron capturados con otra referencia angular. Estos
  // valores específicos prevalecen sobre el desfase predeterminado.
  var sceneMapYawOffsets = {
    '1-panorama-de-entrada': 94 * Math.PI / 180,
    '2-entrada-principal': 271 * Math.PI / 180,
    '3-explanacion-inferior-1': 291 * Math.PI / 180,
    '4-explanacion-inferior-2': 40 * Math.PI / 180,
    '5-explanacion-inferior-3': 0 * Math.PI / 180,
    '6-via-de-acceso-6-a-explanacion-superior': 213 * Math.PI / 180,
    '7-explanacion-superior-1': 107 * Math.PI / 180,
    '8-explanacion-superior2': 117 * Math.PI / 180,
    '9-explanacion-superior-3': 209 * Math.PI / 180,
    '11-suplementaria-2': 282 * Math.PI / 180,
    '12-suplementaria-3': 257 * Math.PI / 180,
    '13-suplementaria-4': 269 * Math.PI / 180,
    '14-via-de-acceso-1-lote-superior-e-inferior': 293 * Math.PI / 180,
    '15-via-de-acceso-2': 202 * Math.PI / 180,
    '16-via-de-acceso-3': 79 * Math.PI / 180,
    '17-via-de-acceso-4': 258 * Math.PI / 180,
    '18-via-de-acceso-5': 243 * Math.PI / 180,
    '19-vista-panoramica-del-entorno-1': 106 * Math.PI / 180,
    '20-vista-panoramica-del-entorno-2': 61 * Math.PI / 180
  };
  var activeMapMarker = null;

  // Detect desktop or mobile mode.
  if (window.matchMedia) {
    var setMode = function() {
      if (mql.matches) {
        document.body.classList.remove('desktop');
        document.body.classList.add('mobile');
      } else {
        document.body.classList.remove('mobile');
        document.body.classList.add('desktop');
      }
    };
    var mql = matchMedia("(max-width: 500px), (max-height: 500px)");
    setMode();
    mql.addListener(setMode);
  } else {
    document.body.classList.add('desktop');
  }

  // Detect whether we are on a touch device.
  document.body.classList.add('no-touch');
  window.addEventListener('touchstart', function() {
    document.body.classList.remove('no-touch');
    document.body.classList.add('touch');
  });

  // Use tooltip fallback mode on IE < 11.
  if (bowser.msie && parseFloat(bowser.version) < 11) {
    document.body.classList.add('tooltip-fallback');
  }

  // Viewer options.
  var viewerOpts = {
    controls: {
      mouseViewMode: data.settings.mouseViewMode
    }
  };

  // Initialize viewer.
  var viewer = new Marzipano.Viewer(panoElement, viewerOpts);

  // Create scenes.
  var scenes = data.scenes.map(function(data) {
    var urlPrefix = "tiles";
    var source = Marzipano.ImageUrlSource.fromString(
      urlPrefix + "/" + data.id + "/{z}/{f}/{y}/{x}.jpg",
      { cubeMapPreviewUrl: urlPrefix + "/" + data.id + "/preview.jpg" });
    var geometry = new Marzipano.CubeGeometry(data.levels);

    var limiter = Marzipano.RectilinearView.limit.traditional(data.faceSize, 100*Math.PI/180, 120*Math.PI/180);
    var view = new Marzipano.RectilinearView(data.initialViewParameters, limiter);

    var scene = viewer.createScene({
      source: source,
      geometry: geometry,
      view: view,
      pinFirstLevel: true
    });

    // Create link hotspots.
    data.linkHotspots.forEach(function(hotspot) {
      var element = createLinkHotspotElement(hotspot);
      scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
    });

    // Create info hotspots.
    data.infoHotspots.forEach(function(hotspot) {
      var element = createInfoHotspotElement(hotspot);
      scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
    });

    return {
      data: data,
      scene: scene,
      view: view
    };
  });

  createMapMarkers();
  mapToggleElement.addEventListener('click', function() { setMapVisibility(true); });
  mapCloseElement.addEventListener('click', function() { setMapVisibility(false); });

  // Set up autorotate, if enabled.
  var autorotate = Marzipano.autorotate({
    yawSpeed: 0.03,
    targetPitch: 0,
    targetFov: Math.PI/2
  });
  if (data.settings.autorotateEnabled) {
    autorotateToggleElement.classList.add('enabled');
  }

  // Set handler for autorotate toggle.
  autorotateToggleElement.addEventListener('click', toggleAutorotate);

  // Set up fullscreen mode, if supported.
  if (screenfull.enabled && data.settings.fullscreenButton) {
    document.body.classList.add('fullscreen-enabled');
    fullscreenToggleElement.addEventListener('click', function() {
      screenfull.toggle();
    });
    screenfull.on('change', function() {
      if (screenfull.isFullscreen) {
        fullscreenToggleElement.classList.add('enabled');
      } else {
        fullscreenToggleElement.classList.remove('enabled');
      }
    });
  } else {
    document.body.classList.add('fullscreen-disabled');
  }

  // Set handler for scene list toggle.
  sceneListToggleElement.addEventListener('click', toggleSceneList);

  // Start with the scene list open on desktop.
  //if (!document.body.classList.contains('mobile')) {
 //   showSceneList();
  //}

  // Set handler for scene switch.
  scenes.forEach(function(scene) {
    var el = document.querySelector('#sceneList .scene[data-id="' + scene.data.id + '"]');
    el.addEventListener('click', function() {
      switchScene(scene);
      // On mobile, hide scene list after selecting a scene.
      if (document.body.classList.contains('mobile')) {
        hideSceneList();
      }
    });
  });

  // DOM elements for view controls.
  var viewUpElement = document.querySelector('#viewUp');
  var viewDownElement = document.querySelector('#viewDown');
  var viewLeftElement = document.querySelector('#viewLeft');
  var viewRightElement = document.querySelector('#viewRight');
  var viewInElement = document.querySelector('#viewIn');
  var viewOutElement = document.querySelector('#viewOut');

  // Dynamic parameters for controls.
  var velocity = 0.7;
  var friction = 3;

  // Associate view controls with elements.
  var controls = viewer.controls();
  controls.registerMethod('upElement',    new Marzipano.ElementPressControlMethod(viewUpElement,     'y', -velocity, friction), true);
  controls.registerMethod('downElement',  new Marzipano.ElementPressControlMethod(viewDownElement,   'y',  velocity, friction), true);
  controls.registerMethod('leftElement',  new Marzipano.ElementPressControlMethod(viewLeftElement,   'x', -velocity, friction), true);
  controls.registerMethod('rightElement', new Marzipano.ElementPressControlMethod(viewRightElement,  'x',  velocity, friction), true);
  controls.registerMethod('inElement',    new Marzipano.ElementPressControlMethod(viewInElement,  'zoom', -velocity, friction), true);
  controls.registerMethod('outElement',   new Marzipano.ElementPressControlMethod(viewOutElement, 'zoom',  velocity, friction), true);

  function sanitize(s) {
    return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;');
  }

  function switchScene(scene) {
    stopAutorotate();
    scene.view.setParameters(scene.data.initialViewParameters);
    scene.scene.switchTo();
    startAutorotate();
    updateSceneName(scene);
    updateSceneList(scene);
    updateMapScene(scene);
  }

  function createMapMarkers() {
    scenes.forEach(function(scene) {
      var position = mapPositions[scene.data.id];
      if (!position) {
        return;
      }
      var marker = document.createElement('button');
      marker.type = 'button';
      marker.className = 'map-marker';
      marker.style.left = position[0] + '%';
      marker.style.top = position[1] + '%';
      marker.setAttribute('aria-label', 'Ir a ' + scene.data.name);
      marker.title = scene.data.name;

      var heading = document.createElement('span');
      heading.className = 'map-heading';
      marker.appendChild(heading);
      marker.addEventListener('click', function(event) {
        event.stopPropagation();
        switchScene(scene);
      });
      stopTouchAndScrollEventPropagation(marker);
      mapMarkersElement.appendChild(marker);
      scene.mapMarker = marker;
      scene.mapHeading = heading;
    });
  }

  function updateMapScene(scene) {
    if (activeMapMarker) {
      activeMapMarker.classList.remove('active');
    }
    activeMapMarker = scene.mapMarker || null;
    if (activeMapMarker) {
      activeMapMarker.classList.add('active');
      updateMapHeading(scene);
    }
  }

  function updateMapHeading(scene) {
    if (!scene.mapHeading) {
      return;
    }
    var sceneOffset = sceneMapYawOffsets[scene.data.id];
    if (typeof sceneOffset !== 'number') {
      sceneOffset = mapYawOffset;
    }
    var degrees = (scene.view.yaw() + sceneOffset) * 180 / Math.PI;
    scene.mapHeading.style.transform = 'rotate(' + degrees + 'deg)';
    window.dispatchEvent(new CustomEvent('orientation-calibration-update', {
      detail: {
        sceneId: scene.data.id,
        sceneName: scene.data.name,
        yaw: scene.view.yaw(),
        pitch: scene.view.pitch(),
        mapHeading: degrees,
        mapMarker: scene.mapMarker
      }
    }));
  }

  function setMapVisibility(visible) {
    miniMapElement.hidden = !visible;
    mapToggleElement.setAttribute('aria-expanded', String(visible));
    if (visible) {
      mapToggleElement.focus();
    }
  }

  // El yaw del visor cambia continuamente al arrastrar, usar las flechas o autorrotar.
  function refreshMapHeading() {
    var currentScene = scenes.filter(function(scene) {
      return scene.mapMarker && scene.mapMarker.classList.contains('active');
    })[0];
    if (currentScene) {
      updateMapHeading(currentScene);
    }
    window.requestAnimationFrame(refreshMapHeading);
  }

  window.requestAnimationFrame(refreshMapHeading);

  function updateSceneName(scene) {
    sceneNameElement.innerHTML = sanitize(scene.data.name);
  }

  function updateSceneList(scene) {
    for (var i = 0; i < sceneElements.length; i++) {
      var el = sceneElements[i];
      if (el.getAttribute('data-id') === scene.data.id) {
        el.classList.add('current');
      } else {
        el.classList.remove('current');
      }
    }
  }

  function showSceneList() {
    sceneListElement.classList.add('enabled');
    sceneListToggleElement.classList.add('enabled');
  }

  function hideSceneList() {
    sceneListElement.classList.remove('enabled');
    sceneListToggleElement.classList.remove('enabled');
  }

  function toggleSceneList() {
    sceneListElement.classList.toggle('enabled');
    sceneListToggleElement.classList.toggle('enabled');
  }

  function startAutorotate() {
    if (!autorotateToggleElement.classList.contains('enabled')) {
      return;
    }
    viewer.startMovement(autorotate);
    viewer.setIdleMovement(3000, autorotate);
  }

  function stopAutorotate() {
    viewer.stopMovement();
    viewer.setIdleMovement(Infinity);
  }

  function toggleAutorotate() {
    if (autorotateToggleElement.classList.contains('enabled')) {
      autorotateToggleElement.classList.remove('enabled');
      stopAutorotate();
    } else {
      autorotateToggleElement.classList.add('enabled');
      startAutorotate();
    }
  }

  function createLinkHotspotElement(hotspot) {

    // Create wrapper element to hold icon and tooltip.
    var wrapper = document.createElement('div');
    wrapper.classList.add('hotspot');
    wrapper.classList.add('link-hotspot');

    // Create image element.
    var icon = document.createElement('img');
    icon.src = 'img/link.png';
    icon.classList.add('link-hotspot-icon');

    // Set rotation transform.
    var transformProperties = [ '-ms-transform', '-webkit-transform', 'transform' ];
    for (var i = 0; i < transformProperties.length; i++) {
      var property = transformProperties[i];
      icon.style[property] = 'rotate(' + hotspot.rotation + 'rad)';
    }

    // Add click event handler.
    wrapper.addEventListener('click', function() {
      switchScene(findSceneById(hotspot.target));
    });

    // Prevent touch and scroll events from reaching the parent element.
    // This prevents the view control logic from interfering with the hotspot.
    stopTouchAndScrollEventPropagation(wrapper);

    // Create tooltip element.
    var tooltip = document.createElement('div');
    tooltip.classList.add('hotspot-tooltip');
    tooltip.classList.add('link-hotspot-tooltip');
    tooltip.innerHTML = findSceneDataById(hotspot.target).name;

    wrapper.appendChild(icon);
    wrapper.appendChild(tooltip);

    return wrapper;
  }

  function createInfoHotspotElement(hotspot) {

    // Create wrapper element to hold icon and tooltip.
    var wrapper = document.createElement('div');
    wrapper.classList.add('hotspot');
    wrapper.classList.add('info-hotspot');

    // Create hotspot/tooltip header.
    var header = document.createElement('div');
    header.classList.add('info-hotspot-header');

    // Create image element.
    var iconWrapper = document.createElement('div');
    iconWrapper.classList.add('info-hotspot-icon-wrapper');
    var icon = document.createElement('img');
    icon.src = 'img/info.png';
    icon.classList.add('info-hotspot-icon');
    iconWrapper.appendChild(icon);

    // Create title element.
    var titleWrapper = document.createElement('div');
    titleWrapper.classList.add('info-hotspot-title-wrapper');
    var title = document.createElement('div');
    title.classList.add('info-hotspot-title');
    title.innerHTML = hotspot.title;
    titleWrapper.appendChild(title);

    // Create close element.
    var closeWrapper = document.createElement('div');
    closeWrapper.classList.add('info-hotspot-close-wrapper');
    var closeIcon = document.createElement('img');
    closeIcon.src = 'img/close.png';
    closeIcon.classList.add('info-hotspot-close-icon');
    closeWrapper.appendChild(closeIcon);

    // Construct header element.
    header.appendChild(iconWrapper);
    header.appendChild(titleWrapper);
    header.appendChild(closeWrapper);

    // Create text element.
    var text = document.createElement('div');
    text.classList.add('info-hotspot-text');
    text.innerHTML = hotspot.text;

    // Place header and text into wrapper element.
    wrapper.appendChild(header);
    wrapper.appendChild(text);

    // Create a modal for the hotspot content to appear on mobile mode.
    var modal = document.createElement('div');
    modal.innerHTML = wrapper.innerHTML;
    modal.classList.add('info-hotspot-modal');
    document.body.appendChild(modal);

    var toggle = function() {
      wrapper.classList.toggle('visible');
      modal.classList.toggle('visible');
    };

    // Show content when hotspot is clicked.
    wrapper.querySelector('.info-hotspot-header').addEventListener('click', toggle);

    // Hide content when close icon is clicked.
    modal.querySelector('.info-hotspot-close-wrapper').addEventListener('click', toggle);

    // Prevent touch and scroll events from reaching the parent element.
    // This prevents the view control logic from interfering with the hotspot.
    stopTouchAndScrollEventPropagation(wrapper);

    return wrapper;
  }

  // Prevent touch and scroll events from reaching the parent element.
  function stopTouchAndScrollEventPropagation(element, eventList) {
    var eventList = [ 'touchstart', 'touchmove', 'touchend', 'touchcancel',
                      'wheel', 'mousewheel' ];
    for (var i = 0; i < eventList.length; i++) {
      element.addEventListener(eventList[i], function(event) {
        event.stopPropagation();
      });
    }
  }

  function findSceneById(id) {
    for (var i = 0; i < scenes.length; i++) {
      if (scenes[i].data.id === id) {
        return scenes[i];
      }
    }
    return null;
  }

  function findSceneDataById(id) {
    for (var i = 0; i < data.scenes.length; i++) {
      if (data.scenes[i].id === id) {
        return data.scenes[i];
      }
    }
    return null;
  }

  // Display the initial scene.
  switchScene(scenes[0]);

})();
