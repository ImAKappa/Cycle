import {
  writable
} from 'svelte/store';

export const CycleStore = writable([{
    name: "Eat a snack",
    length: 10,
    units: "min",
    checkPoints: [0.5], // array of percentages
  },
  {
    name: "Complete Homework Question",
    length: 120,
    units: "sec",
    checkPoints: [0.5], // array of percentages
  },
  {
    name: "Exercise blitz",
    length: 1,
    units: "min",
    checkPoints: [0.5], // array of percentages
  }
]);