import React, { Component } from 'react';

export default class ApplianceCard extends Component {
  render() {

    const appliance = this.props.appliance;
    const key = this.props.key;

    return(
      <div className="row appliance" key={key}>
        <div>
          <img src={appliance.picture} className="appliance-image" alt={appliance.name}></img>
        </div>
        <h4>{appliance.name}</h4>
      </div>
    );
  }
}
