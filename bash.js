// Output a prompt
process.stdout.write('prompt > ');

//The stdin 'data' event fires after a user types in a line

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if (cmd ==='pwd'){
        let workingDir = process.cwd();
        process.stdout.write(workingDir);
        process.stdout.write('\nprompt > ');
    }
    else{
        process.stdout.write('You typed: ' + cmd);
        process.stdout.write('\nprompt > ');
    }
    
});