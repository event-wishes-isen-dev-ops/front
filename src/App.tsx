import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, Button, Container, Typography } from '@mui/material';
import PrestataireCard, { Prestataire } from './components/PrestataireCard';
import AddIcon from '@mui/icons-material/Add';
function App() {
  const [prestataires, setPrestataires] = useState<Prestataire[]>()
  useEffect(() => {
    setPrestataires(
      [
        {
          name: "plop",
          nbLike: 10000,
          url: "https://www.francetvinfo.fr/pictures/zwzFc6PU5JuzL2NA0BwMqhCrvo0/1200x900/2016/08/23/shrek-5.jpg"
        }
      ]
    )
  }, [])
  return (
    <Container maxWidth="sm">
      {prestataires?.map((prestataire) => (
        <PrestataireCard
          {...prestataire}
        />
      ))}
      <Button> <AddIcon></AddIcon> add prestataire</Button>
    </Container>
  );
}

export default App;
