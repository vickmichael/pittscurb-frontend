/* eslint-disable import/no-unresolved */
import bearing from '@turf/bearing';
import destination from '@turf/destination';
import distance from '@turf/distance';

export const getParkingSpots = (block, parkingAngle) => {
  const point1 = block.geometry.coordinates[0];
  const point2 = block.geometry.coordinates[1];

  const blockLength = distance(point1, point2, {
    units: 'miles',
  }) * 5280;

  const numberOfSpaces = Math.floor(
    (blockLength / 20) * Math.cos(parkingAngle)
      + (blockLength / 8) * Math.sin(parkingAngle),
  );

  const spaceWidth = blockLength / numberOfSpaces / 5280;

  return Array.from({ length: numberOfSpaces }, (_, i) => destination(
    point1,
    i * spaceWidth + spaceWidth / 2,
    bearing(point1, point2),
    {
      units: 'miles',
    },
  ).geometry.coordinates);
};
