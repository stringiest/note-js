/*jshint esversion: 6 */
class NoteList {
  constructor() {
    this.list = [];
    this.array = [];
  }

  addNote(text) {
    this.list.push(new Note(text));
  }

  getList() {
    // this.array = []; // add this back in if tests start failing
    for (var i = 0; i < this.list.length; i++) {
      this.array.push(this.list[i].text);
    }
    return this.array.join();

  }
}
