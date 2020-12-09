it('creates a note list', function() {
  var myList = new NoteList();
  myList.addNote("this is a test note");
  expect(myList.list[0].text).toEqual("this is a test note");
});

// (function() {
//   function createNoteList() {
//     var myList = new NoteList();
//     myList.addNote("this is a test note");
//     console.log(myList.list[0]);
//
//     if (myList.list[0]["text"] === "this is a test note") {
//       console.log('create note list test passed');
//     } else {
//       console.log('create note list test failed');
//     }
//   }
  //
  //   createNoteList();
  // })();

it('displays a note list', function() {
  var myList = new NoteList();
  myList.addNote("this is a test note");
  myList.addNote("this is another test note");
  expect(myList.getList()).toEqual("this is a test note,this is another test note");
});

  // (function() {
  //   function displayNoteList() {
  //     var myList = new NoteList();
  //     myList.addNote("this is a test note");
  //     myList.addNote("this is another test note");
  //
  //     if (myList.getList() === "this is a test note,this is another test note") {
  //       console.log('display note list test passed');
  //     } else {
  //       console.log('display note list test failed');
  //     }
  //   }
  //
  //     displayNoteList();
  //   })();
