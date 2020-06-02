const chalk = require('chalk')
const notes = require('./notes.js')
const yargs = require('yargs')


//const log = console.log
// log(chalk.gray('hello world'))
// log(chalk.bgGreen.red('next line'))
// log(chalk.green.bgGray.bold('mercury','venus','earth'))
// log(chalk.greenBright.bold('this is green',chalk.bgBlue('this is blue + green ? ')))
// log(chalk.green.inverse.bold('Success!'))

//customize yargs version
yargs.version('1.1.0')

//add, remove, read , list 

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note' ,
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title,argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'List all the notes',
    handler() {
        notes.listNotes()
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv) {
        notes.readNotes(argv.title)
    }
})
//yargs.argv
yargs.parse()
