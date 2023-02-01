import Ride from "../../src/third_version/Ride";

test("Deve fazer uma corrida em um dia de semana e em horario normal", function () {
    const ride = new Ride();
    ride.addSegment( 10, new Date("2021-03-10T10:00:00"));
   const fare = ride.calculateFare();
    expect(fare).toBe(21);

});

// test("Deve fazer uma corrida em um dia de semana a noite", function () {
//     const segments = [
//         {
//             distance: 10,
//             date: new Date("2021-03-10T23:00:00")
//         }
//     ];
//     const fare = calculateRide(segments);
//     expect(fare).toBe(39);

// });
// test("Deve fazer uma corrida em um domingo e em um horario normal", function () {
//     const segments = [
//         {
//             distance: 10,
//             date: new Date("2021-03-07T10:00:00")
//         }
//     ];
//     const fare = calculateRide(segments);
//     expect(fare).toBe(29);

// });

// test("Deve fazer uma corrida em um domingo e em um horario noturno", function () {
//     const segments = [
//         {
//             distance: 10,
//             date: new Date("2021-03-07T23:00:00")
//         }
//     ];
//     const fare = calculateRide(segments);
//     expect(fare).toBe(50);

// });

// test("Deve retornar -1 se a distancia for invalida", function () {
//     const segments = [
//         {
//             distance: -10,
//             date: new Date("2021-03-07T23:00:00")
//         }
//     ];
//   ///  const fare = calculateRide(segments);
//     expect(()=> calculateRide(segments)).toThrow(new Error('Invalid distance'))

// });
// test("Deve retornar -2 se a data for invalida", function () {
//     const segments = [
//         {
//             distance: 10,
//             date: new Date("invalid date")
//         }
//     ];
//    // const fare = calculateRide(segments);
//     expect(()=> calculateRide(segments)).toThrow(new Error('Invalid date'));

// });
// test("Deve fazer uma corrida com valor minimo", function () {
//     //given, arrange
//     const segments = [
//         {
//             distance: 1,
//             date: new Date("2021-03-07T23:00:00")
//         }
//     ];
//     //when, act
//     const fare = calculateRide(segments);
//     //then, assert
//     expect(fare).toBe(10);

// });





/*
 * given 
 * when
 * then
 */