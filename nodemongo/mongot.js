/**
 * Created by hanlu.feng on 1/12/2016.
 */
var mongo = require('mongodb'),
    Server = mongo.Server,
    Db = mongo.Db;

var server = new Server('localhost', 27017, {auto_reconnect: true});
var db = new Db('mydb', server);

db.open(function (err, db) {
    if (!err) {
        console.log("We are connected");

        var doc =  {
            "address" : {
                "street" : "3 Avenue",
                "zipcode" : "10075",
                "building" : "1480",
                "coord" : [ -73.9557413, 40.7720266 ]
            },
            "borough" : "Manhattan",
            "cuisine" : "Italian",
            "grades" : [
                {
                    "date" : new Date("2014-10-01T00:00:00Z"),
                    "grade" : "A",
                    "score" : 11
                },
                {
                    "date" : new Date("2014-01-16T00:00:00Z"),
                    "grade" : "B",
                    "score" : 17
                }
            ],
            "name" : "Vella",
            "restaurant_id" : "41704620"
        }

        db.collection('restaurants').insertOne(doc, function(err, result) {
            //assert.equal(err, null);
            console.log("Inserted a document into the restaurants collection.");

            var cursor =db.collection('restaurants').find( );
            cursor.each(function(err, doc) {
                //assert.equal(err, null);
                if (doc != null) {
                    console.dir(doc);
                } else {
                    //callback();
                }
            });
            //callback(result);
        });

    }

});