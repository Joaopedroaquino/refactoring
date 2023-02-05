import Ride from "../../src/third_version/Ride";

test("Deve fazer uma corrida em um dia de semana e em horario normal", function () {
    const ride = new Ride();
    ride.addSegment( 10, new Date("2021-03-10T10:00:00"));
   const fare = ride.calculateFare();
    expect(fare).toBe(21);

});





/*
 * given 
 * when
 * then
 */