const required = require('./Validation')[0];
const maxLength = require('./Validation')[1];
const minLength = require('./Validation')[2];
const isNumber = require('./Validation')[3];
const validEmail = require('./Validation')[4];

describe('Validation Input Tests: ', () => {
    test('перевірка на наявність', () => {
        const res1 = required();
        const res2 = required('user1');
        console.log(res2);
        expect(res1).toBeNull();
        expect(res2).toEqual('user1');
    });

    test('перевірка на цілочисельність', () => {
        const res = isNumber(234);
        console.log(res);
        expect(res).not.toBeNaN();
        /*
         const res = isNumber('speedster234');
         console.log(res);
         expect(res).toBeNaN();
        */
    });


    test('перевірка на максимально допустиму довжину вводу', () => {
        const res1 = maxLength(5, 'labazwebu5');
        const res2 = maxLength(10, 'labazwebu5');
        console.log(res2);
        expect(res1).toBeGreaterThanOrEqual(2);
        // expect(res2).toBeLessThanOrEqual(20);
        expect(res2).toBeTruthy();

    });

    test('перевірка на мінімально допустиму довжину вводу', () => {
        // expect(res2).toBeLessThanOrEqual(20);
        expect(minLength(10, 'iqfweiwejfi')).toBeTruthy();
        expect(minLength(12, 'iqfweiwejfiwewre')).toBeTruthy();
        expect(minLength(12, 'labazwebu5we')).toBeTruthy();
        expect(minLength).toHaveBeenCalledTimes(3);
    });


    test('перевірка на правильність email', () => {

        expect(validEmail('loxaskorost@gmail.com')).toBeTruthy();
        expect(validEmail('Kachster@gmail.com')).toBeTruthy();
        expect(validEmail('kapitanNemp123@gmail.com')).toBeTruthy();
        expect(validEmail('alexprokach12@gmail.com')).toBeTruthy();
        expect(validEmail).toHaveBeenCalledWith('loxaskorost@gmail.com');
    });

});