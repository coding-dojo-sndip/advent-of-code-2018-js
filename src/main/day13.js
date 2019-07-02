import { arrayOfLines } from './days'
import { Cart, directions } from './beans/Cart'

export const part1 = input => {
	const track = readTrack(input)
	const carts = loadCarts(track)
	for (;;) {
		carts.sort(Cart.compare)
		for (const cart of carts) {
			cart.move(track)
			if (cart.collideWithAny(carts)) return cart.toString()
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
	return lastCart.toString()
}

const readTrack = input => arrayOfLines(input).map(line => [...line])

const loadCarts = track => {
	const carts = []
	for (let i = 0; i < track.length; i++) {
		for (let j = 0; j < track[0].length; j++) {
			const direction = track[i][j]
			if (Object.keys(directions).includes(direction)) {
				carts.push(new Cart(j, i, direction))
			}
		}
	}
	return carts
}
