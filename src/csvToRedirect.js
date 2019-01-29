
import csvtojson from 'csvtojson'
import { resolve } from 'path'
import { writeFile } from 'fs'
import 'colors'

export default (csvfile, out) => {
  csvtojson({
    noheader: true,
    delimiter: ';',
    output: "csv"
  })
    .fromFile(resolve(csvfile))
    .then(jsonObj => jsonObj.map((row) => {
      console.log(row)
      const start = row[0]
      const go = row[1]
      return `rewrite ^${start}(/$|$) ${go} permanent;`
    }))
    .then(res => {
      writeFile(
        resolve(out),
        res.join('\n'),
        function (err) {
          if (err) {
            throw err;
          }
        }
      )
    })
    .then(() => {
      console.log('All done \n Check the file at'.green.bold)
      console.log(`${resolve(out)}`.bold)
    }).catch(err => console.error('Something went wrong'.red.bold, err))
}