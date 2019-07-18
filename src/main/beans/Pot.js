class Pot {
	constructor(index, state) {
		this.index = index
		this.state = state
		this.nextState = undefined
	}

	computeNextState(rules, pots) {
		const index = pots.indexOf(this)
		const pattern = pots[index - 2].state + pots[index - 1].state + this.state + pots[index + 1].state + pots[index + 2].state
		this.nextState = rules.includes(pattern) ? '#' : '.'
	}

	changeState() {
		this.state = this.nextState || this.state
	}

	isEmpty() {
		return this.state === '.'
	}
}

export default Pot
