import { storeState, blueFood, stateControlA, dehydrate, levelUp } from './../src/js/plant.js';


describe('Plant', () => {
  
  test('should correctly output the soil stat', () => {
    const newState = stateControlA(blueFood);
    expect(newState.soil).toEqual(5);
  })

  test('should reset the water stat to zero', () => {
    const initialState = stateControlA(dehydrate);
    expect(initialState.water).toEqual(0);
  })

  test('should correctly output the level stat', () => {
    const newState = stateControlA(levelUp);
    expect(newState.level).toEqual(1);
  })
})