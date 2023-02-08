import FareCalculator from "./FareCalculator";
import Segment from "./Segment";

export default class SundayOvernightFareCalculator implements FareCalculator{
    SUNDAY_OVERNIGHT_FARE = 5;
    calculate(segment: Segment): number {
       return segment.distance * this.SUNDAY_OVERNIGHT_FARE
    }
    
}