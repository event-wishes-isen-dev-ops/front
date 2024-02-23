import { useEffect, useState } from 'react';
import './App.css';
import { Button, Container } from '@mui/material';
import PrestataireCard, { Prestataire } from './components/PrestataireCard';
import AddIcon from '@mui/icons-material/Add';
function App() {
  const [prestataires, setPrestataires] = useState<Prestataire[]>()
  function getData() {
    fetch(process.env.REACT_APP_BFF_URL + "prestataires").then( data => data.json())
    .then(dataJson => setPrestataires(
        dataJson
      ))
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <Container maxWidth="sm">
      {prestataires?.map((prestataire) => (
        <PrestataireCard
          {...prestataire}
        />
      ))}
      <Button
      onClick={() => {
        fetch(process.env.REACT_APP_BFF_URL + "prestataires", {
          method: "POST",
          body: JSON.stringify({
            name: "asdoifghaioufs",
            nbLike: 189443224,
            url: "https://www.francetvinfo.fr/pictures/zwzFc6PU5JuzL2NA0BwMqhCrvo0/1200x900/2016/08/23/shrek-5.jpg"
          }),
          headers: {
            "Content-Type": "application/json",
          },  
        }).then(_ => getData())
      }}
      > <AddIcon></AddIcon> add prestataire</Button>
    </Container>
  );
}

export default App;
