import fs from 'fs'

export const arrayOfLines = input =>
	fs
		.readFileSync(input, 'utf-8')
		.split('\n')
		.map(line => line.replace('\r', ''))

export const arrayOfInts = input => arrayOfLines(input).map(n => parseInt(n))

export const deleteFile = path => {
	try {
		fs.unlinkSync(path)
	} catch (err) {
		//
	}
}

export const appendLine = (path, line) => fs.appendFileSync(path, `${line}\n`)
