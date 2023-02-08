import Ride from "../../src/third_version/Ride";

let ride: Ride;

beforeEach(function(){
    ride = new Ride;
});

test("Deve fazer uma corrida em um dia de semana e em horario normal", function () {
    ride.addSegment(10, new Date("2021-03-10T10:00:00"));
    const fare = ride.calculateFare();
    expect(fare).toBe(21);

});

test("Deve fazer uma corrida em um dia de semana e em horario noturno", function () {
    ride.addSegment(10, new Date("2021-03-10T23:00:00"));
    const fare = ride.calculateFare();
    expect(fare).toBe(39);

});
test("Deve fazer uma corrida em um domingo e em horario normal", function () {
    ride.addSegment(10, new Date("2021-03-07T10:00:00"));
    const fare = ride.calculateFare();
    expect(fare).toBe(29);

});
test("Deve fazer uma corrida em um domingo e em horario noturno", function () {
    ride.addSegment(10, new Date("2021-03-07T23:00:00"));
    const fare = ride.calculateFare();
    expect(fare).toBe(50);

});
test.each([
    "2021-03-10T07:30:00",
    "2021-03-10T07:00:00",
    "2021-03-10T08:30:00",
    "2021-03-10T08:00:00"])("Deve fazer uma corrida em horario de pico %p", function (date) {
            ride.addSegment(10, new Date(date));
        const fare = ride.calculateFare();
        expect(fare).toBe(60);

    });
test("Deve lançar um erro se a distancia for invalida", function () {
    expect(() => ride.addSegment(-10, new Date("2021-03-07T23:00:00"))).toThrow(new Error('Invalid distance'))

});
test("Deve lançar um erro se a data for invalida", function () {
    expect(() => ride.addSegment(10, new Date("any data"))).toThrow(new Error('Invalid date'))

});
test("Deve fazer uma corrida com valor minimo", function () {
    const ride = new Ride()
    ride.addSegment(1, new Date("2021-03-07T23:00:00"));
    const fare = ride.calculateFare();
    expect(fare).toBe(10);

});






/*
 * given 
 * when
 * then
 */