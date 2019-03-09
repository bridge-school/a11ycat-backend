const db = require("../../db");

const addReportController = (req, res) => {
  // db.collection("catcalls")
  //   .get()
  //   .then(snapshot => snapshot.docs.map(doc => doc.data()))
  //   .then(data => {
  //     res.json({ data });
  //   });

  // var emojiRating = req.body.emojiRating;
  // const location = "Toronto";
  // console.log(`emoji rating is ${emojiRating} and location is ${location}`);

  // Add a new document with a generated id.
  db.collection("testPosts")
    .add({
      test: "success"
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
};

// Add a new document with a generated id.
db.collection("testPosts")
  .add({
    name: "Tokyo",
    country: "Japan"
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });

module.exports = {
  addReportController
};
