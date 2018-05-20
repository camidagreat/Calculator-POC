import React, { Component } from 'react';

import ApplianceCard from './ApplianceCard'

import dryer from '../assets/images/appliances/Dryer.png';
import washer from '../assets/images/appliances/Washer.png';
import ac from '../assets/images/appliances/AC.png';
import heat from '../assets/images/appliances/Heat.png';
import ev from '../assets/images/appliances/EV.png';
import waterPump from '../assets/images/appliances/Water-pump.png';
import waterHeater from '../assets/images/appliances/Water-heater.png';

class Appliances extends Component {

  constructor(props) {
    super(props);

    this.state = {
      highlighted: [],
      appliances: {
        dryer: {
          name: 'Dryer',
          averageUsage: '',
          picture: {dryer},
          selected: false,
          id: '1'
        },
        washer: {
          name: 'Washer',
          averageUsage: '',
          picture: {washer},
          selected: false,
          id: '2'
        },
        ac: {
          name: 'Air Conditioning',
          averageUsage: '',
          picture: {ac},
          selected: false,
          id: '3'
        },
        heat: {
          name: 'Heating',
          averageUsage: '',
          picture: {heat},
          selected: false,
          id: '4'
        },
        ev: {
          name: 'Electrical Vehicle',
          averageUsage: '',
          picture: {ev},
          selected: false,
          id: '5'
        },
        waterPump: {
          name: 'Water Pump',
          averageUsage: '',
          picture: {waterPump},
          selected: false,
          id: '6'
        },
        waterHeater: {
          name: 'Water Heater',
          averageUsage: '',
          picture: {waterHeater},
          selected: false,
          id: '7'
        }
      }
    };
  };

  handleClick = (e) => {

      // const highlightedArray = this.state.highlighted
      //
      // function remove(array, element) {
      //   const index = array.indexOf(element);
      //   array.splice(index, 1);
      // }
      //
      //
      // // selects appliance on click
      // (this.state.selected = false)
      // ? this.setState({selected: true})
      // : this.setState({selected: true});
      //
      // console.log(this.state.highlighted);

       // changes picture class to highlight when clicked
      // (e.target.className == "appliance-image highlight-appliance")
      // ? (e.target.className = "appliance-image")
      // : (e.target.className = "appliance-image highlight-appliance")
  };

  render(){

    return(
      <ul className="pull-right appliances">
        {
          Object.keys(this.state.appliances).map(function (appliance, key) {

            return (
              <ApplianceCard src={appliance.picture} key={key} appliance={appliance}
                             alt={appliance.name} onClick={(e) => this.handleClick(e)} />
            );
          })
        }
      </ul>
    );
  }

};

export default Appliances;
