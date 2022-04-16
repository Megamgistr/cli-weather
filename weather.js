#!/usr/bin/env node
import getArgs from './helpers/args.js';
import { getAxiosWeather } from './services/api.service.js';
import { printError, printHelp, printSuccess } from './services/log.service.js';
import { saveKeyValue } from './services/storage.service.js';

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

const initCLI = async () => {
    const args = getArgs(process.argv);
    if (args.h) {
        printHelp();
    }
    if (args.s) {
        console.log(`Saved city ${args.s}`);
    }
    if (args.t) {
        saveToken(args.t);
    }
    const result = await getAxiosWeather('moscow');
    console.log(result);
};


initCLI();