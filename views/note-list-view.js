'use strict';

(function(exports) {
    function NoteListView(list){
        this.list = list
    };

    NoteListView.prototype.returnHtmlString = function(){
        var titles = "<ul>"
        for (var i = 0; i < this.list.length; i++ ) {
           titles += "<div><li>" + this.list[i].printText() + "</li></div>";
        };
        return titles + "</ul>"
    }; 

    exports.NoteListView = NoteListView; 
})(this);  
 