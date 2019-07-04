import { arrayOfLines } from './days'
import { Cart } from './Cart'

const readTrack = input => arrayOfLines(input).map(line => [...line])
const directions = ['<', '>', '^', 'v']

const createCarts = track => {
	const carts = []
	for (let i = 0; i < track.length; i++) {
		for (let j = 0; j < track[i].length; j++) {
			if (directions.includes(track[i][j])) {
				carts.push(new Cart(track[i][j], j, i))
			}
		}
	}
	return carts
}
export const part1 = input => {
	const track = readTrack(input)
	const carts = createCarts(track)
}

export const part2 = input => input
