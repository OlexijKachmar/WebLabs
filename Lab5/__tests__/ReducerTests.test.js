const DISHES = require('../src/shared/dishes');
const DishReducer = require('../src/redux/dishes');
const AddDishes = require('../src/redux/ActionCreators')[0];
const FailDishes = require('../src/redux/ActionCreators')[1];

let state = {
    isLoading: true,
    errMess: null,
    dishes: []
};

test('new dish should be added', () => {
    //1.test data
    const action = AddDishes(DISHES);
    //2.action
    let newstate = DishReducer(state, action);
    //3.expectation
    console.log(newstate.dishes.length);
    expect(newstate.isLoading === false).toBeTruthy();
    expect(newstate.dishes.length === DISHES.length).toBeTruthy();
    expect(newstate.dishes[3].name).toBe('ElaiCheese Cake');
});

test('errmess should be written while failing', () => {
    //1.test data
    const action = FailDishes('While downloading data error occured');

    //2.action
    let newstate = DishReducer(state, action);
    //3.expectation
    console.log(newstate.errMess);
    expect(newstate.isLoading).toBeFalsy();
    expect(newstate.errMess).toContain('error');
    expect(newstate.dishes).not.toBeUndefined();
});