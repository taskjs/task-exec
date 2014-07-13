# task-exec
> Execute system commands.

## The "exec" task

### Usage Examples

```js
var exec = new (require('task-exec'))
exec.run(inputs, options, logger)
```

### Options

#### options.command
Type: `command`

The command to run, with space-separated arguments

#### options.cwd
Type: `directory`

Current working directory of the child process

#### options.env
Type: `object`

Environment key-value pairs

#### options.timeout
Type: `number`
Default: `0`

If timeout is greater than 0, then it will kill the child process if it runs longer than timeout milliseconds.

## Release History
* 2014-07-13 0.1.0 Initial release.

## License
Copyright (c) 2014 Yuanyan Cao. Licensed under the MIT license.
