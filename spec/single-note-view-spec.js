'use strict'; 

function testReturnAStringOfHTML() {
    var noteView = new NoteView('Favourite drink: seltzer')
    assert.isTrue(noteView.view() === '<div>Favourite drink: seltzer</div>')
    console.log('testReturnAStringOfHTML passed')
}; 
testReturnAStringOfHTML()