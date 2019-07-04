import { part1, part2 } from '../main/day13'

describe('Day 13, part 1', () => {
	test('the location of the first crash is 7, 3', () => {
		expect(part1('src/test/resources/13-0.txt')).toBe('7,3')
	})
	test.skip('the location of the first crash is 28, 107', () => {
		expect(part1('src/main/resources/13.txt')).toBe('28,107')
	})
})

describe.skip('Day 13, part 2', () => {
	test('the location of the last cart is 6, 4', () => {
		expect(part2('src/test/resources/13-1.txt')).toBe('6,4')
	})
	test('the location of the last cart is 36, 123', () => {
		expect(part2('src/main/resources/13.txt')).toBe('36,123')
	})
})
