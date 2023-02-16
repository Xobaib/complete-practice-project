import styled from "styled-components";

const Card = styled.div`
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;

  ${(props) =>
    props.isAddUser
      ? `margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;`
      : ""}

  ${(props) =>
    props.isErrorModal
      ? ` position: fixed;
  top: 10vh;
  left: 0%;
  width: 90%;
  z-index: 100;
  overflow: hidden;

  `
      : ""}

  ${(props) =>
    props.isUsersList
      ? ` margin: 2rem auto;
  width: 90%;
  max-width: 40rem;
  `
      : ""}
`;

export default Card;
