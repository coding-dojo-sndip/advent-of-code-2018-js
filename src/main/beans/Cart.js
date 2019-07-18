import { add, multiply, complex, equal } from 'mathjs'

const directions = {
	'<': complex('-1'),
	'>': complex('+1'),
	'^': complex('-i'),
	'v': complex('+i'),
}

class Cart {
	constructor(direction, x, y) {
		this.direction = directions[direction]
		this.position = complex(x, y)
		this.state = 'left'
		this.isBroken = false
	}

	forward() {
		this.position = add(this.position, this.direction)
	}

	turnLeft() {
		this.direction = multiply(this.direction, complex('-i'))
	}

	turnRight() {
		this.direction = multiply(this.direction, complex('+i'))
	}

	turn(track) {
		switch (track[this.position.im][this.position.re]) {
			case '/':
				this.direction.re === 0 ? this.turnRight() : this.turnLeft()
				break
			case '\\':
				this.direction.re === 0 ? this.turnLeft() : this.turnRight()
				break
			case '+':
				switch (this.state) {
					case 'left':
						this.turnLeft()
						this.state = 'straight'
						break
					case 'straight':
						this.state = 'right'
						break
					case 'right':
						this.turnRight()
						this.state = 'left'
						break
				}
		}
	}

	collideWith(cart) {
		return equal(this.position, cart.position)
	}

	collideWithAny(carts) {
		return carts.filter(cart => cart !== this && !cart.isBroken).find(cart => this.collideWith(cart))
	}

	compareTo(cart) {
		return this.direction.im === cart.direction.im ? this.direction.re - cart.direction.re : this.direction.im - cart.direction.im
	}
}

export default Cart
