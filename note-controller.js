/*jshint esversion: 6 */
class NoteController {

  constructor(noteListView = new NoteListView()) {
    this.noteListView = noteListView;
  }

  displayNotes(element = document.getElementById('app')) {
    element.innerHTML = this.noteListView.displayList();
  }
}
