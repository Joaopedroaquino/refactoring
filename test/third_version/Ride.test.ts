import FirstDayFareCalculatorHandler from "../../src/third_version/FirstDayFareCalculatorHandler";
import NormalFareCalculatorHandler from "../../src/third_version/NormalFareCalculatorHandler";
import OvernightFareCalculatorHandler from "../../src/third_version/OvernightFareCalculatorHandler";
import OvernightSundayFareCalculatorHandler from "../../src/third_version/OvernightSundayFareCalculatorHandler";
import PeakTimeFareCalculatorHandler from "../../src/third_version/PeakTimeFareCalculatorHandler";
import Ride from "../../src/third_version/Ride";
import SundayFareCalculatorHandler from "../../src/third_version/SundayFareCalculatorHandler";

let ride: Ride;

beforeEach(function(){
    const normal = new NormalFareCalculatorHandler();
    const overnightSunday = new OvernightSundayFareCalculatorHandler(normal);
    const overnight = new OvernightFareCalculatorHandler(overnightSunday);
    const sunday = new SundayFareCalculatorHandler(overnight);
    const peakTime = new PeakTimeFareCalculatorHandler(sunday);
    const firstDay = new FirstDayFareCalculatorHandler(peakTime)
    ride = new Ride(firstDay);
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
    ride.addSegment(1, new Date("2021-03-07T23:00:00"));
    const fare = ride.calculateFare();
    expect(fare).toBe(10);

});
test("Deve fazer uma corrida no dia primeiro", function () {
    ride.addSegment(10, new Date("2021-03-01T10:00:00"));
    const fare = ride.calculateFare();
    expect(fare).toBe(100);

});






/*
 * given 
 * when
 * then
 */