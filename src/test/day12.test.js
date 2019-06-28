import { part1, part2 } from '../main/day12'

describe('Day 12, part 1', () => {
	test('after 20 generations, the sum of the numbers of all pots which contain a plant is 325', () => {
		expect(part1('src/test/resources/12-0.txt')).toBe(325)
	})
	test('the answer to part 1 is 1430', () => {
		expect(part1('src/main/resources/12.txt')).toBe(1430)
	})
})

describe('Day 12, part 2', () => {
	test('the answer to part 2 is 1150000000457', () => {
		expect(part2('src/main/resources/12.txt')).toBe(1150000000457)
	})
})
