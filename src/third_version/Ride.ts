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
        let fare = 0;
	for (const segment of this.segments) {
		if (this.isOvernight() && isSunday()) {
			fare += segment.distance * SUNDAY_OVERNIGHT_FARE;
		}
		if (this.isOvernight() && !isSunday()) {
			fare += segment.distance * OVERNIGHT_FARE;
		}
		if (!this.isOvernight() && isSunday()) {
			fare += segment.distance * SUNDAY_FARE;
		}
		if (!this.isOvernight() && !isSunday()) {
			fare += segment.distance * NORMAL_FARE;
		}
	}
	return (fare < MIN_FARE) ? MIN_FARE : fare;
    }

}