import { Fragment } from 'react';
import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';
import Layout from '../components/layout/Layout';
import Head from 'next/head';

export default function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="This is HomePage" />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: { meetups: DUMMY_MEETUP },
//   };
// }

export async function getStaticProps() {
  const client = await MongoClient.connect(
    'mongodb+srv://admin:admin@charity.6fllypr.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();
  const meetupCollection = db.collection('meetups');
  const meetups = await meetupCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map(meetup => ({
        image: meetup.image,
        title: meetup.title,
        address: meetup.address,
        id: meetup._id.toString(),
      })),
    },
  };
}
