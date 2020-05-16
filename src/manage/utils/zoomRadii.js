export const getZoomRadii = (zoomLevel) => {
  const zoomToMetersMap = {
    19: 100,
    18: 230,
    17: 300,
    16: 900,
    15: 1800,
  }

  if (zoomLevel >= 18 ) return zoomToMetersMap[19]
  if (zoomLevel <= 14 ) return zoomToMetersMap[15]

  return zoomToMetersMap[zoomLevel]
}