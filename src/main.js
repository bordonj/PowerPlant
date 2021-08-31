import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import './js/plant';

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
    const newState = stateControlA(hydrate);
    $('#water-value-a').text(`Water: ${newState.water}`);
  });

  $('#waterA').click(function () {
    const newState = stateControlA(hydrate);
    $('#water-value-a').text(`Water: ${newState.water}`);
  });

  $('#superWaterA').click(function () {
    const newState = stateControlA(superWater);
    $('#water-value-a').text(`Water: ${newState.water}`);
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

// pokemon/neopets? level up.. evolve.. attack.. dehydrate.. harvest..
// testing..