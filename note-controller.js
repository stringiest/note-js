/*jshint esversion: 6 */
function displayNotes(noteList) {
  document.getElementById('app').innerHTML = noteList.displayList();
}
