import TimeZonesMeta from "../meta/time-zones-meta.ts";
import TimeZones from "../meta/time-zones.ts";
import type { UtcOffset } from "../types.ts";

export function getUnixTimestamp() {
	return Date.now();
}
export function getUnixTimestampInSeconds() {
	return Math.floor(getUnixTimestamp() / 1000);
}

const utcOffsetSecondsCache = new Map<UtcOffset, number>();
export function parseUtcOffsetIntoSeconds(offset: UtcOffset) {
	const cached = utcOffsetSecondsCache.get(offset);
	if (cached !== undefined) return cached;

	const [, sign, hours, minutes = "0"] = offset.match(/^UTC([+-])(\d|\d{2}):?(\d{2})?$/) ?? [];
	if (sign === undefined || hours === undefined) throw new Error(`Invalid offset - ${offset}`);

	const hoursOffset = Number.parseInt(hours);
	const minutesOffset = Number.parseInt(minutes);

	let secondsOffset = hoursOffset * 3600;
	if (sign === "-") secondsOffset = -secondsOffset;
	secondsOffset += minutesOffset * 60;

	utcOffsetSecondsCache.set(offset, secondsOffset);
	return secondsOffset;
}

export function parseUtcOffsetIntoMilliseconds(offset: UtcOffset) {
	return parseUtcOffsetIntoSeconds(offset) * 1000;
}

export function fromUtcTime(unixTimestamp: number, timeZone: TimeZones) {

	const { utcOffset } = TimeZonesMeta[timeZone];
	return unixTimestamp + parseUtcOffsetIntoMilliseconds(utcOffset);
}

export function parseUtcOffsetIntoSecondsSlow(offset: UtcOffset) {
	const cached = utcOffsetSecondsCache.get(offset);
	if (cached !== undefined) return cached;

	const [, sign, hours, minutes = "0"] = offset.match(/^UTC(\+|-)(\d{1}|\d{2}):?(\d{2})?$/) ?? [];
	if (sign === undefined || hours === undefined) throw new Error(`Invalid offset - ${offset}`);

	const hoursOffset = parseInt(hours);
	const minutesOffset = parseInt(minutes);

	let secondsOffset = hoursOffset * 3600;
	if (sign === "-") secondsOffset = -secondsOffset;
	secondsOffset += minutesOffset * 60;

	utcOffsetSecondsCache.set(offset, secondsOffset);
	return secondsOffset;
}
