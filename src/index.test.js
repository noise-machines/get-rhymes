/* global expect, it, beforeAll */

const getRhymes = require('./index')
const isString = require('lodash.isstring')
const sortBy = require('lodash.sortby')

let rhymes

beforeAll(async () => {
  rhymes = await getRhymes('simple')
})

it('returns an array', () => {
  expect.assertions(1)
  expect(Array.isArray(rhymes)).toBe(true)
})

it('returns an array of strings', () => {
  expect.assertions(rhymes.length)
  rhymes.forEach(rhyme => {
    expect(isString(rhyme)).toBe(true)
  })
})

it('returns an array of strings sorted by length', () => {
  expect.assertions(rhymes.length)
  const sortedRhymes = sortBy(rhymes, ['length'])
  sortedRhymes.forEach((sortedRhyme, i) => {
    const actualRhyme = rhymes[i]
    expect(sortedRhyme.length).toEqual(actualRhyme.length)
  })
})
