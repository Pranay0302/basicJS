#! /usr/bin/env node

"use strict";

// console.log("hey");
if (process.env.hey) {
    console.log(process.env.hey);
}
process.stdout.write("hey\n");