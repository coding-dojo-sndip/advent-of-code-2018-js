import fs from 'fs'

export const arrayOfLines = input => fs.readFileSync(input, 'utf-8').split('\n')

export const arrayOfInts = input => arrayOfLines(input).map(n => parseInt(n))