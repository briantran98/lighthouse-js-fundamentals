// Function to check quailty of the air
// Param:
// samples - Array of strings with either dirty or clean
// thershold - The highest acceptable amount of dirty samples allowed
const checkAir = function (samples, threshold) {
  // Assign the size of the samples array to sampleSize
  let sampleSize = samples.length;
  let dirtySample = 0;
  
  // Keeps count of how many occurances of dirty show up in the samples array
  samples.forEach(sample => {
    if(sample === "dirty") {
      dirtySample++;
    }
  });

  // See if the percent of dirty samples is larger than the threshold
  // If so return Polluted else return clean
  if(threshold < (dirtySample / sampleSize)) {
    return "Polluted";
  } else {
    return "Clean";
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))
