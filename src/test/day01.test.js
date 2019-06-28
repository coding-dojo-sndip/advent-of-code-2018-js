import { part1, part2 } from '../main/day01'

describe('Day 01, part 1', () => {
	test('the resulting frequency is 3', () => {
		expect(part1('src/test/resources/01-0.txt')).toBe(3)
	})
	test('the answer to part 1 is 592', () => {
		expect(part1('src/main/resources/01.txt')).toBe(592)
	})
})

describe('Day 01, part 2', () => {
	test('the first frequency the device reaches twice is 2', () => {
		expect(part2('src/test/resources/01-0.txt')).toBe(2)
	})
	test('the answer to part 2 is 241', () => {
		expect(part2('src/main/resources/01.txt')).toBe(241)
	})
})
