import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import HealthBar from './HealthBar';

class listEncounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hp: undefined
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    const {encounter} = this.props;
    return (
      <Container>
        <Row>
          <Col style={{marginBottom: 10}}>
            <Badge className="float-left" pill variant="info">{encounter.name}</Badge>
            <Badge className="float-right" pill variant="info">{`${encounter.currentHealth} / ${encounter.maxHealth}`}</Badge>
          </Col>
        </Row>
        <Row>
          <Col>
            <HealthBar
              style={{marginTop: encounter.name ? 0 : 23}}
              current={encounter.currentHealth}
              max={encounter.maxHealth}
              withName={encounter.name ? 1 : 0}
            />
          </Col>
        </Row>
        <Row style={{marginTop: 10}}>
          <Col sm={3}>
            <Form.Control
              min={1}
              style={{width: '100%'}}
              name="hp"
              placeholder="Hp"
              type="number"
              value={this.state.hp}
              onChange={this.handleInputChange}
            />
          </Col>
          <Col sm={3}>
            <DropdownButton id="action-button" title="Action" variant="info">
              <Dropdown.Item onClick={() => this.props.updateHealth(this.props.index, parseInt(this.state.hp), 'lower')} as="button">Damage</Dropdown.Item>
              <Dropdown.Item onClick={() => this.props.updateHealth(this.props.index, parseInt(this.state.hp), 'up')} as="button">Heal</Dropdown.Item>
              <Dropdown.Item disabled onClick={() => this.props.duplicate(this.props.index)} as="button">Duplicate</Dropdown.Item>
              <Dropdown.Item onClick={() => this.props.remove(this.props.index)} as="button">Remove</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
      </Container>
    );
  }

}

export default listEncounter;
