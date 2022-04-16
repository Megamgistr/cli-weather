//Лучше использовать https://www.npmjs.com/package/yargs

export default (arr) => {
    const args = {};
    const [exec, file, ...rest] = arr;
    let i = 0;
    while (i < rest.length) {
        switch (rest[i]) {
            case "-s":
                if (i + 1 < rest.length) {
                    i++;
                    args.s = rest[i];
                } else {
                    console.log("Нужно передать название города")
                }
                break;
            case "-h":
                args.h = true;
                break;
            case "-t":
                if (i + 1 < rest.length) {
                    i++;
                    args.t = rest[i];
                } else {
                    console.log("Нужно передать токен")
                }
                break;
            default: console.log("Неверный аргумент");
        }
        i++;
    }
    return args;
}