// @ts-nocheck
function isSunday(date) {
	return date.getDay() === 0
}
function isOvernight(date) {
	return date.getHours() >= 22 || date.getHours() <= 6

}
function isValidDistance(distance) {
	return distance != null && distance != undefined && typeof distance === "number" && distance > 0
}
function isValidDate(date) {
	return date != null && date != undefined && date instanceof Date && date.toString() !== "Invalid Date"
}
export function calculateRide(segments) {
	let fare = 0;
	for (const segment of segments) {
		if (!isValidDistance(segment.distance)) return -1;
		if (!isValidDate(segment.date)) return -2;
		if (isOvernight(segment.date) && isSunday(segment.date)) {
			fare += segment.distance * 5;
		}
		if (isOvernight(segment.date) && !isSunday(segment.date)) {
			fare += segment.distance * 3.90;
		}
		if (!isOvernight(segment.date) && isSunday(segment.date)) {
			fare += segment.distance * 2.9;
		}
		if (!isOvernight(segment.date) && !isSunday(segment.date)) {
			fare += segment.distance * 2.10;
		}

	}

	return (fare < 10) ? 10 : fare;

}