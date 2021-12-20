import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";

import classes from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onModalClick} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.content}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onModalClick}>Okay</Button>
      </footer>
    </Card>
  );
};

function ErroModal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onModalClick={props.onModalClick} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          content={props.content}
          onModalClick={props.onModalClick}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
}

export default ErroModal;
