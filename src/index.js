const getDatamuseRhymes = require('./datamuse')
const getBRhymes = require('./b-rhymes')
const uniq = require('lodash.uniq')
const sortBy = require('lodash.sortby')

const getRhymes = async word => {
  // Get rhymes from both sources in parallel.
  const promises = [getDatamuseRhymes(word), getBRhymes(word)]
  const [dataMuseRhymes, bRhymes] = await Promise.all(promises)
  const rhymes = uniq([...dataMuseRhymes, ...bRhymes])
  return sortBy(rhymes, ['length'])
}

module.exports = getRhymes
