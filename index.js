function distanceFromHqInBlocks (street) {
  return Math.abs(street - 42);
}

function distanceFromHqInFeet (street) {
  const blocks = distanceFromHqInBlocks(street);

  return blocks*264;
}


function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination)*264;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  
  
}