import styled from "styled-components";
const MyButton = styled.button`
  width: ${(props) => {
    if (props.setSize === "large") {
      return "150px";
    } else if (props.setSize === "medium") {
      return "100px";
    } else if (props.setSize === "small") {
      return "75px";
    } else {
      return "50px";
    }
  }};
  height: ${(props) => {
    if (props.setSize === "large") {
      return "60px";
    } else if (props.setSize === "medium") {
      return "50px";
    } else if (props.setSize === "small") {
      return "40px";
    } else {
      return "30px";
    }
  }};
  background-color: ${(props) => props.setColor};
  color: white;
  border: none;
  border-radius: 5px;
  margin: 5px;
  font-weight: bold;
  font-family: 'Comfortaa', cursive;
  font-size: ${(props) => {
    if (props.setSize === "large") {
      return "1.3rem";
    } else if (props.setSize === "medium") {
      return "1.2rem";
    } else if (props.setSize === "small") {
      return "1.1rem";
    } else {
      return "1rem";
    }
  }};
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  transition: 0.2s;
  :hover {
    opacity: 50%;
  }
`;
export default MyButton;