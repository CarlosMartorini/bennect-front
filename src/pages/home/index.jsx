import Header from "../../components/header";
import { Container } from "./styles";
import Button from "../../components/button"
import { useNavigate } from "react-router-dom";

export const Home = () => {

  const navigate = useNavigate()

  const handleDirection = (path) => {
    return navigate(path)
  }

  return (
    <>
      <Header/>
      <Container>
        <section className='homeContainer'>
          <h2>Bennect connecting people</h2>
          <Button
            setClick={() => handleDirection('/register')}
            setColor="var(--blue)"
            setSize="large"
          >
            Sign In
          </Button>
          <Button
            setClick={() => handleDirection('/connections')}
            setColor="var(--green)"
            setSize="large"
          >
            Connections
          </Button>
        </section>
      </Container>
    </>
  );
};