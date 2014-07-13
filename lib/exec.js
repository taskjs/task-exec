var Execution = require('execution');

module.exports = Execution.extend({
    // The type of option could be HTML5 input types: file, directory, number, range, select,
    // url, email, tel, color, date, time, month, time, week, datetime(datetime-local),
    // string(text), boolean(checkbox), array, regexp, function and object.
    options: {
        command: {
            label: 'Command',
            type: 'string',
            placeholder: 'The command to run, with space-separated arguments'
        },
        cwd: {
            label: 'Cwd',
            type: 'directory',
            placeholder: 'Current working directory of the child process'
        },
        env: {
            label: 'Environment',
            type: 'object',
            placeholder: 'Environment key-value pairs'
        },
        timeout: {
            label: 'Timeout',
            type: 'number',
            default: 0,
            placeholder: 'If timeout is greater than 0, then it will kill the child process if it runs longer than timeout milliseconds.'
        }
    },
    run: function (inputs, options, logger, settings) {
        return this._run(inputs, options, logger, settings);
    },
    execute: function (resolve, reject) {
        var options = this.options;
        var inputs = this.inputs;
        var logger = this.logger;

        var command = options.command;
        logger.log('Execute command:', command);

        var exec = require('child_process').exec;
        var child = exec(command, options,
            function (error, stdout, stderr) {
                if (error) {
                    reject(error);
                }else{
                    resolve(inputs);
                }
            });

        child.stdout.pipe(process.stdout);
    }
});
