'use strict';

function testNoteCanPrintText() {
    var note = new Note('My favourite language is JavaScript.');
    assert.isTrue(note.text === 'My favourite language is JavaScript.');
    assert.isTrue(note.printText() === 'My favourite language is JavaScript.');
    console.log("testNoteCanPrintText passed");
};

testNoteCanPrintText()
