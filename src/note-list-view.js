/*jshint esversion: 6 */
class NoteListView {
  constructor(noteList = new NoteList()) {
    this.noteList = noteList;
    this.array = [];
  }

  viewList() {
    // this.array = []; // add this back in if tests start failing
    for (var i = 0; i < this.noteList.list.length; i++) {
      this.array.push('<li><div>' + this.noteList.list[i].text + '</div></li>');
    }
    this.array.unshift('<ul>');
    this.array.push('</ul>');
    return this.array.join("");

  }
}
