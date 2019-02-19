'use strict';

function testReturnAllTheNotes() {
    var noteList = new NoteList
    noteList.list = ['My favourite language is Russian.', 'My favourite music is the sea.' ]
    assert.isTrue(noteList.listAll() === ('My favourite language is Russian.', 'My favourite language is Russian.'))
    console.log("testReturnAllTheNotes is passing");
};
testReturnAllTheNotes()

function testCreatesAndStoresANewSingleNote() {
    var noteList = new NoteList
    noteList.createNote('Favourite place: jungle.')
    assert.isTrue( noteList.list[0].text === ('Favourite place: jungle.'))
    console.log("testCreatesAndStoresANewSingleNote is passing");
};
testCreatesAndStoresANewSingleNote()