// Output a prompt
process.stdout.write('prompt > ');

//The stdin 'data' event fires after a user types in a line

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if (cmd ==='pwd'){
        const pwd = require('./pwd')
        pwd()
    }
    else if (cmd === 'ls') {
        const ls = require('./ls')
<<<<<<< HEAD
        //const files = process.cwd();
=======
>>>>>>> 0aea4e7fb1282fc2c49724213b09a109bef2a4d3
        ls()
    }
    else{
        process.stdout.write('You typed: ' + cmd);
        process.stdout.write('\nprompt > ');
    }
});
