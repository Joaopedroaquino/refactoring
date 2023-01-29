import { calc } from "../src/main";

test("Deve fazer uma corrida em um dia de semana e em horario normal", function () {
    //given, arrange
    const segments = [
        {
            dist: 10,
            ds: new Date("2021-03-10t10:00:00")
        }
    ];
    //when, act
    const fare = calc(segments);
    //then, assert
    expect(fare).toBe(21);

});






/*
 * given 
 * when
 * then
 */