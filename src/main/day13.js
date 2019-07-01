import { arrayOfLines } from './days'
import { Cart } from './beans/Cart'

const directions = ['^', 'v', '<', '>']

export const part1 = input => {
	const track = readTrack(input)
	const carts = loadCarts(track)
	for (;;) {
		carts.sort(Cart.compare)
		for (const cart of carts) {
			cart.move(track)
			if (cart.collideWithAny(carts)) return `${cart.position.re},${cart.position.im}`
		}
	}
}

export const part2 = input => {
	const track = readTrack(input)
	let carts = loadCarts(track)
	while (carts.length > 1) {
		carts.sort(Cart.compare)
		for (const cart of carts) {
			if (cart.moving) {
				cart.move(track)
				const other = cart.collideWithAny(carts)
				if (other) {
					cart.moving = false
					other.moving = false
				}
			}
		}
		carts = carts.filter(cart => cart.moving)
	}
	const lastCart = carts[0]
	return `${lastCart.position.re},${lastCart.position.im}`
}

const readTrack = input => arrayOfLines(input).map(line => [...line])

const loadCarts = track => {
	const carts = []
	for (let i = 0; i < track.length; i++) {
		for (let j = 0; j < track[0].length; j++) {
			const direction = track[i][j]
			if (directions.includes(direction)) {
				carts.push(new Cart(j, i, direction))
			}
		}
	}
	return carts
}
