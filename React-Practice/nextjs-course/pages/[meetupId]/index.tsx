import MeetUpDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";

function MeetUpDetails(props: any) {

    const meetupDetail = {
        title: props.meetupData.title,
        address: props.meetupData.address,
        image: props.meetupData.image,
        description: props.meetupData.description,
    };

    return (<Fragment>

        <Head>
        <title>{props.meetupData.title}</title>
            <meta
                name="nice"
                content="add a new network" />
        </Head>

        <MeetUpDetail meetupDetail={meetupDetail} />
    </Fragment>);
}

export async function getStaticPaths() {
    const client = await MongoClient.connect(
        "mongodb+srv://Payal:Payal@cluster0.9orwd.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    let meetupIds: any[] = [];
    const meetups = await (await meetupsCollection.find({}).toArray()).map(
        (meetup, index) => {
            meetupIds.push(meetup._id.toString());
        }
    );

    client.close();

    return {
        fallback: false, //all the id allow
        paths: meetupIds.map((mId, index) => ({
            params: {
                meetupId: mId,
            },
        })),
    };
}

export async function getStaticProps(context: any) {
    const meetupId = context.params.meetupId;
    console.log("url id", meetupId, typeof meetupId)

    const client = await MongoClient.connect(
        "mongodb+srv://Payal:Payal@cluster0.9orwd.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const selectedMeetup = await meetupsCollection.findOne({ _id: new ObjectId(meetupId) })
    console.log(selectedMeetup)
    client.close();


    return {
        props: {
            meetupData: {
                id: selectedMeetup?._id.toString(),
                title: selectedMeetup?.title,
                image: selectedMeetup?.image,
                address: selectedMeetup?.address,
                description: selectedMeetup?.description
            }
        },
    };
}

export default MeetUpDetails;
