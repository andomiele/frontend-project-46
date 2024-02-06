#!/usr/bin/env node

import { Command  } from 'commander';
import genDiff from '../src/index.js';

const program = new Command();

program
.name('gendiff')
.description('Compares two configuration files and shows a difference.')
.version('1.0.0')
.option('-f, --format', '[type]  output format', 'stylish')
.argument('<filepath1>', 'first configuration file')
.argument('<filepath2>', 'second configuration file')
.action((filepath1, filepath2, options) => {
  console.log(genDiff(filepath1, filepath2, options.format));
});

program.parse(process.argv);