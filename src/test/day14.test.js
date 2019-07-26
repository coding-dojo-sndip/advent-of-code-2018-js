import { part1, part2 } from '../main/day14'

describe('Day 14, part 1', () => {
	test('after 9 recipes, the scores of the next ten would be 5158916779', () => {
		expect(part1(9)).toBe('5158916779')
	})
	test.skip('after 5 recipes, the scores of the next ten would be 0124515891', () => {
		expect(part1(5)).toBe('0124515891')
	})
	test.skip('after 18 recipes, the scores of the next ten would be 9251071085', () => {
		expect(part1(18)).toBe('9251071085')
	})
	test.skip('after 2018 recipes, the scores of the next ten would be 5941429882', () => {
		expect(part1(2018)).toBe('5941429882')
	})
	test('after 165061 recipes, the scores of the next ten would be 5992684592', () => {
		expect(part1(165061)).toBe('5992684592')
	})
})

describe('Day 14, part 2', () => {
	test('51589 first appears after 9 recipes', () => {
		expect(part2('51589')).toBe(9)
	})
	test.skip('01245 first appears after 5 recipes', () => {
		expect(part2('01245')).toBe(5)
	})
	test.skip('92510 first appears after 18 recipes', () => {
		expect(part2('92510')).toBe(18)
	})
	test.skip('59414 first appears after 2018 recipes', () => {
		expect(part2('59414')).toBe(2018)
	})
	test.skip('165061 first appears after 20181148 recipes', () => {
		expect(part2('165061')).toBe(20181148)
	})
})
