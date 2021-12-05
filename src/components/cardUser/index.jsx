import { useEffect, useState } from "react";
import api from "../../services/api";
import {Container} from "./styles"

const CardUser = () => {

    const [allUsers, setAllUsers] = useState([]);

    const getAllUsers = () => {
        api.get('accounts/')
        .then((response) => {
            setAllUsers(response.data);
        })
        .catch((_) => console.log("something went wrong"));
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    return (
        <>
            <uf>
                {
                    allUsers.map((user) => (
                        <Container key={user.id}>{user.username} - {user.email}</Container>
                    ))
                }
            </uf>
        </>
    )
}

export default CardUser;