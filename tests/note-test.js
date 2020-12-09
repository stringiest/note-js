it('creates a new note', function() {
  var note = new Note('this is a test note');
  expect(note.text).toEqual('this is a test note');
});

// (function() {
//   function testCreateNote() {
//     var note = new Note('this is a test note');
//
//     assert.isTrue(note.text === 'this is a test note');
//   }
//   testCreateNote();
// })();

it('returns note text', function() {
  var note = new Note('note two');
  expect(note.returnText()).toEqual('note two');
});

// (function() {
//   function returnNoteText() {
//     var note = new Note('note two');
//
//     assert.isEqual(note.returnText(), 'note two');
//   }
//   returnNoteText();
// })();
