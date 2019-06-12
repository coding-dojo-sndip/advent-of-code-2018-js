import { arrayOfLines } from './days'

export const part1 = input => {
	const numberOfGenerations = 20
	const { state, leftPadding } = computeFinalState(input, numberOfGenerations)
	return score(state, leftPadding)
}

export const part2 = input => {
	const firstStableIndex = 111
	const { state, leftPadding } = computeFinalState(input, firstStableIndex) 
	const baseScore = score(state, leftPadding)
	const numberOfPlants = [...state].filter(c => c === '#').length
	return baseScore + (50000000000 - firstStableIndex) * numberOfPlants
}

const computeFinalState = (input, numberOfGenerations) => {
	const lines = arrayOfLines(input)
	let state = readInitialState(lines)
	const rules = readRules(lines)
	let leftPadding = 0
	for (let n = 0; n < numberOfGenerations; n++) {
		let nextState = []
		const padLeft = padLeftCount(state)
		const padRight = padRightCount(state)
		const paddedState = padState(state, padLeft, padRight)
		leftPadding += padLeft - 2
		for (let i = 2; i < paddedState.length - 2; i++) {
			nextState.push(computeNextState(rules, paddedState, i))
		}
		state = nextState.join('')
	}
	return { state, leftPadding }
}

const readInitialState = lines => lines
	.shift()
	.replace('initial state: ', '')
	.replace('\r', '')

const readRules = lines => lines
	.filter(line => line.endsWith('#'))
	.map(line => line.substring(0, 5))

const computeNextState = (rules, state, index) => rules.includes(state.substring(index - 2, index + 3)) ? '#' : '.'

const padLeftCount = state => {
	let pad = 4
	let index = 0
	while(state.charAt(index) === '.') {
		index ++
		pad --
	}
	return pad
}

const padRightCount = state => {
	let pad = 4
	let index = 0
	while(state.charAt(state.length - 1 - index) === '.') {
		index ++
		pad --
	}
	return pad
}

const padState = (state, padLeftCount, padRightCount) => {
	let paddedState = state
	paddedState = padLeftCount <= 0 ? paddedState.substring(-padLeftCount) : paddedState.padStart(paddedState.length + padLeftCount, '.')
	paddedState = padRightCount <= 0 ? paddedState.substring(0, paddedState.length + padRightCount) : paddedState.padEnd(paddedState.length + padRightCount, '.')
	return paddedState
}

const score = (state, leftPadding) => {
	let score = 0
	for(let index = 0; index < state.length; index ++) {
		score += state[index] === '#' ? index - leftPadding : 0
	}
	return score
}


