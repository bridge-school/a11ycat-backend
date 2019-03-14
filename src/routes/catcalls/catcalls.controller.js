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

module.exports = {
  catcallsController
};
