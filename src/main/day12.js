import { takeWhile, takeRightWhile } from 'lodash'
import { arrayOfLines, deleteFile, appendLine } from './days'
import Pot from './beans/Pot'

export const part1 = input => {
	const pots = potsAfterGenerations(input, 20)
	return score(pots)
}

export const part2 = input => {
	const base = 195
	const pots = potsAfterGenerations(input, base)
	const baseScore = score(pots)
	const numberOfPlants = countPlants(pots)
	return baseScore + (50000000000 - base) * numberOfPlants
}

export const logPart2 = input => {
	deleteFile('12.log')
	potsAfterGenerations(input, 300, '12.log')
}

const potsAfterGenerations = (input, numberOfGenerations, logFile) => {
	const lines = arrayOfLines(input)
	const initialState = readInitialState(lines)
	const rules = readRules(lines)
	const pots = createPots(initialState)
	for (let gen = 0; gen < numberOfGenerations; gen++) {
		addEmptyPots(pots)
		for (let i = 2; i < pots.length - 2; i++) {
			pots[i].computeNextState(rules, pots)
		}
		pots.forEach(pot => pot.changeState())
		if (logFile) appendLine(logFile, pots.map(pot => pot.state).join(''))
	}
	return pots
}

const readInitialState = lines =>
	lines
		.shift()
		.replace('initial state: ', '')
		.replace('\r', '')

const readRules = lines => lines.filter(line => line.endsWith('#')).map(line => line.substring(0, 5))

const createPots = initialState => [...initialState].map((plant, index) => new Pot(index, plant))

const score = pots =>
	pots
		.filter(pot => !pot.isEmpty())
		.map(pot => pot.index)
		.reduce((a, b) => a + b, 0)

const countPlants = pots => pots.filter(pot => !pot.isEmpty()).length

const addEmptyPots = pots => {
	const numberOfLeadingEmptyPots = takeWhile(pots, pot => pot.isEmpty()).length
	if (numberOfLeadingEmptyPots < 3) {
		for (let i = 0; i < 3 - numberOfLeadingEmptyPots; i++) {
			addLeadingPot(pots)
		}
	}
	const numberOfTrailingEmptyPots = takeRightWhile(pots, pot => pot.isEmpty()).length
	if (numberOfTrailingEmptyPots < 3) {
		for (let i = 0; i < 3 - numberOfTrailingEmptyPots; i++) {
			addTrailingPot(pots)
		}
	}
}

const addLeadingPot = pots => {
	const firstPot = pots[0]
	const leadingPot = new Pot(firstPot.index - 1, '.')
	pots.unshift(leadingPot)
}

const addTrailingPot = pots => {
	const lastPot = pots[pots.length - 1]
	const trailingPot = new Pot(lastPot.index + 1, '.')
	pots.push(trailingPot)
}
