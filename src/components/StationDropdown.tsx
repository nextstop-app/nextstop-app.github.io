import Form from 'react-bootstrap/Form'
import stations from '../resources/station-assoc.json'

const StationDropdown = (props) => {
  return (
    <Form.Select aria-label="Station Name" value={props.value} onChange={(e) => { console.log(e.currentTarget.value); props.onStationSelect(e.currentTarget.value) } }>
      <option value="">Select a Station</option>
      {stations.map(([displayName, baseStopId]) => 
        <option key={baseStopId} value={baseStopId}>{displayName}</option>
      )}
    </Form.Select>
  )
}

export default StationDropdown;
