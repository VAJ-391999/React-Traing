import Image from "next/image";
import myImage from'../../public/jummu_kashmir.jpg';
import classes from './MeetupDetail.module.css';

function MeetUpDetails(props: any) {
    return (
        <section className={classes.detail}>
            <Image src={myImage} alt={props.meetupDetail.title} />
            <h1>{props.meetupDetail.title}</h1>
            <address>{props.meetupDetail.address}</address>
            <p>{props.meetupDetail.description}</p>
        </section>
    )
}

export default MeetUpDetails;