import Card from "../ui/Card";
import Image from 'next/image'
import myImage from "../../public/jummu_kashmir.jpg";
import classes from "./MeetupItem.module.css";
import { useRouter } from "next/router";

function MeetupItem(props: any) {

  const router = useRouter();

  function showDetailsMeetup() {
    router.push('/' + props.id)
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <Image src={myImage} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsMeetup}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
