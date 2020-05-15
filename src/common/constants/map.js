export const dashes = {
  default: '4',
};

export const zoom = 18;

export const lineStyles = {
  no_parking: {
    color: 'red',
    dashArray: null,
  },
  no_stopping: {
    color: 'orange',
    dashArray: null,
  },
  bus: {
    color: 'blue',
    dashArray: dashes.default,
  },
  loading: {
    color: 'orange',
    dashArray: dashes.default,
  },
  metered_parking: {
    color: 'yellow',
    dashArray: null,
  },
  commercial: {
    color: 'green',
    dashArray: dashes.default,
  },
  unrestricted: {
    color: 'green',
    dashArray: null,
  },
  other: {
    color: 'grey',
    dashArray: dashes.default,
  },
  passenger: {
    color: 'purple',
    dashArray: dashes.default,
  },
};

export const mapSources = {
  openStreetMap: {
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    maxNativeZoom: 24,
    attribution: '',
  },
  esriWorldImagery: {
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png',
    maxNativeZoom: 19,
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
  },
  OpenStreetMap_Mapnik: {
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    maxNativeZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
  Stamen_TonerHybrid: {
    url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-hybrid/{z}/{x}/{y}{r}.{ext}',
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxNativeZoom: 20,
    ext: 'png',
  },
  Stamen_TonerLabels: {
    url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}{r}.{ext}',
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxNativeZoom: 20,
  },
};
