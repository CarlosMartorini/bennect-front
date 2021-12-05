import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding-right: 4px;
  padding-left: 4px;
  background: ${(props) =>
    props.setColor ? props.setColor : "var(--blue-sky)"};
  border-bottom: 1px solid
    ${(props) => (props.setBorder ? props.setBorder : "var(--grey)")};
  height: 10vh;
  .left,
  .right {
    width: 33%;
    display: flex;
    justify-content: center;
    text-align: center;
  }
  h3 {
    font-size: 25px;
    color: var(--marron);
  }
  @media (min-width: 500px) {
    height: 10vh;
  }
`;