import { crayon } from "crayon/";
import TimeZones from "../meta/time-zones.ts";

export default function listTimeZones() {
	const stringBuilder = new Array<string>();
	let length = 0;

	for (const [timeZone, timeZoneName] of Object.entries(TimeZones)) {
		stringBuilder[length++] =
			crayon.bold(crayon.green(`[${timeZone}]`.padEnd(10))) + crayon.reset(`${timeZoneName}`);
	}

	return stringBuilder.join("\n");
}
