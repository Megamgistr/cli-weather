import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
    console.log(`${chalk.bgRed(" ERROR ")} ${error}`);
}

const printSuccess = (msg) => {
    console.log(`${chalk.bgGreen(" SUCCESS ")} ${msg}`);
}

const printHelp = () => {
    console.log(dedent(`
        ${chalk.bgCyan(" HELP ")} 
        Без параметров - вывод погоды
        -s [CITY] - установка города
        -t - установка токена
        -h - вывод помощи
    `));
}

export {printError, printSuccess, printHelp};