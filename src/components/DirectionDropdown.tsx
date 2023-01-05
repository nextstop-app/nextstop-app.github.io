import Form from 'react-bootstrap/Form';
const DirectionDropdown = (props) => (
  <Form.Select aria-label="Train Direction" value={props.value} onChange={(e) => { props.onDirectionSelect(e.currentTarget.value); } }>
    <option value="">Select a Train Direction</option>
    <option value="N">Northbound</option>
    <option value="S">Southbound</option>
  </Form.Select>
)

export default DirectionDropdown;
