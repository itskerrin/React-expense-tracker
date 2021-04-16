import './Card.css';

const Card = (props) => {
  // makes sure any value set on the className props is added to the string of classNames set on the card div.
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
