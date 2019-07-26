import { arrayOfLines } from './days'
import Pot from './beans/Pot'

export const part1 = input => {
	const lines = arrayOfLines(input)
	const initialState = readInitialState(lines)
	const rules = readRules(lines)
	const pots = createPots(initialState)
	for (let generation = 0; generation < 20; generation++) {
		addEmptyPots(pots)
		for (let index = 2; index < pots.length - 2; index++) {
			applyRules(pots, rules, index)
		}
		pots.forEach(pot => pot.update())
	}
	return score(pots)
}

export const part2 = input => input

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
