import { Command, EnumType } from "command/";
import listTimeZones from "./commands/list-time-zones.ts";
import TimeZones, { toTimeZones } from "./meta/time-zones.ts";
import TimestampType, { toTimestampType } from "./meta/timestamp-type.ts";
import { numberLength } from "./utilities/number-utilities.ts";
import { fromUtcTime, getUnixTimestampInSeconds } from "./utilities/time-utilities.ts";

const listTimeZonesCommand = new Command()
	.description("Lists all possible time zones.")
	.action(() => console.log(listTimeZones()));

const fromSecondsCommand = new Command()
	.description("Converts a second-based unix timestamp to another time zone.")
	.option("-z, --zone <zone:timezone>", "Output time zone", {
		default: "mst",
		required: true,
	})
	.option("-t, --type <type:timestamp-type>", "Output timestamp type", {
		default: "unix",
		required: true,
	})
	.arguments("[timestamp:number]")
	.action(({ zone, type }, timestamp = getUnixTimestampInSeconds()) => {
		if (numberLength(timestamp) > 10) throw new Error("Invalid second timestamp (should <= 10 digits).");
		const asTimeZone = toTimeZones(zone);
		if (asTimeZone === undefined) throw new Error(`Invalid time zone - ${zone}`);

		const asTimestamp = toTimestampType(type);
		if (asTimestamp === undefined) throw new Error(`Invalid timestamp - ${type}`);

		const newTimestamp = fromUtcTime(timestamp * 1000, asTimeZone);

		switch (asTimestamp) {
			case TimestampType.Unix:
				console.log(Math.floor(newTimestamp / 1000));
				break;

			case TimestampType.Milliseconds:
				console.log(newTimestamp);
				break;

			case TimestampType.ISO:
				console.log(new Date(newTimestamp).toISOString());
				break;

			case TimestampType.Date:
				console.log(new Date(newTimestamp).toDateString());
				break;

			case TimestampType.Time:
				console.log(new Date(newTimestamp).toTimeString());
				break;

			case TimestampType.UTC:
				console.log(new Date(newTimestamp).toUTCString());
				break;

			case TimestampType.String:
				console.log(new Date(newTimestamp).toString());
				break;
		}
	});

await new Command()
	.name("time-zoner")
	.version("0.1.0")
	.description("A CLI tool for converting between time zones.")
	.globalType(
		"timestamp-type",
		new EnumType(Object.keys(TimestampType).map((timestampType) => timestampType.toLowerCase())),
	)
	.globalType("timezone", new EnumType(Object.keys(TimeZones).map((timeZone) => timeZone.toLowerCase())))
	.option("-z, --zone <zone:timezone>", "Output time zone", {
		default: "mst",
		required: true,
	})
	.option("-t, --type <type:timestamp-type>", "Output timestamp type", {
		default: "unix",
		required: true,
	})
	.arguments("[ms-timestamp:number]")
	.action(({ zone, type }, timestamp = Date.now()) => {
		if (numberLength(timestamp) > 13) throw new Error("Invalid millisecond timestamp (should <= 13 digits).");
		const asTimeZone = toTimeZones(zone);
		if (asTimeZone === undefined) throw new Error(`Invalid time zone - ${zone}`);

		const asTimestamp = toTimestampType(type);
		if (asTimestamp === undefined) throw new Error(`Invalid timestamp - ${type}`);

		const newTimestamp = fromUtcTime(timestamp, asTimeZone);

		switch (asTimestamp) {
			case TimestampType.Unix:
				console.log(Math.floor(newTimestamp / 1000));
				break;

			case TimestampType.Milliseconds:
				console.log(newTimestamp);
				break;

			case TimestampType.ISO:
				console.log(new Date(newTimestamp).toISOString());
				break;

			case TimestampType.Date:
				console.log(new Date(newTimestamp).toDateString());
				break;

			case TimestampType.Time:
				console.log(new Date(newTimestamp).toTimeString());
				break;

			case TimestampType.UTC:
				console.log(new Date(newTimestamp).toUTCString());
				break;

			case TimestampType.String:
				console.log(new Date(newTimestamp).toString());
				break;
		}
	})
	.command("from-seconds", fromSecondsCommand)
	.command("list-time-zones", listTimeZonesCommand)
	.parse(Deno.args);
