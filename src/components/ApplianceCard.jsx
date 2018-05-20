import React, { Component } from 'react';

export default class ApplianceCard extends Component {

  render() {

    const appliance = this.props.appliance;
    const key = this.props.key;

    return(
      <div className="row appliance" key={key}>
        <div>
          <img src={this.props.src} className="appliance-image" alt={this.props.alt}></img>
        </div>
        <h4>{this.props.alt}</h4>
      </div>
    );
  }
}
