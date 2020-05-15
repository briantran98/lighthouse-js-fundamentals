const smartGarbage = function (trash, bins) {
  switch(trash) {
  case "waste":
    bins.waste++;
    break;
  case "recycling":
    bins.recycling++;
    break;
  case "compost":
    bins.compost++;
    break;
  default:
    return "This isn't waste, recycling or compost!";
  }
  return bins;
}
