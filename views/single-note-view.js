'use strict';

(function(exports) {
    function NoteView(note){
        this.note = new Note(note)
    };

    NoteView.prototype.view = function(){
        return '<div>' + this.note.printText() + '</div>'
    };

    exports.NoteView = NoteView;
}) (this);
