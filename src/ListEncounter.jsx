import React from 'react';

class listEncounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hp: null
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
    const currentPercent = (encounter.currentHealth * 100) / encounter.maxHealth; 
    return (
      <div style={{flex: 1, marginTop: 20}}>
        <p style={{color: '#fff', marginTop: 2}}>{encounter.name} </p>
        <p style={{color: '#fff', marginTop: 2}}>{encounter.currentHealth} / {encounter.maxHealth}
          <input
            style={{
              borderWidth: 0,
              borderBottomWidth: 1,
              outline: 'none',
              marginInline: 10,
              paddingInline: 5,
              borderColor: '#fff',
              backgroundColor: '#002245',
              color: '#fff'
            }}
            min={1}
            name="hp"
            type="number"
            value={this.state.hp}
            onChange={this.handleInputChange} />
          <button
            style={{
              backgroundColor: '#002245',
              borderWidth: 0,
              color: '#ff3064',
              fontWeight: 'bold',
              fontSize: 18,
              outline: 'none',
            }}
            onClick={() => {
            this.props.updateHealth(this.props.index, parseInt(this.state.hp), 'lower');
            }}
          >
            Damage
          </button>
          <button
            style={{
              backgroundColor: '#002245',
              borderWidth: 0,
              color: '#1bc97f',
              fontWeight: 'bold',
              fontSize: 18,
              outline: 'none',
            }}
            onClick={() => {
            this.props.updateHealth(this.props.index, parseInt(this.state.hp), 'up');
          }}
          >
            Heal
          </button>
	        <button
            style={{
              marginLeft: 150,
              backgroundColor: '#002245',
              borderWidth: 0,
              color: '#16d3d4',
              fontWeight: 'bold',
              fontSize: 18,
              outline: 'none',
            }}
            onClick={() => {
            this.props.duplicate(this.props.index);
          }}
          >
            Duplicate
          </button>
          <button
            style={{
              marginLeft: 10,
              backgroundColor: '#002245',
              borderWidth: 0,
              color: '#5087ec',
              fontWeight: 'bold',
              fontSize: 18,
              outline: 'none',
            }}
            onClick={() => {
            this.props.remove(this.props.index);
          }}
          >
            Remove
          </button>
        </p>
        <div
          style={{
            position: 'relative',
            width: 300,
            height: 30,
            backgroundColor: 'grey'
          }}>
            <div
            style={{
              width: `${currentPercent}%`,
              height: '100%',
              backgroundColor: this.props.color || '#16d3d4'
            }}/>
        
          <div
            style={{
              width: '100%',
              height: '100%',
              position:'absolute',
              top: 0
            }}>
            <button
              style={{
                width: '50%',
                height:'100%',
                opacity: 0
              }}
              onClick={() => this.props.updateHealth(this.props.index, 1, 'lower')}
              >
              </button>
            <button
              style={{
                width: '50%',
                height:'100%',
                opacity: 0
              }}
              onClick={() => this.props.updateHealth(this.props.index, 1, 'up')}
              >
            </button>
          </div>
        </div>
      </div>
    );
  }

}

export default listEncounter;
