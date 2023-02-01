const SUNDAY_OVERNIGHT_FARE = 5;
const OVERNIGHT_FARE = 3.90;
const SUNDAY_FARE = 2.9;
const NORMAL_FARE = 2;



function isSunday(date: Date) {
	return date.getDay() === 0;
}
function isOvernight(date:Date) {
	return date.getHours() >= 22 || date.getHours() <= 6;
}
function isValidDistance(distance: number) {
	return distance != null && distance != undefined && typeof distance === "number" && distance > 0
}
function isValidDate(date:Date) {
	return date != null && date != undefined && date instanceof Date && date.toString() !== "Invalid Date"
}
export function calculateRide(segments: any[]) {
	let fare = 0;
	for (const segment of segments) {
		if (!isValidDistance(segment.distance)) return -1;
		if (!isValidDate(segment.date)) return -2;
		if (isOvernight(segment.date) && isSunday(segment.date)) {
			fare += segment.distance * SUNDAY_OVERNIGHT_FARE;
		}
		if (isOvernight(segment.date) && !isSunday(segment.date)) {
			fare += segment.distance * OVERNIGHT_FARE;
		}
		if (!isOvernight(segment.date) && isSunday(segment.date)) {
			fare += segment.distance * SUNDAY_FARE;
		}
		if (!isOvernight(segment.date) && !isSunday(segment.date)) {
			fare += segment.distance * NORMAL_FARE;
		}
	}
	return (fare < 10) ? 10 : fare;
}