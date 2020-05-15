const judgeVegetable = function(vegetables, characteristic ) {
  let metricLeader = 0;
  let winner = "";
  const category = characteristic;

  vegetables.forEach(vegetable => {
    if (metricLeader < vegetable[category]) {
      metricLeader = vegetable[category];
      winner = vegetable["submitter"];
    }
  });
  return winner;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness';
//judgeVegetable(vegetables, metric)
console.log(judgeVegetable(vegetables, metric));