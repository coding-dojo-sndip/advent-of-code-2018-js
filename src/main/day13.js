import { arrayOfLines } from './days'
import { Cart } from './Cart'
import { orderBy } from 'lodash'

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

const sort = carts => orderBy(carts, ['position.im', 'position.re'])

export const part1 = input => {
	const track = readTrack(input)
	let carts = createCarts(track)
	for (;;) {
		carts = sort(carts)
		for (let cart of carts) {
			cart.forward()
			cart.turn(track)
			if (cart.percutAny(carts)) {
				return `${cart.position.re},${cart.position.im}`
			}
		}
	}
}

export const part2 = input => input
