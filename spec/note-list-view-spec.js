'use strict';


function testReturnAStringOfHtml() {
    var list = new NoteList
    list.createNote('Favourite food: pesto')
    list.createNote('Favourite drink: seltzer')
    var noteListView = new NoteListView(list.listAll());
    assert.isTrue(noteListView.returnHtmlString() === '<ul><div><li>Favourite food: pesto</li></div><div><li>Favourite drink: seltzer</li></div></ul>')
    console.log("testReturnAStringOfHtml is passing")
};
testReturnAStringOfHtml()