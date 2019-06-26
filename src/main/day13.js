import { arrayOfLines, Point } from './days'

const ways = ['^', 'v', '<', '>']
const turns = ['LEFT', 'STRAIGHT', 'RIGHT']

class Wagon {
	constructor(x, y, way) {
		this.point = new Point(x, y)
		this.way = way
		this.turn = 0
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
			switch (turns[this.turn]) {
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
			this.turn = this.nextTurn()
			break
		}
	}

	nextTurn() {
		return (this.turn + 1) % turns.length
	}

	nextPoint() {
		switch (this.way) {
		case '^':
			return new Point(this.x, this.y - 1)
		case 'v':
			return new Point(this.x, this.y + 1)
		case '<':
			return new Point(this.x - 1, this.y)
		case '>':
			return new Point(this.x + 1, this.y)
		}
	}
}

export const part1 = input => {
	const { track, wagons } = readInput(input)
	return '0,0'
}

export const part2 = input => '0,0'

const replaceWagonsByTrack = string => {
	let a = string.replace(/(v|\^)/, '|')
	return a.replace(/(<|>)/, '-')
}

const readInput = input => {
	const track = arrayOfLines(input).map(line => [...line])
	const wagons = []
	for (let i = 0; i < track.length; i++) {
		for (let j = 0; j < track[0].length; j++) {
			const way = track[i][j]
			if (ways.includes(way)) {
				wagons.push(new Wagon(j, i, way))
				track[i][j] = replaceWagonsByTrack(way)
			}
		}
	}
	return { track, wagons }
}
