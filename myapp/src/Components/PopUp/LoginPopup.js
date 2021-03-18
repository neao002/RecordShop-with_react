import { useState, useContext } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import UserContext from "../../ContextFolder/Context";

import Newsletter from "./Newsletter";

export default function Example(props) {
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
          <Modal.Title className="mx-auto" style={{ color: "#ff7700" }}>
            Welcome Back!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <input
            type="text"
            style={{
              background: "#ff7700",
              fontSize: "1.2rem",
              fontWeight: "bolder",
              padding: "3px 5px",
            }}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            className="mt-2"
          ></input>

          <h4 className="mt-4">Please, Log in for shopping ...</h4>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => {
              closePopUp(context.myDispatch);
            }}
          >
            Close
          </Button>
          <Button
            className="popUpLogin "
            onClick={() => {
              enterNameHandler(context.myDispatch);
            }}
          >
            Log In
          </Button>
        </Modal.Footer>

        <Newsletter></Newsletter>
      </Modal>
    </>
  );
}
