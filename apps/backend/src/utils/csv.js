import fs from 'fs'
import { Readable } from 'stream'
import { Transform } from 'json2csv'
import { parse } from 'csv-parse/sync'
import xlsx from 'xlsx'

export function writeCsv(filePath, lines, opts) {
  return new Promise((resolve, reject) => {
    const input = Readable.from(lines)
    const transform = new Transform(opts, { objectMode: true })
    const output = fs.createWriteStream(filePath)
    input.pipe(transform).pipe(output)
    output.on('close', () => {
      resolve()
    })
    output.on('error', (err) => {
      reject(err)
    })
  })
}

// https://github.com/Aternus/csv-to-xlsx/blob/master/src/convertCsvToXlsx.js
export function convertCsvToXlsx(source, destination) {
  if (typeof source !== 'string' || typeof destination !== 'string') {
    throw new Error('"source" and "destination" arguments must be of type string.')
  }
  if (!fs.existsSync(source)) {
    throw new Error(`source ${source} doesn't exist.`)
  }
  if (fs.existsSync(destination)) {
    throw new Error('destination "${destination}" already exists.')
  }

  const csvFile = fs.readFileSync(source, 'UTF-8')
  const records = parse(csvFile, { columns: true, delimiter: ',', ltrim: true, rtrim: true })

  const wb = xlsx.utils.book_new()
  const ws = xlsx.utils.json_to_sheet(records)
  xlsx.utils.book_append_sheet(wb, ws)

  xlsx.writeFile(wb, destination)
}
