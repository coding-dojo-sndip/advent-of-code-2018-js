import { arrayOfLines } from './days'
import { Wagon } from './beans/Wagon'

const ways = ['^', 'v', '<', '>']

export const part1 = input => {
    const { track, wagons } = readInput(input)
    for (;;) {
        wagons.sort(Wagon.compare)
        for (const wagon of wagons) {
            wagon.move(track)
            if (wagon.collideWithAny(wagons)) return `${wagon.point.x},${wagon.point.y}`
        }
    }
}

export const part2 = input => {
    let { track, wagons } = readInput(input)
    while (wagons.length > 1) {
        wagons.sort(Wagon.compare)
        for (const wagon of wagons) {
            if (wagon.moving) {
                wagon.move(track)
                const other = wagon.collideWithAny(wagons)
                if (other) {
                    wagon.moving = false
                    other.moving = false
                }
            }
        }
        wagons = wagons.filter(wagon => wagon.moving)
    }
    const lastWagon = wagons[0]
    return `${lastWagon.point.x},${lastWagon.point.y}`
}

const readInput = input => {
    const track = arrayOfLines(input).map(line => [...line])
    const wagons = []
    for (let i = 0; i < track.length; i++) {
        for (let j = 0; j < track[0].length; j++) {
            const way = track[i][j]
            if (ways.includes(way)) {
                wagons.push(new Wagon(j, i, way))
                track[i][j] = replaceWagonsByTrack(way)
            }
        }
    }
    return { track, wagons }
}

const replaceWagonsByTrack = string => {
    let a = string.replace(/(v|\^)/, '|')
    return a.replace(/(<|>)/, '-')
}
