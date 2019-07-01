import { complex, multiply, add, equal } from 'mathjs'

const turns = ['LEFT', 'STRAIGHT', 'RIGHT']

export class Cart {
	constructor(x, y, direction) {
		this.turnIndex = 0
		this.moving = true
		this.position = complex(x, y)
		this.direction = {
			'<': complex('-1'),
			'>': complex('+1'),
			'^': complex('-i'),
			'v': complex('+i'),
		}[direction]
	}

	move(track) {
		this.position = add(this.position, this.direction)
		switch (track[this.position.im][this.position.re]) {
		case '/':
			this.direction.re === 0 ? this.turnRight() : this.turnLeft()
			break
		case '\\':
			this.direction.re === 0 ? this.turnLeft() : this.turnRight()
			break
		case '+':
			switch (turns[this.turnIndex]) {
			case 'LEFT':
				this.turnLeft()
				break
			case 'RIGHT':
				this.turnRight()
				break
			}
			this.turnIndex = (this.turnIndex + 1) % turns.length
			break
		}
	}

	turnLeft() {
		this.direction = multiply(this.direction, complex('-i'))
	}

	turnRight() {
		this.direction = multiply(this.direction, complex('+i'))
	}

	collideWith(other) {
		return this.position.re === other.position.re && this.position.im === other.position.im && !equal(this.direction, other.direction) && other.moving
	}

	collideWithAny(carts) {
		return carts.find(other => this.collideWith(other))
	}

	static compare(a, b) {
		return a.position.im === b.position.im ? a.position.re - b.position.re : a.position.im - b.position.im
	}
}
