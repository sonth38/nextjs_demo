import classes from '../meetups/MeetupDetail.module.css';

export default function MeetupDetail(props) {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}
