import commander from 'commander'
import csvToRedirect from './csvToRedirect'
import { version } from './../package.json'

commander
  .version(version)
  .command('convert')
  .arguments('<csvfile> <out>')
  .action(function (csvfile, out) {
    csvToRedirect(csvfile, out)
  })

commander
  .parse(process.argv)
