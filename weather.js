#!/usr/bin/env node
import getArgs from './helpers/args.js';
import { getAxiosWeather } from './services/api.service.js';
import { printError, printHelp, printSuccess } from './services/log.service.js';
import { getKeyValue, saveKeyValue } from './services/storage.service.js';

const saveToken = async (token) => {
    try {
        await saveKeyValue('token', token); 
        printSuccess("Токен сохранен");
    } catch (e) {
        printError(`Токен не сохранен: ${e.message}`)
    }
}

const saveCity = async (city) => {
    try {
        await saveKeyValue('city', city); 
        printSuccess("Город сохранен");
    } catch (e) {
        printError(`Город не сохранен: ${e.message}`)
    }
}

const printWeather = async () => {
    try {
        const city = await getKeyValue('city');
        if (!city) {
            throw new Error("Нужно сохрнать город");
        }
        const result = await getAxiosWeather(city);
        console.log(result);
    } catch (e) {
        const code = e?.response?.status;
        if (code && code !== 200) {
            printError(`${e.response.status}: ${e.response.statusText}`);
        } else {
            printError(e);
        }
    }

}

const initCLI = async () => {
    const args = getArgs(process.argv);
    if (args.h) {
        printHelp();
    }
    if (args.s) {
        saveCity(args.s);
    }
    if (args.t) {
        saveToken(args.t);
    }
    if (!Object.keys(args).length) {
        printWeather();
    }
};


initCLI();