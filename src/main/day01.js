import { arrayOfInts } from './days'

export const part1 = input => arrayOfInts(input).reduce((a, b) => a + b)

export const part2 = input => {
	const frequencies = new Set()
	const changes = arrayOfInts(input)
	let frequency = 0
	let index = 0
	while (!frequencies.has(frequency)) {
		frequencies.add(frequency)
		frequency += changes[index % changes.length]
		index++
	}
	return frequency
}
