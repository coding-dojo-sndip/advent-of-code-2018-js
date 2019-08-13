import { part1, part2 } from '../main/day14'

describe('Day 14, part 1', () => {
	test('after 9 recipes, the scores of the next ten would be 5158916779', () => {
		expect(part1(9)).toBe('5158916779')
	})
	test('after 5 recipes, the scores of the next ten would be 0124515891', () => {
		expect(part1(5)).toBe('0124515891')
	})
	test('after 18 recipes, the scores of the next ten would be 9251071085', () => {
		expect(part1(18)).toBe('9251071085')
	})
	test('after 2018 recipes, the scores of the next ten would be 5941429882', () => {
		expect(part1(2018)).toBe('5941429882')
	})
	test('after 165061 recipes, the scores of the next ten would be 5992684592', () => {
		expect(part1(633601)).toBe('5115114101')
	})
})

describe('Day 14, part 2', () => {
	test('51589 first appears after 9 recipes', () => {
		expect(part2('51589')).toBe(9)
	})
	test('01245 first appears after 5 recipes', () => {
		expect(part2('01245')).toBe(5)
	})
	test('92510 first appears after 18 recipes', () => {
		expect(part2('92510')).toBe(18)
	})
	test('59414 first appears after 2018 recipes', () => {
		expect(part2('59414')).toBe(2018)
	})
	test('165061 first appears after 20181148 recipes', () => {
		expect(part2('633601')).toBe(20310465)
	})
})
