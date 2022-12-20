import yauzl from 'yauzl'
import fs from 'fs'
import rimraf from 'rimraf'
import zlib from 'zlib'
import { randomFileName } from './index.js'

export function unzipFile(filePath, destination) {
  const files = []
  return new Promise((resolve, reject) => {
    yauzl.open(filePath, { lazyEntries: true }, function (err, zipfile) {
      if (err) throw err

      zipfile.readEntry()

      zipfile.on('end', function () {
        rimraf(filePath, () => {
          resolve(files)
        })
      })

      zipfile.on('entry', function (entry) {
        if (/\/$/.test(entry.fileName) || /__MACOSX\//.test(entry.fileName)) { // Directory file names end with '/'. Note that entries for directories themselves are optional. An entry's fileName implicitly requires its parent directories to exist.
          zipfile.readEntry()
        } else {
          zipfile.openReadStream(entry, function (err, readStream) {
            if (err) throw err

            const fileName = randomFileName('text/xml')
            const filePath = `${destination}/${fileName}`
            const stream = fs.createWriteStream(filePath)
            readStream.on('end', function () {
              files.push({ fileName, filePath, originalFileName: entry.fileName, fromZipFile: true  }) // files.push({ key: entry.fileName, body: stream })

              zipfile.readEntry()

              readStream.unpipe(stream)
              stream.end()
            })

            stream.on('error', (err) => {
              reject(err)
            })

            readStream.pipe(stream) // readStream.pipe(stream, { end: false })
          })
        }
      })
    })
  })
}

export function ungzip(input, options = {}) {
  return new Promise(function (resolve, reject) {
    zlib.gunzip(input, options, function (error, result) {
      if (!error) resolve(result)
      else reject(Error(error))
    })
  })
}
