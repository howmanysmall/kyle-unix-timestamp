import { assertEquals } from "std/assert/assert_equals.ts";
import { numberLength, slowNumberLength } from "../utilities/number-utilities.ts";

Deno.test("numberLength", () => {
	assertEquals(numberLength(0), 1);
	assertEquals(numberLength(1), 1);
	assertEquals(numberLength(10), 2);
	assertEquals(numberLength(100), 3);
	assertEquals(numberLength(1000), 4);
	assertEquals(numberLength(10000), 5);
	assertEquals(numberLength(100000), 6);
	assertEquals(numberLength(1000000), 7);
	assertEquals(numberLength(10000000), 8);
	assertEquals(numberLength(100000000), 9);
	assertEquals(numberLength(1000000000), 10);
});

Deno.test("slowNumberLength", () => {
	assertEquals(slowNumberLength(0), 1);
	assertEquals(slowNumberLength(1), 1);
	assertEquals(slowNumberLength(10), 2);
	assertEquals(slowNumberLength(100), 3);
	assertEquals(slowNumberLength(1000), 4);
	assertEquals(slowNumberLength(10000), 5);
	assertEquals(slowNumberLength(100000), 6);
	assertEquals(slowNumberLength(1000000), 7);
	assertEquals(slowNumberLength(10000000), 8);
	assertEquals(slowNumberLength(100000000), 9);
	assertEquals(slowNumberLength(1000000000), 10);
});
