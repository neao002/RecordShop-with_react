import { useState, useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import UserContext from "../Context/context";
export default function Example() {
  const [show, setShow] = useState(true);
  const [userName, setUserName] = useState("");
  const context = useContext(UserContext);
  const handleClose = () => setShow(false);
  const enterNameHandler = (dispatch) => {
    dispatch({
      type: "USERNAME_ENTERED",
      payload: userName,
    });
  };
  const closePopUp = (dispatch) => {
    dispatch({
      type: "POPUP_CLOSED",
    });
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Hello dear Guest!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            className="mb-3"
          ></input>
          <p>Please, Log in for shopping ...</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              closePopUp(context.myDispatch);
            }}
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              enterNameHandler(context.myDispatch);
            }}
          >
            Log In
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
