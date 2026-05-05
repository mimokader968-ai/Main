#!/usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const argv = yargs(hideBin(process.argv))
  .command('start', 'Start AutoFlow server', {}, () => {
    console.log('🚀 Starting AutoFlow server on port 5678...');
  })
  .command('create <name>', 'Create a new workflow', {}, (argv) => {
    console.log(`✅ Created workflow: ${argv.name}`);
  })
  .help()
  .alias('h', 'help')
  .parseSync();

console.log('✨ AutoFlow CLI v1.0.0');
