import React from 'react';
import './App.css';
import StationIdentifier from './components/StationIdentifier';
import { Stack } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Stack gap={2} className="col-md-5 mx-auto">
      <StationIdentifier />
    </Stack>
    </div>
  );
}

export default App;
