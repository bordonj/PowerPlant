import { storeState, blueFood, stateControlA } from './../src/js/plant.js';


describe('Plant', () => {

  test('should correctly output the soil stat', () => {
    const stateControlA = storeState();
    const newState = stateControlA(blueFood);
    expect(newState.soil).toEqual();
  })

})