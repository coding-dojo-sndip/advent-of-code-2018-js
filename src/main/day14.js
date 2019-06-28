class Elf {
	constructor(id) {
		this.position = id
	}

	currentRecipe(recipes) {
		return recipes[this.position]
	}

	moveToNextPosition(recipes) {
		this.position = (this.position + 1 + this.currentRecipe(recipes)) % recipes.length
	}
}

export const part1 = numberOfRecipes => {
	const recipes = [3, 7]
	const elves = [new Elf(0), new Elf(1)]
	while (recipes.length < numberOfRecipes + 10) {
		recipes.push(...nextRecipes(elves, recipes))
		elves.forEach(elf => elf.moveToNextPosition(recipes))
	}
	return recipes.slice(numberOfRecipes, numberOfRecipes + 10).join('')
}

export const part2 = input => input

const nextRecipes = (elves, recipes) =>
	elves
		.map(elf => elf.currentRecipe(recipes))
		.reduce((a, b) => a + b)
		.toString()
		.split('')
		.map(s => parseInt(s))
