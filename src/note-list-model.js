'use strict';

(function(exports) {
    function NoteList(){
    this.list = [];
    };

    NoteList.prototype.listAll = function(){
        for (var i = 0; i < this.list.length; i++ ) {
          return this.list[i];
        };
     };

    NoteList.prototype.createNote = function(text) {
        var note = new Note(text)
        return this.list.push(note);
    };
    
    exports.NoteList = NoteList;
})(this);