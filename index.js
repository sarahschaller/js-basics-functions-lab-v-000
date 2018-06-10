function distanceFromHqInBlocks (street) {
  return Math.abs(street - 42);
}

function distanceFromHqInFeet (street) {
  const blocks = distanceFromHqInBlocks(street);

  return blocks*264;
}


function distanceTravelledInFeet(start, end) {
  return Math.abs(start - end)*264;
}