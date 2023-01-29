// @ts-nocheck
function isSunday (date){
	return date.getDay() === 0
}
export function calculateRide(segments) {
	let fare = 0;
	for (const segment of segments) {
		if (segment.distance != null && segment.distance != undefined && typeof segment.distance === "number" && segment.distance > 0) {
			if (segment.date != null && segment.date != undefined && segment.date instanceof Date && segment.date.toString() !== "Invalid Date") {
				const overnight = segment.date.getHours() >= 22 || segment.date.getHours() <= 6
				if (overnight) {
					if (isSunday(segment.date)) {
						fare += segment.distance * 5;

						// sunday
					} else {
						fare += segment.distance * 3.90;

					}
				} else {
					// sunday
					if (isSunday(segment.date)) {
						fare += segment.distance * 2.9;
					} else {
						fare += segment.distance * 2.10;
					}
				}
			} else {
				// console.log(d);
				return -2;
			}
		} else {
			// console.log(distance);
			return -1;
		}
	}
	if (fare < 10) {
		return 10;
	} else {
		return fare;
	}
}