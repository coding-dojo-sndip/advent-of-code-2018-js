import fs from 'fs'

function part1(input) {
    return fs.readFileSync(input, 'utf-8')
        .split('\n')
        .map(n => parseInt(n))
        .reduce((a, b) => a + b)
}

function part2(input) {
    return 0
}

export { part1, part2 }