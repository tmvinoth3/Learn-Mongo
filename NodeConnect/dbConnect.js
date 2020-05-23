var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database Connected!");
  var dbo = db.db("customerDB");

//   dbo.createCollection("authors", (err, res) => {
//       if(err) throw err;
//       console.log("Collections created");
//       db.close();
//   });


//   var authorData = {name:"Chetan", gender:"male"};
//   dbo.collection("authors").insertOne(authorData, (err, res) => {
//         if(err) throw err;
//         console.log("Data inserted");
//   });

  dbo.collection("authors").findOne({}, (err, res) => {
        if(err) throw err;
        console.log(res);
  });

  dbo.collection("authors").find({name:"Chetan"}).toArray((err, res) => {
    if(err) throw err;
    console.log(res);
  });

  dbo.collection("authors").deleteOne({name:"Chetan"}, (err, res) => {
    if(err) throw err;
    console.log("Deleted");
  });
  //db.close();
});