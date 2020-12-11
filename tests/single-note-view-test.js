it('displays a single view', function() {
  var myNote = new Note('We love JavaScript!');
  var myNoteView = new SingleNoteView(myNote);

  expect(myNoteView.displaySingleNote()).toEqual('<div>We love JavaScript!</div>');
});
