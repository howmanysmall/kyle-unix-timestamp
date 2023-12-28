export type UtcPositiveOffset = `UTC+${number}` | `UTC+${number}:${number}`;
export type UtcNegativeOffset = `UTC-${number}` | `UTC-${number}:${number}`;
export type UtcOffset = UtcPositiveOffset | UtcNegativeOffset;
