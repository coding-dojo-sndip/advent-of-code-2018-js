export const part1 = numberOfRecipes => {
	let recipeList = [3,7]
	let positionElves= [0,1]

	while (recipeList.length<numberOfRecipes+10){
		let newRecipe = recipeList[positionElves[0]]+recipeList[positionElves[1]]
		let newRecipeList = newRecipe.toString().split('')
		recipeList.push(...(newRecipeList.map(s => parseInt(s))))
		positionElves= positionElves.map(position => moveElf(position,recipeList))
	}
	return recipeList.slice(numberOfRecipes,numberOfRecipes+10).join('')
}

 const moveElf = (position,recipeList) =>	(position+(recipeList[position]+1))%recipeList.length	

export const part2 = scoreSequence => {
	let recipeList = [3,7]
	let positionElves= [0,1]
	let index = -1

	while (index < 0) {
		let newRecipe = recipeList[positionElves[0]]+recipeList[positionElves[1]]
		let newRecipeList = newRecipe.toString().split('')
		recipeList.push(...(newRecipeList.map(s => parseInt(s))))
		positionElves= positionElves.map(position => moveElf(position,recipeList))
		index = stop(recipeList, scoreSequence.toString())
	}
	return index
}

const stop = (recipeList, inputString) => {
	let res = -1
	if (recipeList.length < inputString.length) {
		return res
	}

	if (recipeList.slice(recipeList.length - inputString.length, recipeList.length).join('') === inputString) {
		res = recipeList.length - inputString.length
	} else if (recipeList.slice(recipeList.length - inputString.length - 1, recipeList.length - 1).join('') === inputString) {
		res = recipeList.length - inputString.length - 1
	}
	return res
}
