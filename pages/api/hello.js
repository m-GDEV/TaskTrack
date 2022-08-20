import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.DB_URL;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
});

// THIS ALSO WORKS --
export default async function run(req, res) {
    try {
        await client.connect();
        const coll = client.db("test").collection("dishes");

        // const doc = {
        //     tile: 12,
        //     works: "musa",
        // };
        //
        // coll.insertOne(doc);

        // coll.deleteMany();

        await coll
            .find()
            .toArray()
            .then((info) => {
                // console.log(info);
                res.send(info);
            });
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
