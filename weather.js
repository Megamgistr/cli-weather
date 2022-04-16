#!/usr/bin/env node
import getArgs from './helpers/args.js';


const initCLI = () => {
    const args = getArgs(process.argv);
    if (args.h) {
        console.log("View help");
    }
    if (args.s) {
        console.log(`Saved city ${args.s}`);
    }
    if (args.t) {
        console.log(`Saved token ${args.t}`)
    }
    console.log("View weather");
};


initCLI();