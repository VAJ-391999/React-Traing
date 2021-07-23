//url: /api/new-meetup
//supported url: POST /api/new-meetup
//temp:             mongodb+srv://Payal:<password>@cluster0.9orwd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//DATABASE_ACCESS = "mongodb+srv://Payal:Payal@cluster0.9orwd.mongodb.net/Test?retryWrites=true&w=majority"

import { MongoClient } from 'mongodb';

async function handler(req: any, res: any) {
    if (req.method === 'POST') {
        const data = req.body;

        const { title, image, address, description} = data;

        const client = await MongoClient.connect('mongodb+srv://Payal:Payal@cluster0.9orwd.mongodb.net/meetups?retryWrites=true&w=majority')
        const db = client.db();

        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({ message: "Meetup Inserted!"})

    }
}

export default handler;