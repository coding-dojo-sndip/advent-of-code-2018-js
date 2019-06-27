export class Point {
	constructor(x, y) {
		this.x = x
		this.y = y
	}

	static compare(a, b) {
		return a.x == b.x ? a.y - b.y : a.x - a.y
	}
}
