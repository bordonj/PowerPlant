// This function stores our state.

const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  }
}

const stateControl = storeState();

// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    })
  }
}

// We create four functions using our function factory. We could easily create many more.

const feed = changeState("soil")(1);
const blueFood = changeState("soil")(5);
const yuckyFood = changeState("soil")(-5);

const hydrate = changeState("water")(1);
const superWater = changeState("water")(5);

$(document).ready(function () {

  // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect. Note that we only use one of our functions to alter soil. You can easily add more.

  $('#feedA').click(function () {
    const newState = stateControl(blueFood);
    $('#soil-value-a').text(`Soil: ${newState.soil}`);
  });

  // This function doesn't actually do anything useful in this application - it just demonstrates how we can "look" at the current state (which the DOM is holding anyway). However, students often do need the ability to see the current state without changing it so it's included here for reference.

  $('#show-stateA').click(function () {
    // We just need to call stateControl() without arguments to see our current state.
    const currentState = stateControl();
    $('#soil-value-a').text(`Soil: ${currentState.soil}`);
  });

  $('#negativeA').click(function () {
    const newState = stateControl(yuckyFood);
    $('#soil-value-a').text(`Soil: ${newState.soil}`);
  });


  // #2 Plant
  $('#feedB').click(function () {
    const newState = stateControl(blueFood);
    $('#soil-value-b').text(`Soil: ${newState.soil}`);
  });

  $('#show-stateB').click(function () {
    const currentState = stateControl();
    $('#soil-value-b').text(`Soil: ${currentState.soil}`);
  });

  $('#negativeB').click(function () {
    const newState = stateControl(yuckyFood);
    $('#soil-value-b').text(`Soil: ${newState.soil}`);
  });


});