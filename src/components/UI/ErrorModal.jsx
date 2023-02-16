import Card from "./Card";
import Button from "./Button";
import styled from "styled-components";

const ErrorTitle = styled.header`
  background: red;
  padding: 1rem;

  & h2 {
    margin: 0;
    color: white;
  }
`;

const ErrorMessage = styled.div`
  padding: 1rem;
`;

const ErrorButton = styled.footer`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`;

const Backdrop = styled.div`
  position: fixed;
  top: -15%;
  left: -80%;
  width: 1000px;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

const ErrorModal = (props) => {
  return (
    <div>
      <Backdrop onClick={props.onHandleError} />
      <Card isErrorModal={true} isAddUser={false} isUsersList={false}>
        <ErrorTitle>
          <h2>{props.title}</h2>
        </ErrorTitle>
        <ErrorMessage>
          <p>{props.message}</p>
        </ErrorMessage>
        <ErrorButton>
          <Button onClick={props.onHandleError}>Okay</Button>
        </ErrorButton>
      </Card>
    </div>
  );
};

export default ErrorModal;
