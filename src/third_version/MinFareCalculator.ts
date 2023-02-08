import FareCalculator from "./FareCalculator";
import Segment from "./Segment";

export default class MinFareCalculator implements FareCalculator{
    FARE = 10;
    calculate(segment: Segment): number {
        return segment.distance * this.FARE
    }
}