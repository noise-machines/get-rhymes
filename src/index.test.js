/*
const test = require('ava')
const getRhymes = require('./index')
const isString = require('lodash.isstring')
const sortBy = require('lodash.sortby')

let rhymes

test.before(async () => {
  rhymes = await getRhymes('simple')
})

test('returns an array', t => {
  t.plan(1)
  t.true(Array.isArray(rhymes))
})

test('returns an array of strings', t => {
  t.plan(rhymes.length)
  rhymes.forEach(rhyme => {
    t.true(isString(rhyme))
  })
})

test('returns an array of strings sorted by length', t => {
  t.plan(rhymes.length)
  const sortedRhymes = sortBy(rhymes, ['length'])
  sortedRhymes.forEach((sortedRhyme, i) => {
    const actualRhyme = rhymes[i]
    t.is(sortedRhyme.length, actualRhyme.length)
  })
})

*/
