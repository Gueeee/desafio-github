import gitLogo from "../assets/logo.png";
import { Container } from "./styles";

import Input from "../components/Input";
import Button from "../components/Button";
import ItemRepo from "../components/ItemRepo";
import { api } from '../services/api';

import { useState } from "react";

function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const {data} = await api.get(`repos/${currentRepo}`);

    if(data.id) {
      const idExist = repos.find(repo => repo.id === data.id);

      if(!idExist) {
        setRepos(prev => [...prev,data]);
        setCurrentRepo("");
        return;
      }
    }
    alert("Repositório não encontrado");
  }

  const handleRemoveRepo = (id) => {
    setRepos(repos.filter(repo => repo.id !== id));
  }

  return (
    <>
    <Container>
      <img src={gitLogo} width={72} alt="Github Logo"/>
      <Input value={currentRepo} onChange={(e)=> setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo} />
      {repos.map(repo=> <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
    </Container>
    </>
  );
}

export default App;
