import chalk from 'chalk';
import { suma, multi } from './modulos/controller.js'

const sum = suma(4,5)
console.log(sum)

const sum2 = suma(1,2)
console.log(sum2)

const multi1 = multi(sum, sum2)

console.log(chalk.blue(multi1));

