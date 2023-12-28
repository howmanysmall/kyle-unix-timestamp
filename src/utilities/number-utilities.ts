export function numberLength(value: number) {
	return value === 0 ? 1 : Math.floor(Math.log10(value) + 1);
}

export function slowNumberLength(value: number) {
	return ((Math.log(Math.abs(value) + 1) * 0.43429448190325176) | 0) + 1;
}
