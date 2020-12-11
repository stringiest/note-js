it('displays an empty list if no notes', function() {
  var myView = new NoteListView();
  // myView.addNote("this is another test note");
  expect(myView.displayList()).toEqual('<ul></ul>');
});

it('displays a single note in a list', function() {
  var myView = new NoteListView();
  myView.noteList.addNote("this is a test note");
  expect(myView.displayList()).toEqual('<ul><li><div>this is a test note</div></li></ul>');
});

it('displays a list of notes', function() {
  var myView = new NoteListView();
  myView.noteList.addNote("this is a test note");
  myView.noteList.addNote("this is another test note");
  expect(myView.displayList()).toEqual("<ul><li><div>this is a test note</div></li><li><div>this is another test</div></li></ul>");
});

it('only displays the first 20 characters of a note', function() {
  var myView = new NoteListView();
  myView.noteList.addNote("I love Paris in the Springtime");
  expect(myView.displayList()).toEqual('<ul><li><div>I love Paris in the </div></li></ul>');
});
