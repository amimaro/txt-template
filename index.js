'use strict'

const mustache = require('mustache')
const fs = require('fs')

module.exports = async function txtTemplate(params) {
  try {
    let template = await readTXT(params.template)
    let result = await render(unescapeQuotes(template), params.data)
    await writeTXT(params.output, result)
    return true
  } catch (err) {
    console.error(`An error occured: ${err}`)
    return false
  }
}

let readTXT = async function(path) {
  return fs.readFileSync(path).toString('utf8')
}

let writeTXT = async function(path, data) {
  return fs.writeFileSync(path, data)
}

let render = async function(template, data) {
  return mustache.render(template, data)
}

let unescapeQuotes =  function(data) {
  return data.replace(/(\'|\")+\</g, '<').replace(/\>(\'|\")+/g, '>').replace(/(\'\')/g, '\'').replace(/(\"\")/g, '\"')
}
