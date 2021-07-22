import Card from "../ui/Card";
import Image from 'next/image'
import myImage from "../../public/jummu_kashmir.svg";
import classes from "./MeetupItem.module.css";

function MeetupItem(props: any) {
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
          <button>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
