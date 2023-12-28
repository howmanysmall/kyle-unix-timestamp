export enum TimestampType {
	Unix = "Unix",
	Milliseconds = "Milliseconds",
	ISO = "ISO",
	Date = "Date",
	Time = "Time",
	UTC = "UTC",
	String = "String",
}

export function toTimestampType(value: unknown): TimestampType | undefined {
	for (const [timestampType, timestampTypeValue] of Object.entries(TimestampType))
		if (
			timestampType === value ||
			timestampTypeValue === value ||
			timestampType.toLowerCase() === value ||
			timestampTypeValue.toLowerCase() === value
		)
			return timestampTypeValue;

	return undefined;
}

export default TimestampType;
