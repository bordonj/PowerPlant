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


$(document).ready(function () {

  // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect. Note that we only use one of our functions to alter soil. You can easily add more.

  $('#feedA').click(function () {
    const newState = stateControlA(blueFood);
    $('#soil-value-a').text(`Soil: ${newState.soil}`);
  });

  // This function doesn't actually do anything useful in this application - it just demonstrates how we can "look" at the current state (which the DOM is holding anyway). However, students often do need the ability to see the current state without changing it so it's included here for reference.

  $('#show-stateA').click(function () {
    // We just need to call stateControl() without arguments to see our current state.
    const currentState = stateControlA();
    $('#soil-value-a').text(`Soil: ${currentState.soil}`);
  });

  $('#negativeA').click(function () {
    const newState = stateControlA(yuckyFood);
    $('#water-value-a').text(`Soil: ${newState.soil}`);
  });

  $('#waterA').click(function () {
    const newState = stateControlA(hydrate);
    $('#water-value-a').text(`Water: ${newState.water}`);
  });

  $('#superWaterA').click(function () {
    const newState = stateControlA(superWater);
    $('#water-value-a').text(`Water: ${newState.water}`);
  });

  $('#levelUpA').click(function () {
    const newState = stateControlA(levelUp);
    $('#level-value-a').text(`Level: ${newState.level}`)
    if (newState.level % 10 === 0) {
      const newLevelUpFood = stateControlA(levelUpFood);$('#soil-value-a').text(`Soil: ${newLevelUpFood.soil}`);
      const newLevelUpWater = stateControlA(levelUpWater);
      $('#water-value-a').text(`Water: ${newLevelUpWater.water}`);
      if (newState.level === 50) {
        $('#plantOne').text("Your Plantasaur's Values")
      };
      if (newState.level === 100) {
        $('#plantOne').text("Your Plantasaurex's Values")
      };
    }
  });

  // #2 Plant
  $('#feedB').click(function () {
    const newState = stateControlB(blueFood);
    $('#soil-value-b').text(`Soil: ${newState.soil}`);
  });

  $('#show-stateB').click(function () {
    const currentState = stateControlB();
    $('#soil-value-b').text(`Soil: ${currentState.soil}`);
  });

  $('#negativeB').click(function () {
    const newState = stateControlB(yuckyFood);
    $('#soil-value-b').text(`Soil: ${newState.soil}`);
  });

  $('#waterB').click(function () {
    const newState = stateControlB(hydrate);
    $('#water-value-b').text(`Water: ${newState.water}`);
  });

  $('#superWaterB').click(function () {
    const newState = stateControlB(superWater);
    $('#water-value-b').text(`Water: ${newState.water}`);
  });

});

// pokemon/neopets? evolve.. attack.. harvest..
// testing..