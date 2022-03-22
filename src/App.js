import './App.css'

import * as React from 'react'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'

import BarraSuperiore from './components/BarraSuperiore'
import BarraInferiore from './components/BarraInferiore'
import Messaggi from './components/Messaggi'
import Film from './components/Film'


function App() {
  let [data, setData] = React.useState({})

React.useEffect(function() {
  fetch ("https://cinema.donboscosandona.it/movie/featured.json")
  .then(res => res.json())
  .then(data => setData(data))
}, []) 
  return (
    <Container maxWidth="xl">
      <Stack spacing={2}>
      <BarraSuperiore/>
              <Alert severity="warning">
                <AlertTitle>Warning</AlertTitle>
            This is a warning alert — <strong>check it out!</strong>
          </Alert>
              <Alert severity="info">
                <AlertTitle>Info</AlertTitle>
            This is an info alert — <strong>check it out!</strong>
          </Alert>
          <Messaggi />
          <Film films={ data } />
      </Stack>
      <BarraInferiore/>
    </Container>
  );
}

export default App;
