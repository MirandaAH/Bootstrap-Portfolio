import React, { Component }from 'react';
import { Link } from 'react-router-dom';

import linked from './linkedin.png';
import github from './github.png';
import stack from './stackoverflow.png';

class Accounts extends Component {
  render(){
    return(
      <div className="panel accounts">
        <div className="panel panel-heading">
          <h2 className="maintitle">Connect With Me</h2>
        </div>
        <div className="panel-body">
          <Link className="links" to="https://stackoverflow.com/users/7650442/miranda"><img  id="stack" className="icons" alt="icon" src={stack} /></Link>
          <Link className="links" to="https://www.linkedin.com/in/mirandahane/"><img className="icons" alt="icon" src={linked} /></Link>
          <Link className="links" to="https://github.com/MirandaAH"><img className="icons" alt="icon" src={github} /></Link>

        </div>
      </div>
    );
  }
}


export default Accounts;
