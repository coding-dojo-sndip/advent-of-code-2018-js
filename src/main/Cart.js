import { add, multiply, complex } from 'mathjs'
const directions = {
	'<': complex('-1'),
	'>': complex('+1'),
	'^': complex('-i'),
	'v': complex('+i'),
}
export class Cart {
	constructor(direction, real, imaginar) {
		this.direction = directions[direction]
		this.coord = complex(real, imaginar)
		this.state = 'left'
	}
	forward() {
		this.coord = add(this.coord, this.direction)
	}
	turnLeft() {
		this.direction = multiply(this.direction, complex('-i'))
	}
	turnRight() {
		this.direction = multiply(this.direction, complex('+i'))
	}
	turn(track) {
		switch (track[this.coord.im][this.coord.re]) {
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
}
