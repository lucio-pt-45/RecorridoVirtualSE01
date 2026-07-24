var APP_DATA = {
  "scenes": [
    {
      "id": "0-vista-aerea-general",
      "name": "Vista aérea general",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.9688301290268537,
        "pitch": 1.3422077367201801,
        "fov": 1.307948650254253
      },
      "linkHotspots": [
        {
          "yaw": 2.2551847757122925,
          "pitch": 0.7637751468391958,
          "rotation": 0,
          "target": "1-panorama-de-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-panorama-de-entrada",
      "name": "Panorama de entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.160957431889436,
        "pitch": 0.3996402066290141,
        "fov": 1.4950326062824022
      },
      "linkHotspots": [
        {
          "yaw": -0.10739622045369046,
          "pitch": 0.6106515815163327,
          "rotation": 0,
          "target": "2-entrada-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-entrada-principal",
      "name": "Entrada principal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.9207782919202163,
        "pitch": 0.22451158532605042,
        "fov": 1.4950326062824022
      },
      "linkHotspots": [
        {
          "yaw": 2.865237137697771,
          "pitch": 0.19841932242560745,
          "rotation": 0,
          "target": "14-via-de-acceso-1-lote-superior-e-inferior"
        },
        {
          "yaw": -0.17270512676109462,
          "pitch": 0.02770703070344105,
          "rotation": 0,
          "target": "1-panorama-de-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-explanacion-inferior-1",
      "name": "Explanación inferior 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.5193720137594715,
        "pitch": 0.11910042993166314,
        "fov": 1.4950326062824022
      },
      "linkHotspots": [
        {
          "yaw": -3.0829431554870563,
          "pitch": 0.2433217294348875,
          "rotation": 0,
          "target": "4-explanacion-inferior-2"
        },
        {
          "yaw": 0.04125964556029871,
          "pitch": 0.1312957828655268,
          "rotation": 0,
          "target": "14-via-de-acceso-1-lote-superior-e-inferior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-explanacion-inferior-2",
      "name": "Explanación inferior 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.6108652381980093,
        "pitch": 0.06983716326924849,
        "fov": 1.4950326062824022
      },
      "linkHotspots": [
        {
          "yaw": 0.9585377642761088,
          "pitch": 0.15001361247562173,
          "rotation": 0,
          "target": "5-explanacion-inferior-3"
        },
        {
          "yaw": -2.1711785030201014,
          "pitch": 0.14684537672478015,
          "rotation": 0,
          "target": "3-explanacion-inferior-1"
        },
        {
          "yaw": -0.35320203589654575,
          "pitch": -0.16227127793916551,
          "rotation": 0,
          "target": "13-suplementaria-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-explanacion-inferior-3",
      "name": "Explanación Inferior 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.8009491901308401,
        "pitch": 0.006209151145492697,
        "fov": 1.4950326062824022
      },
      "linkHotspots": [
        {
          "yaw": -1.389579582929258,
          "pitch": 0.0850401823800695,
          "rotation": 0,
          "target": "4-explanacion-inferior-2"
        },
        {
          "yaw": 0.2223005717293418,
          "pitch": -0.030411727359389573,
          "rotation": 0,
          "target": "11-suplementaria-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-via-de-acceso-6-a-explanacion-superior",
      "name": "Via de acceso 6 a explanación superior",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.2204060576285158,
        "pitch": 0.23077175339801315,
        "fov": 1.4950326062824022
      },
      "linkHotspots": [
        {
          "yaw": 0.5197872292527919,
          "pitch": 0.33479195422940755,
          "rotation": 0,
          "target": "18-via-de-acceso-5"
        },
        {
          "yaw": 1.9583495343050874,
          "pitch": -0.008405271727614405,
          "rotation": 0,
          "target": "9-explanacion-superior-3"
        },
        {
          "yaw": -1.532471256530151,
          "pitch": 0.2152076164244452,
          "rotation": 0,
          "target": "12-suplementaria-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-explanacion-superior-1",
      "name": "Explanación superior 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.5227855330738045,
        "pitch": 0.12658845362725302,
        "fov": 1.4950326062824022
      },
      "linkHotspots": [
        {
          "yaw": -0.2712310588483646,
          "pitch": 0.18929120186372472,
          "rotation": 0,
          "target": "8-explanacion-superior2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-explanacion-superior2",
      "name": "Explanación superior2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.155143596771123,
        "pitch": 0.266260900979999,
        "fov": 1.4950326062824022
      },
      "linkHotspots": [
        {
          "yaw": 2.69105912276534,
          "pitch": 0.08874590478610855,
          "rotation": 0,
          "target": "7-explanacion-superior-1"
        },
        {
          "yaw": -0.5763362571738888,
          "pitch": 0.059995844848508284,
          "rotation": 0,
          "target": "9-explanacion-superior-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-explanacion-superior-3",
      "name": "Explanacion superior 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.10903515556941912,
        "pitch": 0.17366574653367017,
        "fov": 1.4950326062824022
      },
      "linkHotspots": [
        {
          "yaw": 0.9858253266334422,
          "pitch": 0.23460227836429937,
          "rotation": 0,
          "target": "8-explanacion-superior2"
        },
        {
          "yaw": -0.8779547527156382,
          "pitch": 0.35193604178083504,
          "rotation": 0,
          "target": "6-via-de-acceso-6-a-explanacion-superior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-suplementaria-1",
      "name": "Suplementaria 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.8669464721959086,
        "pitch": 0.2826328693170481,
        "fov": 1.4950326062824022
      },
      "linkHotspots": [
        {
          "yaw": 1.9569310075380395,
          "pitch": 0.4743471615355599,
          "rotation": 0,
          "target": "5-explanacion-inferior-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-suplementaria-2",
      "name": "Suplementaria 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.6389531038745808,
        "pitch": 0.1991652433974771,
        "fov": 1.4950326062824022
      },
      "linkHotspots": [
        {
          "yaw": -1.2774193757991341,
          "pitch": 0.4940458610346887,
          "rotation": 0,
          "target": "5-explanacion-inferior-3"
        },
        {
          "yaw": 2.234851597429911,
          "pitch": -0.11612901179253576,
          "rotation": 0,
          "target": "12-suplementaria-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-suplementaria-3",
      "name": "Suplementaria 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.2065768111940951,
        "pitch": 0.26185258103238596,
        "fov": 1.4950326062824022
      },
      "linkHotspots": [
        {
          "yaw": -0.8414830561764948,
          "pitch": 0.5477050423770251,
          "rotation": 0,
          "target": "11-suplementaria-2"
        },
        {
          "yaw": 1.071430347611921,
          "pitch": 0.08326640270093044,
          "rotation": 0,
          "target": "6-via-de-acceso-6-a-explanacion-superior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-suplementaria-4",
      "name": "Suplementaria 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.15288519134308132,
        "pitch": 0.2631771920498256,
        "fov": 1.4950326062824022
      },
      "linkHotspots": [
        {
          "yaw": 0.7145838098986363,
          "pitch": -0.027591777099232218,
          "rotation": 0,
          "target": "16-via-de-acceso-3"
        },
        {
          "yaw": -0.8488145653306152,
          "pitch": 0.4329862452877755,
          "rotation": 0,
          "target": "4-explanacion-inferior-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-via-de-acceso-1-lote-superior-e-inferior",
      "name": "Via de acceso 1 lote superior e inferior",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.8896657230623246,
        "pitch": 0.2146846130128761,
        "fov": 1.4950326062824022
      },
      "linkHotspots": [
        {
          "yaw": 2.2782140100851187,
          "pitch": -0.054355479324627254,
          "rotation": 0,
          "target": "15-via-de-acceso-2"
        },
        {
          "yaw": 2.9414191486988592,
          "pitch": 0.1504235224624253,
          "rotation": 0,
          "target": "3-explanacion-inferior-1"
        },
        {
          "yaw": -0.1536506469881953,
          "pitch": 0.3509163316475039,
          "rotation": 0,
          "target": "2-entrada-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-via-de-acceso-2",
      "name": "Via de acceso 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.749777827593796,
        "pitch": 0.17059621750859222,
        "fov": 1.4950326062824022
      },
      "linkHotspots": [
        {
          "yaw": -2.50017088215532,
          "pitch": -0.0006634966617511395,
          "rotation": 0,
          "target": "16-via-de-acceso-3"
        },
        {
          "yaw": 0.7195196228281304,
          "pitch": 0.34768635313862717,
          "rotation": 0,
          "target": "14-via-de-acceso-1-lote-superior-e-inferior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-via-de-acceso-3",
      "name": "Via de acceso 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.11247677401741285,
        "pitch": -0.007759684807698619,
        "fov": 1.4950326062824022
      },
      "linkHotspots": [
        {
          "yaw": -0.23482273329062409,
          "pitch": 0.1541267043576191,
          "rotation": 0,
          "target": "17-via-de-acceso-4"
        },
        {
          "yaw": 0.5830825136884012,
          "pitch": 0.27404685342906987,
          "rotation": 0,
          "target": "13-suplementaria-4"
        },
        {
          "yaw": 2.8980202120104286,
          "pitch": 0.4465115320640365,
          "rotation": 0,
          "target": "15-via-de-acceso-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-via-de-acceso-4",
      "name": "Via de acceso 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -3.1395131395056737,
        "pitch": 0.2052727164592465,
        "fov": 1.4950326062824022
      },
      "linkHotspots": [
        {
          "yaw": 3.063072826292995,
          "pitch": 0.13757372860004224,
          "rotation": 0,
          "target": "18-via-de-acceso-5"
        },
        {
          "yaw": -0.07422545287363924,
          "pitch": 0.48806125333181605,
          "rotation": 0,
          "target": "16-via-de-acceso-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-via-de-acceso-5",
      "name": "Via de acceso 5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.7467501235100755,
        "pitch": 0.15687579386708705,
        "fov": 1.4950326062824022
      },
      "linkHotspots": [
        {
          "yaw": 0.01444031766932774,
          "pitch": 0.41390952362280053,
          "rotation": 0,
          "target": "17-via-de-acceso-4"
        },
        {
          "yaw": 2.940484942078351,
          "pitch": 0.09422380532572383,
          "rotation": 0,
          "target": "6-via-de-acceso-6-a-explanacion-superior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-vista-panoramica-del-entorno-1",
      "name": "Vista panorámica del entorno 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.2572774472822097,
        "pitch": 0.4611346607118545,
        "fov": 1.4950326062824022
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "20-vista-panoramica-del-entorno-2",
      "name": "Vista panorámica del entorno 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.141399471122348,
        "pitch": 0.7213988382426653,
        "fov": 1.4950326062824022
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "Recorrido Virtual",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
