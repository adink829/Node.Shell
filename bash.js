process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if ('data' === 'pwd'){
    process.stdout.write(`Current directory: ${process.cwd()}`);
    }
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');

});

