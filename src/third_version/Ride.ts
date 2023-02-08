import FareCalculatorFactory from "./FareCalculatorFactory";
import NormalFareCalculator from "./NormalFareCalculator";
import OvernightFareCalculator from "./OvernightFareCalculator";
import PeakTimeFareCalculator from "./PeakTimeFareCalculator";
import Segment from "./Segment";
import SundayFareCalculator from "./SundayFareCalculator";
import SundayOvernightFareCalculator from "./SundayOvernightFareCalculator";
export default class Ride {
    MIN_FARE = 10;
    segments: Segment[];
    constructor() {
        this.segments = [];
    }
    addSegment(distance: number, date: Date) {
        this.segments.push(new Segment(distance, date))
    }
    calculateFare() {
        let fare = 0;
        for (const segment of this.segments) {
            const fareCalculator = FareCalculatorFactory.create(segment);
            fare += fareCalculator.calculate(segment)

        }
        return (fare < this.MIN_FARE) ? this.MIN_FARE : fare;
    }
}