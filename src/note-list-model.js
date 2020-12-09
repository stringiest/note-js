/*jshint esversion: 6 */
class NoteList {
  constructor() {
    this.list = [];
  }

  addNote(text) {
    this.list.push(new Note(text));
  }


}
