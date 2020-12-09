it('creates note list as an empty array', function() {
  var myList = new NoteList();
  expect(myList.list).toBeAnArray();
});

it('creates a note list', function() {
  var myList = new NoteList();
  myList.addNote("this is a test note");
  expect(myList.list[0].text).toEqual("this is a test note");
});
