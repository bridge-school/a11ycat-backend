const db = require("../../db");

const catcallsController = (req, res) => {
  db.collection("catcalls")
    .get()
    .then(snapshot =>
      snapshot.docs.map(doc => {
        console.log(doc.id);
        console.log(doc.data());
        return { id: doc.id, ...doc.data() };
      })
    )
    .then(data => {
      res.json({ data });
    });
  // db.ref("/catcalls").on("value", function(snapshot) {
  //   console.log(snapshot.key);
  // });
};

module.exports = {
  catcallsController
};
