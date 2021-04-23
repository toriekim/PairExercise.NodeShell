module.exports = function () {
  let workingDir = process.cwd();
  process.stdout.write(workingDir);
  process.stdout.write('\nprompt > ');
}
