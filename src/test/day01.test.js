import {part1, part2} from '../main/day01'

describe('Day 01, part 1', () => {
    test('the sum of all numbers is 3', () => {
        expect(part1('src/test/resources/01-0.txt')).toBe(3)
    })
    
    test('the answer to part 1 is 592', () => {
        const answer = part1('src/main/resources/01.txt')
        console.log(`Day01.1 : ${answer}`)
        expect(answer).toBe(592)
    })
})