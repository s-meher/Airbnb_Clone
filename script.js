function filterByCity(targetCity, listingCityArray) {
  let result = [];
  for (let i = 0; i < listingCityArray.length; i++) {
    if (listingCityArray[i].toLowerCase() === targetCity.toLowerCase()) {
      result.push(i);
    }
  }
  return result;
}

function filterByPrice(minPrice, maxPrice, listingPriceArray) {
  let result = [];
  for (let i = 0; i < listingPriceArray.length; i++) {
    if (listingPriceArray[i] >= minPrice && listingPriceArray[i] <= maxPrice) {
      result.push(i);
    }
  }
  return result;
}

function filterByTypes(targetTypes, listingTypeArray) {
  let result = [];
  for (let i = 0; i < listingTypeArray.length; i++) {
    for (let j = 0; j < targetTypes.length; j++) {
      if (listingTypeArray[i] === targetTypes[j]) {
        result.push(i);
        break; // Break early to avoid duplicate indices
      }
    }
  }
  return result;
}
