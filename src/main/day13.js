import { arrayOfLines } from './days'
import { Wagon } from './beans/Wagon'

const ways = ['^', 'v', '<', '>']

export const part1 = input => {
	const { track, wagons } = readInput(input)
	for (;;) {
		wagons.sort(Wagon.compare)
		for (const wagon of wagons) {
			wagon.move(track)
			if (wagon.collideWithAny(wagons)) return `${wagon.point.x},${wagon.point.y}`
		}
	}
}

export const part2 = input => {
	const { track, wagons } = readInput(input)
	let movingWagons = wagons
	while (movingWagons.length > 1) {
		wagons.sort(Wagon.compare)
		for (const wagon of wagons) {
			wagon.move(track)
			const other = wagons.find(other => wagon.collideWith(other))
			if (other) {
				wagon.crashed = true
				other.crashed = true
				movingWagons = wagons.filter(wagon => !wagon.crashed)
			}
		}
	}
	return `${movingWagons[0].point.x},${movingWagons[0].point.y}`
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

const replaceWagonsByTrack = string => {
	let a = string.replace(/(v|\^)/, '|')
	return a.replace(/(<|>)/, '-')
}
