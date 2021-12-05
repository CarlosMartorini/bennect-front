import { Container } from "./styles";
const Header = ({ setColor, setBorder }) => {
  return (
    <Container setColor={setColor} setBorder={setBorder}>
        <h3>Bennect</h3>
    </Container>
  );
};

export default Header;