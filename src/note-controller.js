'use strict';

(function(exports){
    function Controller(){

    };

    Controller.prototype.GetHtml = function(noteList){
        return this.HTML().innerHTML = (new NoteListView(noteList.listAll())).returnHtmlString()
    }

    Controller.prototype.HTML = function(){
        return document.getElementById('app')
    };

exports.Controller = Controller;
})(this);  
