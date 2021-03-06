import { orderBy } from 'lodash'
import { arrayOfLines } from './days'
import Cart from './beans/Cart'

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
		for (const cart of carts) {
			cart.forward()
			cart.turn(track)
			if (cart.collideWithAny(carts)) {
				return `${cart.position.re},${cart.position.im}`
			}
		}
	}
}

export const part2 = input => {
	const track = readTrack(input)
	let carts = createCarts(track)
	while (carts.length > 1) {
		carts = sort(carts)
		for (const cart of carts) {
			if (!cart.isBroken) {
				cart.forward()
				cart.turn(track)
				const other = cart.collideWithAny(carts)
				if (other) {
					other.isBroken = true
					cart.isBroken = true
				}
			}
		}
		carts = carts.filter(c => !c.isBroken)
	}
	const lastCart = carts[0]
	return `${lastCart.position.re},${lastCart.position.im}`
}
