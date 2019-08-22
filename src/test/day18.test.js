import { part1, part2 } from '../main/day18'

describe('Day 18, part 1', () => {
	test('l\'exemple donne 1147', () => {
		expect(part1('src/test/resources/18-0.txt')).toBe(1147)
	})
	test('le vrai input donne ??', () => {
		expect(part1('src/main/resources/18.txt')).toBe(0)
	})
})
