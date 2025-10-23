var APP_DATA = {
  "scenes": [
    {
      "id": "0-living",
      "name": "living",
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
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 1.9597134082817593,
        "pitch": 0.10253392751235957,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": 2.439923224037136,
          "pitch": 0.2352770482051607,
          "rotation": 5.497787143782138,
          "target": "1-pathway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-pathway",
      "name": "Pathway",
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
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.133618369458949,
          "pitch": 0.15350807281020096,
          "rotation": 0,
          "target": "0-living"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Malqa Basement",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
