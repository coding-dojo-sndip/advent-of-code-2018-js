import fs from 'fs'

export class Point {
	constructor(x, y) {
		this.x = x
		this.y = y
	}

	static compare(a, b) {
		return a.x == b.x ? a.y - b.y : a.x - a.y
	}
}

export const arrayOfLines = input =>
	fs
		.readFileSync(input, 'utf-8')
		.split('\n')
		.map(line => line.replace('\r', ''))

export const arrayOfInts = input => arrayOfLines(input).map(n => parseInt(n))
