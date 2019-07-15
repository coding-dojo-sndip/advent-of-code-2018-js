import { add, multiply, complex, equal } from 'mathjs'

const directions = {
	'<': complex('-1'),
	'>': complex('+1'),
	'^': complex('-i'),
	'v': complex('+i'),
}

export class Cart {
	constructor(direction, x, y) {
		this.direction = directions[direction]
		this.position = complex(x, y)
		this.state = 'left'
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

	percut(cart) {
		return equal(this.position, cart.position)
	}

	percutAny(carts) {
		return carts.filter(cart => cart !== this).some(cart => this.percut(cart))
	}

	compareTo(cart) {
		return this.direction.im === cart.direction.im ? this.direction.re - cart.direction.re : this.direction.im - cart.direction.im
	}
	
}
