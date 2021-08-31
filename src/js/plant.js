// This function stores our state.

export { storeState, blueFood, stateControlA, dehydrate, levelUp }

const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  }
}

const stateControlA = storeState();
const stateControlB = storeState();

// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    })
  }
}

const resetState = (prop) => {
  return () => {
    return (state) => ({
      ...state,
      [prop]: 0
    })
  }
}


// We create four functions using our function factory. We could easily create many more.

const feed = changeState("soil")(1);
const blueFood = changeState("soil")(5);
const yuckyFood = changeState("soil")(-5);
const levelUpFood = changeState("soil")(10);

const hydrate = changeState("water")(1);
const superWater = changeState("water")(5);
const levelUpWater = changeState("water")(10);

const levelUp = changeState("level")(1);

const dehydrate = resetState("water")();



