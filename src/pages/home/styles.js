import styled from "styled-components";

export const Container = styled.main`
  .homeContainer {
    background: var(--gradient-white);
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 15%;
    h2 {
      color: var(--maroon);
      margin: 20px 0;
      padding: 0 30px;
    }
    button {
      margin: 50px 10px;
    }
  }
`;