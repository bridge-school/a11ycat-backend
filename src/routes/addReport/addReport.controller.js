const db = require("../../db");

const addReportController = (req, res) => {
  const emojiRating = req.body.formData.emojiRating;
  // const location = req.body.formData.location;
  // const textLocation = req.body.formData.textLocation;
  const location = { lat: 12.3456, lng: 23.4567 };
  const textLocation = "123 Fake Street";

  // Add a new document with a generated id.
  db.collection("testPosts")
    .add({
      emojiRating,
      location
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
};

module.exports = {
  addReportController
};
