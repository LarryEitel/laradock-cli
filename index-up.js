#!/usr/bin/env node

'use strict';

const shell = require('shelljs');
const program = require('commander');

program.action(function () {
    shell.exec('cd ./laradock && docker-compose up -d nginx postgres mysql redis && cd ..')
});