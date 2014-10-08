# alfred-filter

[![NPM](https://nodei.co/npm/alfred-filter.png)](https://nodei.co/npm/alfred-filter/)

CLI for parsing JSON to Alfred's XML Filter

## Getting Started
Install the module with: `npm install alfred-filter`. Use `-g` to make it global.

## Documentation
`alfred-filter` currently reads stringified json on stdin.

It also takes a few params:
- `-f, --filter [filter]` A value to filter the property against
- `-v, --value [value]` A property on the json to filter against
- `-i, --icon [icon]` An icon to add to each item

## Examples
Let's say you have some JSON from something like the [andbang-cli](https://github.com/lukekarrys/andbang-cli) (and you've installed that and `alfred-filter` globally).

`andbang -m getMyTasks -p 1 | alfred-filter -f henrik -v title -i rocket.png`

would output something like

```xml
<items><item arg="TASK_ID"><title>This task title has the word henrik in it!</title><icon>rocket.png</icon></item></items>
```

## Release History
0.1.0 - Initial release. Only handles arrays

## License
Copyright (c) 2013 Luke Karrys  
Licensed under the MIT license.
