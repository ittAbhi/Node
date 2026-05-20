const { Command } = require('commander');
const fs = require('fs');


const program = new Command();
program
  .argument('<file>', 'Path to text file')
  .action((file) => {
    const content = fs.readFileSync(file, 'utf-8');

    const words = content.trim().split(/\s+/);
    // console.log(words)
    console.log(content);
    
    console.log("You have "+words.length + " words in this file")
    
  });

program.parse();

