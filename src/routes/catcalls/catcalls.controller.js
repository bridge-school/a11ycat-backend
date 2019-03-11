const db = require("../../db");

const catcallsController = (req, res) => {
  db.collection("catcalls")
    .get()
    .then(snapshot => snapshot.docs.map(doc => doc.data()))
    .then(data => {
      res.json({ data });
    });
};

const postCatCallController = (req, res) => {
  const emojiRating = req.body.formData.emojiRating;
  const location = req.body.formData.location;
  const textLocation = req.body.formData.textLocation;

  // Add a new document with a generated id.
  db.collection("catcalls")
    .add({
      emojiRating,
      location,
      textLocation
    })
    .then(function(docRef) {
      res.json({ emojiRating, location, textLocation, id: docRef.id });
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
};

module.exports = {
  catcallsController,
  postCatCallController
};
