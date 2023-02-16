import styled from "styled-components";

const Button = styled.button`
  font: inherit;
  background-color: #131418;
  border: 2px solid black;
  color: #1da1f2;
  padding: 0.25rem 1rem;
  cursor: pointer;

  &:hover {
    background: red;
    color: #fff;
    font-weight: bold;
    border-radius: 5px;
    box-shadow: 0 0 5px #09b83e, 0 0 25px #09b83e, 0 0 50px #09b83e,
      0 0 100px #09b83e;
  }

  &:focus {
    outline: none;
  }
`;

// const Button = () => {
//     return ( <button></button> );
// }

export default Button;
