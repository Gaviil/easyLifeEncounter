import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

class Healthbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
    // this.handleInputChange = this.handleInputChange.bind(this);
  }

  calculOverHealth = () => {
    const { current, max } = this.props;
    if(parseInt(current) > parseInt(max)) {
      const overHeal = current - max;
      const overPercent = (overHeal * 100) / max

      return overPercent;
    }

    return 0;
  }

  generateColorBar = () => {
    const health = (this.props.current * 100) / this.props.max
    if(health >= 50) {
      return "success";
    }
    if(health >= 30) {
      return "warning";
    }
    else {
      return "danger"
    }
  }

  render() {
    return (
      <ProgressBar>
        <ProgressBar animated variant={this.generateColorBar()} now={((this.props.current * 100) / this.props.max) - this.calculOverHealth()} key={1} />
        <ProgressBar variant="info" now={this.calculOverHealth()} animated key={2} />
      </ProgressBar>
    );
  }

}

export default Healthbar;
