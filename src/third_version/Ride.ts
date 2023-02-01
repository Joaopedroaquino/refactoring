import Segment from "./Segment";

export default class Ride {
    segments: Segment[];

    constructor(){
        this.segments = [];
    }
  
    addSegment(distance: number, date: Date){
        this.segments.push(new Segment(distance, date))

    }

    calculateFare(){
        
    }

}