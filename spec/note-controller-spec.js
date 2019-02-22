'use strict';;

function testControllerCanBeInstantiated() {
let controller = new Controller;
assert.isTrue(controller != undefined);
console.log('testControllerCanBeInstantiated passed')

}; 
testControllerCanBeInstantiated()


function testGetHtml() {

    var noteList = new NoteList;
    var noteController = new Controller;
    noteList.createNote('Favourite food: pesto')

    noteController.HTML = function(){
        var doc = document.createElement('app')
        doc.innerHTML = "<ul><div id='app' ><li>Favourite food: pesto</li></div></ul>"
        return doc
    }

assert.isTrue(noteController.GetHtml(noteList) === '<ul><div><li>Favourite food: pesto</li></div></ul>')
console.log('test testGetHtml passed')
};
testGetHtml()