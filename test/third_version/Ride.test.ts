import Ride from "../../src/third_version/Ride";

test("Deve fazer uma corrida em um dia de semana e em horario normal", function () {
    const ride = new Ride();
    ride.addSegment( 10, new Date("2021-03-10T10:00:00"));
   const fare = ride.calculateFare();
    expect(fare).toBe(21);

});

test("Deve fazer uma corrida em um dia de semana e em horario noturno", function () {
    const ride = new Ride();
    ride.addSegment( 10, new Date("2021-03-10T23:00:00"));
   const fare = ride.calculateFare();
    expect(fare).toBe(39);

});
test("Deve fazer uma corrida em um domingo e em horario normal", function () {
    const ride = new Ride();
    ride.addSegment( 10, new Date("2021-03-07T10:00:00"));
   const fare = ride.calculateFare();
    expect(fare).toBe(29);

});
test("Deve fazer uma corrida em um domingo e em horario noturno", function () {
    const ride = new Ride();
    ride.addSegment( 10, new Date("2021-03-07T23:00:00"));
   const fare = ride.calculateFare();
    expect(fare).toBe(50);

});
test("Deve fazer uma corrida em horario de pico (7-8 e das 18-19)", function () {
    const ride = new Ride();
    ride.addSegment( 10, new Date("2021-03-10T07:30:00"));
   const fare = ride.calculateFare();
    expect(fare).toBe(60);

});





/*
 * given 
 * when
 * then
 */