// passes a GeoJSON spaces object, return a list of coordinates in Leaflet form
export const getMapCoords = (spaces) => {
  spaces.forEach((space) => {
    if(space.features.length === 1) {
      const data = space.features[0].geometry.coordinates;
      if(data.length === 1) {
        const coordList = new Array(data[0].length);
        data[0].forEach((pair, index) => {
          coordList[index] = [pair[1], pair[0]];
        });
        console.log(coordList);
        return coordList;
      }
    }
    else {
      console.log("geoUtil: doesn't currently support multi-polygon");
    }
  });
  return null;
}