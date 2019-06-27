import { part1, part2 } from '../main/day13'

describe('Day 13, part 1', () => {
	test('the location of the first crash is 7, 3', () => {
		expect(part1('src/test/resources/13-0.txt')).toBe('7,3')
	})

	test('the location of the first crash is 113, 136', () => {
		const answer = part1('src/main/resources/13.txt')
		console.log(`Day13.2 : ${answer}`)
		expect(answer).toBe('113,136')
	})
})

describe.skip('Day 13, part 2', () => {
	test('the location of the last cart is 6, 4', () => {
		expect(part2('src/test/resources/13-0.txt')).toBe('6,4')
	})

	test('the location of the last cart is 114, 136', () => {
		const answer = part2('src/main/resources/13.txt')
		console.log(`Day13.2 : ${answer}`)
		expect(answer).toBe('114,136')
	})
})
