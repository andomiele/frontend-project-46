#!/usr/bin/env node

import { Command  } from 'commander';
import parser from '../src/parsers.js';
import readFile from '../src/index.js';

const program = new Command();

program
.name('gendiff')
.description('Compares two configuration files and shows a difference.')
.version('1.0.0')
.option('-f, --format','[type]  output format')
.argument('<filepath1>')
.argument('<filepath2>')
.action((filepath1, filepath2) => {
  console.log(readFile(filepath1, filepath2));
});

program.parse(process.argv);