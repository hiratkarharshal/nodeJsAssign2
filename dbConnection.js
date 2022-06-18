const { MongoClient,  } = require('mongodb');
const uri = "mongodb+srv://cluster1:Password1@cluster0.z0zfh.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

function getCollection(){
    return new Promise((resolve,reject) =>{
        client.connect(err => {
            if(!err){
  const collection = client.db("test").collection("devices");
  resolve(collection)
            }else{
                reject(err);
            }
});

    })
}

module.exports = {
    getCollection
}