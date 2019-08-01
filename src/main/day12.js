import { arrayOfLines } from './days'
import Pot from './beans/Pot'

const potsAfterGenerations = (input, numberOfGenerations) => {
	const lines = arrayOfLines(input)
	const initialState = readInitialState(lines)
	const rules = readRules(lines)
	const pots = createPots(initialState)
	for (let generation = 0; generation < numberOfGenerations; generation++) {
		addEmptyPots(pots)
		for (let index = 2; index < pots.length - 2; index++) {
			applyRules(pots, rules, index)
		}
		pots.forEach(pot => pot.update())
	}
	return pots
}

export const part1 = input => {
	const pots = potsAfterGenerations(input, 20)
	return score(pots)
}

export const part2 = input => {
	const base = 300
	const pots = potsAfterGenerations(input, base)
	const numberOfPlants = countPlants(pots)
	const baseScore = score(pots)
	return baseScore + (50000000000 - base) * numberOfPlants
}

const readInitialState = lines => lines[0].replace('initial state: ', '')

const readRules = lines => lines.filter(line => line.endsWith('=> #')).map(line => line.replace(' => #', ''))

const createPots = initialState => [...initialState].map((state, index) => new Pot(index, state))

const addEmptyPots = pots => {
	for (let i = 0; i < 4; i++) {
		addEmptyPotLeft(pots)
		addEmptyPotRight(pots)
	}
}

const addEmptyPotLeft = pots => pots.unshift(new Pot(pots[0].index - 1, '.'))

const addEmptyPotRight = pots => pots.push(new Pot(pots[pots.length - 1].index + 1, '.'))

const applyRules = (pots, rules, index) => {
	const current = pots
		.slice(index - 2, index + 3)
		.map(pot => pot.state)
		.join('')
	const pot = pots[index]
	pot.nextState = rules.includes(current) ? '#' : '.'
}

const score = pots =>
	pots
		.filter(pot => pot.state === '#')
		.map(pot => pot.index)
		.reduce((a, b) => a + b)

const countPlants = pots => pots.filter(pot => pot.state === '#').length
