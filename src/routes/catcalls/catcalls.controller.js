const db = require("../../db");

const catcallsController = (req, res) => {
  db.collection("catcalls")
    .get()
    .then(snapshot =>
      snapshot.docs.map(doc => {
        return { id: doc.id, ...doc.data() };
      })
    )
    .then(data => {
      res.json({ data });
    });
};

const postCatCallController = (req, res) => {
  const emojiRating = req.body.emojiRating;
  const location = req.body.location;
  const textLocation = req.body.textLocation;

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
