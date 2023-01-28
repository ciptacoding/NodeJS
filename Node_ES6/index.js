import coffeeStock from "./state.js"; //import single
import { machineCoffee, machineCoffee2 } from "./machine.js"; //import lebih dari 1

const makeCoffee = (type, milligram) => {
  if (coffeeStock[type] >= milligram) {
    console.log('Kopi berhasil dibuat');
    console.log(machineCoffee);
  } else {
    console.log(machineCoffee2);
    console.log('Kopi Habis!');
  }
}
// callback
makeCoffee("robusta", 90);