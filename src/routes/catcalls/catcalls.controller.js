const db = require("../../db");

const catcallsController = (req, res) => {
  db.collection("catcalls")
    .get()
    .then(snapshot => snapshot.docs.map(doc => doc.data()))
    .then(data => {
      res.json({ data });
    });
};

module.exports = {
  catallsController
};



// let citiesRef = db.collection('conferences');
// let allCities = [];

// citiesRef
// 	.get()
// 	.then(snapshot => {
// 		snapshot.forEach(doc => {
// 			allCities.push({
// 				[doc.id]: doc.data()
// 			});
// 		});
// 	})
// 	.catch(err => {
// 		console.log('Error getting documents', err);
// 	});

// const conferenceController = (req, res) => {
// 	//connect to firebase and get snapshot of conferences collection
// 	res.json({
// 		data: allCities
// 	});
// };
