import CardUser from "../../components/cardUser";
import Header from "../../components/header";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles"


export const Connections = () => {

    const navigate = useNavigate()

    const handleDirection = () => {
        return navigate('/')
    }

    return (
        <>
            <Header/>
            <Container>
                <h2>Connections</h2>
                <CardUser/>
                <Button
                    setSize="large"
                    setColor="var(--red)"
                    setClick={() => handleDirection()}
                >
                    Back
                </Button>   
            </Container>
        </>
    )
}