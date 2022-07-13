import "../UI/Card.css";
const Card = (props: any) => {
  const classes = `cards ${props.className}`;
  return (
    <div className={classes}>
      {props.children}
    </div>
  );
};

export default Card;
