it('creates a new note', function() {
  var note = new Note('this is a test note');
  expect(note.text).toEqual('this is a test note');
});

it('returns note text', function() {
  var note = new Note('note two');
  expect(note.returnText()).toEqual('note two');
});
