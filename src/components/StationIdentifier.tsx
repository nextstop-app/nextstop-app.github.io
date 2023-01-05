import React, { useEffect, useState } from 'react';
import { Stack } from 'react-bootstrap';

import DirectionDropdown from './DirectionDropdown';
import StationDropdown from './StationDropdown';

const StationIdentifier = () => {
  const [station, setStationName] = useState('');
  const [direction, setDirection] = useState('');
  const [stationId, setStationId] = useState('');

  useEffect(() => {

    if (station && direction) {
      setStationId(`${station}${direction}`)
    } else if (stationId !== '') {
      setStationId('')
    }

  }, [station, direction, stationId])

  const renderStationId = () => {
    if (!stationId) return null;

    return (<>        
      <input type="text" readOnly value={stationId} />
      <button onClick={() => navigator.clipboard.writeText(stationId)}>Copy</button>
      </>)
  }

  return (
    <Stack gap={1} className="col-lg-10 mx-auto">
      <h1>StationID Finder</h1>
      <StationDropdown value={station} onStationSelect={setStationName} />
      <DirectionDropdown value={direction} onDirectionSelect={setDirection} />
      {renderStationId()}
      <button onClick={() => { setStationName(''); setDirection('')}} disabled={(direction === '' && station === '')}>Reset</button>
    </Stack>
  );
}

export default StationIdentifier;
