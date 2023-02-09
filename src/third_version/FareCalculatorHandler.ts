import Segment from "./Segment";
//CHAIN OF RESPONSABILITY
export default interface FareCalculatorHandler {
    next?: FareCalculatorHandler;
    calculate(segment: Segment): number;

}