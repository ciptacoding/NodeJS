/**
 * TODO 1 (Tiger.js):
 * Ekspor nilai dari class Tiger
 *
 * TODO 2 (Wolf.js)
 * Ekspor nilai dari class Wolf
 *
 * TODO 3 (main.js)
 * Impor class Tiger dan Wolf
 *
 * TODO 4 (main.js)
 * Ekspor fungsi fight, myTiger, myWolf, dan result
 *
 */


// TODO 3
const Tiger = require('./Tiger');
const Wolf = require('./Wolf');

const fight = (tiger, wolf) => {
  if (tiger.strength > wolf.strength) {
    return tiger.suaraTiger();
  }
  if (wolf.strength > tiger.strength) {
    return wolf.suaraWolf();
  }
}

// instance
const myTiger = new Tiger;
const myWolf = new Wolf;

const result = fight(myTiger, myWolf);
console.log(result);

// TODO 4
module.exports = { fight, myTiger, myWolf, result }