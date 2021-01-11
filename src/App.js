/* eslint-disable default-case */
import React from 'react';
import ListEncounter from './ListEncounter.jsx'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      heathPoint: undefined,
      encounter: JSON.parse(localStorage.getItem('listEncounter')) || [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleClick(e) {
    let listEncounter = this.state.encounter;
    if(this.state.heathPoint) {
      listEncounter.push({
        name:this.state.name,
        maxHealth:this.state.heathPoint,
        currentHealth:this.state.heathPoint
      });

      this.setState({
        name:'',
        heathPoint: 1,
        encounter: listEncounter,
      }, () => {
        this.saveDataLocal(listEncounter);
      })
    } else {
      window.alert("Health data can't be empty !")
    }
   
    e.preventDefault();
  }

  updateHealth = (i, value, type) => {
    const updateHealth = this.state.encounter;
    switch (type) {
      case 'up':
        if(value) {
          updateHealth[i].currentHealth = JSON.stringify(parseInt(updateHealth[i].currentHealth) + value);
          this.setState({
            encounter: updateHealth
          },() => {
            this.saveDataLocal(updateHealth);
          });
        }
        break;
      case 'lower':
        if(value) {
          if(parseInt(updateHealth[i].currentHealth) - value >= 0) {
            updateHealth[i].currentHealth = JSON.stringify(parseInt(updateHealth[i].currentHealth) - value);
          } else {
            updateHealth[i].currentHealth = JSON.stringify(0)
          }
          
          this.setState({
            encounter: updateHealth
          },() => {
            this.saveDataLocal(updateHealth);
          });
        }
        break;
    }
  }

  saveDataLocal = (listEncounter) => {
    localStorage.setItem('listEncounter', JSON.stringify(listEncounter))
  }


  clearAll = () => {
    this.setState({
      encounter: [],
    }, () => {
      this.saveDataLocal([])
    })
  }


  render() {

    return (
      <Container>
        <Row>
          <Col>
            <Container>
              <Form>
                <Form.Row className="align-items-center">
                  <Col lg={4} md={6} sd={12}>
                    <Form.Control
                        placeholder="Name"
                        name="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleInputChange}  
                      />
                  </Col>
                  <Col lg={4} md={6} sd={12}>
                    <Form.Control
                        placeholder="Healthpoint"
                        name="heathPoint"
                        type="number"
                        value={this.state.heathPoint}
                        onChange={this.handleInputChange}
                      />
                  </Col>
                  <Col xs="auto" className="my-1">
                    <Button onClick={this.handleClick} variant="primary" type="submit">Create</Button>
                  </Col>
                  <Col xs="auto" className="my-1">
                    <Button onClick={() => this.clearAll()} variant="danger">Clear all</Button>
                  </Col>
                </Form.Row>
              </Form>
            </Container>
          </Col>
        </Row>
        <Row style={{marginTop: 20}}>
          {this.state.encounter.map((value,index) => (
            <Col key={index} lg={6} md={8} sd={12}>
              <ListEncounter
                encounter={value}
                index={index}
                updateHealth={(i, value, type) => this.updateHealth(i, value, type)}
                duplicate={(i) => {
                  const listEncounter = this.state.encounter;
                  const newEncounter = listEncounter[i];
                  listEncounter.push(newEncounter);
                  this.setState({
                    encounter: listEncounter		
                  }, () => {
                  this.saveDataLocal(listEncounter);
                  })
                }}
                remove={(i) => {
                  const listEncounter = this.state.encounter;
                  listEncounter.splice(i,1);
                  this.setState({
                    encounter: listEncounter
                  },() => {
                    this.saveDataLocal(listEncounter);
                  })
                }}
              />
            </Col>
              ))
            }
        </Row>
      </Container>
      
    );
  }

}

export default App;
