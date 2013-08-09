#! /usr/bin/env node

/*
 * alfred-filter
 * https://github.com/lukekarrys/alfred-filter
 *
 * Copyright (c) 2013 Luke Karrys
 * Licensed under the MIT license.
 */

'use strict';

var program = require('commander'),
    packagejson = require('../package'),
    _ = require('underscore'),
    jsonxml = require('jsontoxml'),
    input = '',
    output = '';

program
    .version(packagejson.version)
    .option('-v, --value [value]', 'Value to filter', String)
    .option('-f, --filter [filter]', 'Property to filter on', String)
    .option('-i, --icon [icon]', 'Icon for each returned item', String, 'sample.png')
    .parse(process.argv);

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
    input += chunk;
});

process.stdin.on('end', function () {
    input = JSON.parse(input);

    if (_.isArray(input)) {

        if (program.filter && program.value) {
            input = _.filter(input, function (item) {
                return new RegExp(program.value, 'i').test(item[program.filter]);
            });
        }

        output = jsonxml({
            items: _.map(input, function (item) {
                return {
                    name: 'item',
                    attrs: {
                        arg: item.id
                    },
                    children: {
                        title: item.title,
                        icon: program.icon
                    }
                };
            })
        });
    }

    process.stdout.write(output);

});


