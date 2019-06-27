import { Point } from './Point'

const turns = ['LEFT', 'STRAIGHT', 'RIGHT']

export class Wagon {
	constructor(x, y, way) {
		this.point = new Point(x, y)
		this.way = way
		this.turnIndex = 0
		this.crashed = false
	}

	nextTurn() {
		return (this.turnIndex + 1) % turns.length
	}

	nextPoint() {
		switch (this.way) {
		case '^':
			return new Point(this.point.x, this.point.y - 1)
		case 'v':
			return new Point(this.point.x, this.point.y + 1)
		case '<':
			return new Point(this.point.x - 1, this.point.y)
		case '>':
			return new Point(this.point.x + 1, this.point.y)
		}
	}

	collideWith(other) {
		return this.way !== other.way && this.point.x === other.point.x && this.point.y === other.point.y && other.crashed === false
	}

	collideWithAny(wagons) {
		return wagons.some(other => this.collideWith(other))
	}

	move(track) {
		this.point = this.nextPoint()
		switch (track[this.point.y][this.point.x]) {
		case '/':
			switch (this.way) {
			case '^':
				this.way = '>'
				break
			case 'v':
				this.way = '<'
				break
			case '<':
				this.way = 'v'
				break
			case '>':
				this.way = '^'
				break
			}
			break
		case '\\':
			switch (this.way) {
			case '^':
				this.way = '<'
				break
			case 'v':
				this.way = '>'
				break
			case '<':
				this.way = '^'
				break
			case '>':
				this.way = 'v'
				break
			}
			break
		case '+':
			switch (turns[this.turnIndex]) {
			case 'LEFT':
				switch (this.way) {
				case '^':
					this.way = '<'
					break
				case 'v':
					this.way = '>'
					break
				case '<':
					this.way = 'v'
					break
				case '>':
					this.way = '^'
					break
				}
				break
			case 'RIGHT':
				switch (this.way) {
				case '^':
					this.way = '>'
					break
				case 'v':
					this.way = '<'
					break
				case '<':
					this.way = '^'
					break
				case '>':
					this.way = 'v'
					break
				}
				break
			}
			this.turnIndex = this.nextTurn()
			break
		}
	}
}
