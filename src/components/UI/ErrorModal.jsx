import Card from "./Card";
import Button from "./Button";
import styled from "styled-components";

const ErrorTitle = styled.header`
  background: #4f005f;
  padding: 1rem;

  & h2 {
    margin: 0;
    color: white;
  }
`;

const ErrorMessage = styled.div`
  padding: 1rem;
`;

const TheButton = styled.footer`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
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
        <TheButton>
          <Button onClick={props.onHandleError}>Okay</Button>
        </TheButton>
      </Card>
    </div>
  );
};

export default ErrorModal;
