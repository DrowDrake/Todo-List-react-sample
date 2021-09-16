import Card from "./Card";
import Button from "./Button";
import ErrorItem from "./ErrorItem";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
          <hr />
          <ErrorItem data={props.jokeData} error={props.jokeError}/>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Ok</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;