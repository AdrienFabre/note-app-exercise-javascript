'use strict';

function testReturnAStringOfHtml() {
    var list = ['Favourite food: pesto', 'Favourite drink: seltzer'];
    var noteListView = new NoteListView(list);
    assert.isTrue(noteListView.returnHtmlString() === '<ul><div><li>Favourite food: pesto</li></div><div><li>Favourite drink: seltzer</li></div></ul>')
    console.log("testReturnAStringOfHtml is passing")
};
testReturnAStringOfHtml()