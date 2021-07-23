//localhost:3000/
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from 'mongodb';
import { Fragment } from "react";
import Head from 'next/head';
import { promises as fs } from 'fs'
import path from 'path'

function HomePage(props: any) {
 
  return (
      <Fragment>
          <Head>
              <title>React Meetups</title>
              <meta
                name="nice"
                content="add a new network" />
          </Head>
          <MeetupList meetups={props.meetups} />
      </Fragment>
    
    );
}

/*export async function getServerSideProps(context: any) {

    const req = context.req;
    const res = context.res;

    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    };
}*/

export async function getStaticProps() {
    // get data or fatch data from API 
    const client = await MongoClient.connect('mongodb+srv://Payal:Payal@cluster0.9orwd.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();

    client.close();

   /* const postsDirectory = path.join(process.cwd(), 'posts')
    const filenames = await fs.readdir(postsDirectory)
  
    const posts = filenames.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename)
      const fileContents = await fs.readFile(filePath, 'utf8')
      return {
        filename,
        content: fileContents,
      }
    })*/

    return {
        props: {
            meetups: meetups.map((meetup: any) => ({
                title: meetup.title,
                image: meetup.image,
                address: meetup.address,
                id: meetup._id.toString()
            }))
        },
        revalidate: 10
    };
}
export default HomePage
