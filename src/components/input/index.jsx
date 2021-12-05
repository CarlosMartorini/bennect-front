import { Container } from "./styles";

const Input = ({ label, error, register, name, setHeight, setWidth, ...rest }) => {
  return (
    <Container setHeight={setHeight} setWidth={setWidth}>
      <label>{label}</label>
      <input {...rest} />
      <div>{error}</div>
    </Container>
  );
};

export default Input;