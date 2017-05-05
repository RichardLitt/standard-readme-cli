#! /usr/bin/node

const preset = require('standard-readme-preset')
const remark = require('remark')
const report = require('vfile-reporter')
const path = require('path')
const toVfile = require('to-vfile')

const processor = remark().use(preset)
const doc = toVfile.readSync(path.join(process.cwd(), 'README.md'))

processor.process(doc, (err, res) => {
  console.log(report(err || res))
})
