it('creates a note list', function() {
  var myList = new NoteList();
  myList.addNote("this is a test note");
  expect(myList.list[0].text).toEqual("this is a test note");
});

it('displays a note list', function() {
  var myList = new NoteList();
  myList.addNote("this is a test note");
  myList.addNote("this is another test note");
  expect(myList.getList()).toEqual("this is a test note,this is another test note");
});
