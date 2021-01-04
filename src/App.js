/* eslint-disable default-case */
import React from 'react';
import ListEncounter from './ListEncounter.jsx'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      heathPoint: 1,
      encounter: JSON.parse(localStorage.getItem('listEncounter')) || [],
      color: [
        '#ff3064', '#16d3d4', '#1bc97f', '#fec925', '#eb32bc', '#5087ec'
      ]
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
    e.preventDefault();
  }

  updateHealth = (i, value, type) => {
    const updateHealth = this.state.encounter;
    switch (type) {
      case 'up':
        if(parseInt(updateHealth[i].currentHealth) + value <= updateHealth[i].maxHealth) {
          updateHealth[i].currentHealth = JSON.stringify(parseInt(updateHealth[i].currentHealth) + value);
        }
        this.setState({
          encounter: updateHealth
        },() => {
          this.saveDataLocal(updateHealth);
        });
        break;
      case 'lower':
        if(parseInt(updateHealth[i].currentHealth) - value >= 0) {
          updateHealth[i].currentHealth = JSON.stringify(parseInt(updateHealth[i].currentHealth) - value);
        }
        this.setState({
          encounter: updateHealth
        },() => {
          this.saveDataLocal(updateHealth);
        });
        break;
    }
  }

  saveDataLocal = (listEncounter) => {
    localStorage.setItem('listEncounter', JSON.stringify(listEncounter))
  }

  selectColorBar = (i) => {
    if (i >= this.state.color.length) {
      return this.state.color[i % this.state.color.length];
    }
    return this.state.color[i];
  }

  clearAll = () => {
    this.setState({
      encounter: [],
    }, () => {
      this.saveDataLocal([])
    })
  }


  render() {
    document.body.style.backgroundColor = "#002245";

    return (
      <div style={{padding: 20, display: 'flex', flexDirection: 'column'}}>
        <div>
          <form 
            style={{
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              backgroundColor:'#002245'
            }}>
            <label style={{color: '#fff'}}>
              Name : 
              <input
                name="name"
                type="text"
                style={{
                  marginTop: 10,
                  borderWidth: 0,
                  borderBottomWidth: 1,
                  outline: 'none',
                  marginInline: 10,
                  paddingInline: 5,
                  borderColor: '#fff',
                  backgroundColor: '#002245',
                  color: '#fff'
                }}
                value={this.state.name}
                onChange={this.handleInputChange} />
            </label>
            <label style={{color: '#fff'}}>
              HealthPoint :
              <input
                min={1}
                name="heathPoint"
                type="number"
                style={{
                  marginTop: 20,
                  width: 105,
                  borderWidth: 0,
                  borderBottomWidth: 1,
                  outline: 'none',
                  marginInline: 10,
                  paddingInline: 5,
                  borderColor: '#fff',
                  backgroundColor: '#002245',
                  color: '#fff'
                }}
                value={this.state.heathPoint}
                onChange={this.handleInputChange} />
            </label>
          <button 
            onClick={this.handleClick}
            style={{
              marginTop: 10,
              backgroundColor: '#002245',
              width: 100,
              borderWidth: 0,
              color: '#16d3d4',
              fontWeight: 'bold',
              fontSize: 18,
              outline: 'none',
            }}
          >
              Create
            </button>
        </form>
        <button
          onClick={() => this.clearAll()}
          style={{
              marginTop: 5,
              backgroundColor: '#002245',
              borderWidth: 0,
              width: 100,
              color: '#fec925',
              fontWeight: 'bold',
              fontSize: 18,
              outline: 'none',
            }}
        >
          Clear all
        </button>
        </div>
        <div>
          {this.state.encounter.map((value,index) => (
             <ListEncounter
              key={index}
              encounter={value}
              index={index}
              color={this.selectColorBar(index)}
              updateHealth={(i, value, type) => this.updateHealth(i, value, type)}
              duplicate={(i) => {
                const listEncounter = this.state.encounter;
                listEncounter.push(listEncounter[i]);
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
            ))
          }
        </div>
      </div>
    );
  }

}

export default App;
