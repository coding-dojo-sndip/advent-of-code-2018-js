class Pot {
	constructor(index, state) {
		this.index = index
		this.state = state
		this.nextState = '.'
	}

	update() {
		this.state = this.nextState
	}
}

export default Pot
