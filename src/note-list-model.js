'use strict';

(function(exports) {
    function NoteList(){
    this.list = [];
    };

    NoteList.prototype.createNote = function(text) {
        return this.list.push(new Note(text));
    };

    NoteList.prototype.listAll = function(){
        return this.list
     };

    exports.NoteList = NoteList;
})(this);