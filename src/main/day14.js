import CircularLinkedList from 'circular-linked-list'

class Elf {
	constructor(recipe) {
		this.recipe = recipe
	}

	currentRecipe() {
		return this.recipe.value
	}

	moveToNextPosition() {
		let nextRecipe = this.recipe
		for (let i = 0; i <= this.recipe.value; i++) {
			nextRecipe = nextRecipe.next
		}
		this.recipe = nextRecipe
	}
}

export const part1 = numberOfRecipes => {
	const recipes = new CircularLinkedList()
	recipes.append(3, 7)
	const elves = [new Elf(recipes.node(0)), new Elf(recipes.node(1))]
	while (recipes.length < numberOfRecipes + 10) {
		recipes.append(...createNewRecipes(elves, recipes))
		elves.forEach(elf => elf.moveToNextPosition(recipes))
	}
	return recipes.slice(numberOfRecipes, numberOfRecipes + 10).join('')
}

export const part2 = scoreSequence => {
	const scoreSize = scoreSequence.length
	const recipes = [3, 7]
	const elves = [new Elf(0), new Elf(1)]
	for (;;) {
		const newRecipes = createNewRecipes(elves, recipes)
		recipes.push(...newRecipes)
		elves.forEach(elf => elf.moveToNextPosition(recipes))
		if (recipes.length > scoreSize) {
			for (let i = 0; i < newRecipes.length; i += 1) {
				const end = recipes.length - i
				const start = end - scoreSize
				if (recipes.slice(start, end).join('') === scoreSequence) return start
			}
		}
	}
}

const createNewRecipes = (elves, recipes) =>
	elves
		.map(elf => elf.currentRecipe(recipes))
		.reduce((a, b) => a + b)
		.toString()
		.split('')
		.map(s => parseInt(s))
