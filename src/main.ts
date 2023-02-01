const SUNDAY_OVERNIGHT_FARE = 5;
const OVERNIGHT_FARE = 3.90;
const SUNDAY_FARE = 2.9;
const NORMAL_FARE = 2.1;
const MIN_FARE = 10;

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
	
}