it('displays a single note in a list', function() {
  var myList = new NoteList();
  myList.addNote("We love JavaScript!");
  var myListView = new NoteListView(myList);
  var myControl = new NoteController(myListView);
  // the following lines are a double
  var fakeElement = {
    innerHTML: ""
  };
  
  myControl.displayNotes(fakeElement);
  expect(fakeElement.innerHTML).toEqual('<ul><li><div>We love JavaScript!</div></li></ul>');
});
