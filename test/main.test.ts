import { calc } from "../src/main";

test("Deve fazer uma corrida em um dia de semana e em horario normal", function () {
    //given, arrange
    const segments = [
        {
            dist: 10,
            ds: new Date("2021-03-10T10:00:00")
        }
    ];
    //when, act
    const fare = calc(segments);
    //then, assert
    expect(fare).toBe(21);

});

test("Deve fazer uma corrida em um dia de semana a noite", function () {
    //given, arrange
    const segments = [
        {
            dist: 10,
            ds: new Date("2021-03-10T23:00:00")
        }
    ];
    //when, act
    const fare = calc(segments);
    //then, assert
    expect(fare).toBe(39);

});
test("Deve fazer uma corrida em um domingo e em um horario normal", function () {
    //given, arrange
    const segments = [
        {
            dist: 10,
            ds: new Date("2021-03-07T10:00:00")
        }
    ];
    //when, act
    const fare = calc(segments);
    //then, assert
    expect(fare).toBe(29);

});

test("Deve fazer uma corrida em um domingo e em um horario noturno", function () {
    //given, arrange
    const segments = [
        {
            dist: 10,
            ds: new Date("2021-03-07T23:00:00")
        }
    ];
    //when, act
    const fare = calc(segments);
    //then, assert
    expect(fare).toBe(50);

});

test("Deve retornar -1 se a distancia for invalida", function () {
    //given, arrange
    const segments = [
        {
            dist: -10,
            ds: new Date("2021-03-07T23:00:00")
        }
    ];
    //when, act
    const fare = calc(segments);
    //then, assert
    expect(fare).toBe(-1);

});





/*
 * given 
 * when
 * then
 */