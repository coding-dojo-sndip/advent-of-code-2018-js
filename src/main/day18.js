import { arrayOfLines } from './days'

export const part1 = input => {
	let forest = arrayOfLines(input).map(chaine => chaine.split(''))
	for (let i = 0; i < 10; i++) {
		forest = updateForest(forest)
	}
	return forest.flat().filter(c => c === '|').length * forest.flat().filter(c => c === '#').length
}

const updateForest = function(forest) {
	let newForest = []
	for (let i = 0; i < forest.length; i++) {
		newForest.push([])
		for (let j = 0; j < forest[0].length; j++) {
			newForest[i].push(updateAcre(forest, i, j))
		}
	}
	return newForest
}

const updateAcre = function(forest, i, j) {
	let newSectorAcre = [forest[i + 1], forest[i], forest[i - 1]]
		.filter(line => line !== undefined)
		.map(line => [line[j - 1], line[j], line[j + 1]])
		.flat()

	switch (forest[i][j]) {
		case '.':
			if (newSectorAcre.filter(a => a === '|').length >= 3) {
				return '|'
			}
			break
		case '|':
			if (newSectorAcre.filter(a => a === '#').length >= 3) {
				return '#'
			}
			break
		case '#':
			if (newSectorAcre.filter(a => a === '#').length === 1 || newSectorAcre.filter(a => a === '|').length === 0) {
				return '.'
			}
			break
		default:
			break
	}
	return forest[i][j]
}

export const part2 = input => input
