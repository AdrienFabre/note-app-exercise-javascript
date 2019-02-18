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

    NoteList.prototype.createNote = function(note) {
        return this.list.push(note);
    };
    
    exports.NoteList = NoteList;
})(this);