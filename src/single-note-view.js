/*jshint esversion: 6 */

class SingleNoteView {
  constructor(note = new Note()) {
    this.note = note;
  }

  displaySingleNote() {
    return '<div>' + this.note.returnText() + '</div>';
  }
}
