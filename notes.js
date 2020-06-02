//console.log('notes.js')
const fs = require('fs')
const chalk = require('chalk')


const addNote = (title,body)=> {
    const notes = loadNotes()
    const duplicateNote = notes.find((note)=>note.title ===title)

    debugger

    if(!duplicateNote) {
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added'))
    } else {
        console.log(chalk.red.inverse('Title already exist'))
    }
    

}

const removeNote = (title)=> {
    const notes = loadotes()
    const remainingNotes = notes.filter((note)=>note.title!==title)
    if(remainingNotes.length === notes.length) {
        console.log(chalk.red.inverse('No note found with title: '+title))
    } else {
        saveNotes(remainingNotes)
        console.log(chalk.green.inverse('Note removed!'))
    } 
    
}

const listNotes = ()=> {
    const notes = loadNotes()
    console.log(chalk.yellowBright.bold("Your Notes"))
    notes.forEach(note => {
        console.log(note.title)
    });
}

const readNotes = (title)=> {
    const notes = loadNotes()
    const theNote = notes.find((note)=> note.title===title)
    if(!theNote) {
        console.log(chalk.red.inverse('Note not found!'))
    } else {
        console.log(chalk.bold.yellow(theNote.title))
        console.log(theNote.body)
    }
}

const loadNotes = ()=> {
    try {
        const data = JSON.parse(fs.readFileSync('notes.json').toString())
        return data
    } catch(e) {
        return []
    }
    
}

const saveNotes = (notes)=> {
    fs.writeFileSync('notes.json',JSON.stringify(notes))
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}