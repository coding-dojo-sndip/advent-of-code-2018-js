import fs from 'fs'

function part1(input) {
    return fs.readFileSync(input, 'utf-8')
        .split('\n')
        .map(n => parseInt(n))
        .reduce((a, b) => a + b)
}

function part2(input) {
    const frequencies = new Set()
    const changes = fs.readFileSync(input, 'utf-8')
        .split('\n')
        .map(n => parseInt(n))
    let frequency = 0
    let index = 0
    while(!frequencies.has(frequency)) {
        frequencies.add(frequency)
        frequency += changes[index % changes.length]
        index ++
    }
    return frequency
}

export { part1, part2 }