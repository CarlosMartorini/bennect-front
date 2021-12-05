import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  padding: 50px 0;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
  h2 {
    color: var(--maroon);
    font-size: 2rem;
    height: 10%;
    margin-bottom: 30px;
  }
  .userInfo {
    padding: 20px;
    margin-left: 10%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px 20px;
    justify-content: flex-start;
    align-content: center;
    height: 100%;
  }
  .cepInfo {
    padding: 20px;
    display: flex;
    justify-content: flex-start;
    height: 100%;
  }
  .addressInfo {
    padding: 20px;
    margin-left: 10%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px 20px;
    justify-content: flex-start;
    align-content: center;
    height: 100%;
  }
`