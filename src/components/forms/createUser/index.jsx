import api from "../../../services/api";
import Input from "../../input";
import Button from "../../button";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";
import cep from "../../../services/cep";
import { useState, useEffect } from "react";


export const CreateUser = () => {

  const [fieldCep, setFieldCep] = useState();
  const [allAddressFields, setAllAddressFields] = useState({});
  const [fieldUsername, setFieldUsername] = useState();
  const [fieldCpf, setFieldCpf] = useState();
  const [fieldFirstName, setFieldFirstName] = useState();
  const [fieldLastName, setFieldLastName] = useState();
  const [fieldEmail, setFieldEmail] = useState();
  const [fieldPassword, setFieldPassword] = useState();
  const [fieldNumber, setFieldNumber] = useState();
  const [fieldComplement, setFieldComplement] = useState();

  const navigate = useNavigate()

  const handleDirection = (path) => {
    return navigate(path)
  }

  const handleCep = () => {
    cep.get(`${fieldCep}/json/`)
    .then((response) => setAllAddressFields(response.data))
  }

  useEffect(() => {
    handleCep()
  }, [fieldCep])

  const reset = () => {
    setFieldUsername('')
    setFieldCpf('')
    setFieldFirstName('')
    setFieldLastName('')
    setFieldEmail('')
    setFieldPassword('')
    setFieldCep('')
    setFieldNumber('')
    setFieldComplement('')
  }

  const postRegister = () => {
    api.post('accounts/', {
        "username": fieldUsername,
        "cpf": fieldCpf,
        "first_name": fieldFirstName,
        "last_name": fieldLastName,
        "email": fieldEmail,
        "password": fieldPassword,
        "cep": fieldCep,
        "address": allAddressFields.logradouro,
        "number": fieldNumber,
        "complement": fieldComplement,
        "neighborhood": allAddressFields.bairro,
        "city": allAddressFields.localidade,
        "state": allAddressFields.uf
    })
    .then(() => {
      reset()
    })
    .catch((err) => console.log(err))
  }


  return (
    <Container>
        <h2>Sign In</h2>
        <section className='userInfo'>
        <Input
          label="Username"
          name="username"
          value={fieldUsername}
          onChange={(e) => setFieldUsername(e.target.value)}
          placeholder="Username"
          type="text"
          setHeight="80px"
          setWidth="20%"
        />
        <Input
          label="CPF"
          name="cpf"
          value={fieldCpf}
          onChange={(e) => setFieldCpf(e.target.value)}
          placeholder="CPF"
          type="text"
          setHeight="80px"
          setWidth="20%"
        />
        <Input
          label="First Name"
          name="first_name"
          value={fieldFirstName}
          onChange={(e) => setFieldFirstName(e.target.value)}
          placeholder="First Name"
          type="text"
          setHeight="80px"
          setWidth="20%"
        />
        <Input
          label="Last Name"
          name="last_name"
          value={fieldLastName}
          onChange={(e) => setFieldLastName(e.target.value)}
          placeholder="Last Name"
          type="text"
          setHeight="80px"
          setWidth="20%"
        />
        <Input
          label="Email"
          name="email"
          value={fieldEmail}
          onChange={(e) => setFieldEmail(e.target.value)}
          placeholder="Email"
          setHeight="80px"
          setWidth="30%"
        />
        <Input
          label="Password"
          name="password"
          value={fieldPassword}
          onChange={(e) => setFieldPassword(e.target.value)}
          placeholder="Password"
          setHeight="80px"
          setWidth="20%"
        />
        </section>
        <section className='cepInfo'>
        <Input
          label="CEP"
          value={fieldCep}
          onChange={(e) => setFieldCep(e.target.value)}
          name="cep"
          placeholder="CEP"
          setHeight="80px"
          setWidth="60%"
        />
        </section>
        <section className='addressInfo'>
        <Input
          label="Address"
          value={allAddressFields.logradouro}
          name="address"
          placeholder="Address"
          setHeight="80px"
          setWidth="30%"
        />
        <Input
          label="Number"
          name="number"
          value={fieldNumber}
          onChange={(e) => setFieldNumber(e.target.value)}
          placeholder="Number"
          setHeight="80px"
          setWidth="10%"
        />
        <Input
          label="Complement"
          name="complement"
          value={fieldComplement}
          onChange={(e) => setFieldComplement(e.target.value)}
          placeholder="Complement"
          setHeight="80px"
          setWidth="30%"
        />
        <Input
          label="Neighborhood"
          value={allAddressFields.bairro}
          name="neighborhood"
          placeholder="Neighborhood"
          setHeight="80px"
          setWidth="20%"
        />
        <Input
          label="City"
          value={allAddressFields.localidade}
          name="city"
          placeholder="City"
          setHeight="80px"
          setWidth="20%"
        />
        <Input
          label="State"
          value={allAddressFields.uf}
          name="state"
          placeholder="State"
          setHeight="80px"
          setWidth="20%"
        />
        </section>
        <div className="buttonBox">
          <Button 
            setSize="large" 
            setColor="var(--blue)"
            setClick={() => postRegister()}
          >
            Submit
          </Button>
          <Button
            setSize="large"
            setColor="var(--red)"
            setClick={() => handleDirection('/')}
          >
            Back
          </Button>
        </div>
    </Container>
  );
};