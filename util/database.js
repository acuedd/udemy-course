const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) =>{
    MongoClient.connect('mongodb://root:hmlDoUrden@localhost:27017/shop?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false')
    .then(client => {
        console.log('connected!!');
        _db = client.db('shop');
        callback(client);
    })
    .catch( err => {
        console.log(err);
    });
};

const getDb = () => {
    if(_db){
        return _db;
    }
    throw 'No database found!';
}

exports.mongoConnect = mongoConnect;
module.exports.getDb = getDb;
