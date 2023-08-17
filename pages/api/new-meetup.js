import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(
      'mongodb+srv://admin:admin@charity.6fllypr.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    const db = client.db();
    const meetupCollection = db.collection('meetups');
    const result = await meetupCollection.insertOne(data);
    console.log(data);
    client.close();
    res.status(201).json({ message: 'Meetup inserted!' });
  }
}
