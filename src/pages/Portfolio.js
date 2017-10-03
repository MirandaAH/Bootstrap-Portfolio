import React, { Component } from 'react';


class About extends Component {
  render(){
    return(
      <div className="portfolio">
        <div className="row">
          <div className="col-md-12">
            <h2 className="maintitle">Portfolio</h2>
          </div>
        </div>
        <div className="row">
          <div className="card-deck">
            <div className="card here">
              <img className="img-responsive snapshot" src={"../Images/PsychicGame.png"} alt="Psychic Game" />
              <div className="card-block">
                <h4 className="card-title title">Are You Psychic?</h4>
                <a className="card-text" href="https://mirandaah.github.io/Psychic-Game/" target="_blank" rel="noopener noreferrer"><small className="text-muted">View here</small></a>
              </div>
            </div>
            <div className="card here">
              <img className="img-responsive snapshot" src={"../Images/FriendFinder.png"} alt="Friend Finder" />
              <div className="card-block">
                <h4 className="card-title title">Friend Finder</h4>
                <p className="card-text description">An app that will take a compatibility survey and show you your most compatible friend out of all of members in the database.</p>
                <a className="card-text" href="https://obscure-wave-58501.herokuapp.com/" target="_blank" rel="noopener noreferrer"><small className="text-muted">View here</small></a>
              </div>
            </div>
            <div className="card here">
              <img className="img-responsive" src={'../Images/ComingSoon.png'} alt="Coming Soon" />
              <div className="card-block">
                <h4 className="card-title title">More Coming Soon</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default About;
