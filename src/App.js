import './App.css'

import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'

import BarraSuperiore from './components/BarraSuperiore'
import BarraInferiore from './components/BarraInferiore'
import Messaggi from './components/Messaggi'


function App() {
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
      </Stack>
      <h1>Ciao</h1>
      <BarraInferiore/>
    </Container>
  );
}

export default App;
