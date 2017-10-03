import React, { Component } from 'react';
import profilepic from './Images/profilepic.jpg';

class About extends Component {
  render(){
    return(
      <div className="aboutMe">
        <div className="row">
          <div className="col-md-12">
            <h2 className="maintitle">About Me</h2>
          </div>
          <div className="col-md-12">
            <img src={profilepic} id="profile" alt="profile" /><br />
            <p>My name is Miranda Hane. I have been a comedic actress since I was 10 years old. One day, I found a website called CodeAcademy and decided to finally try to learn to code. </p>
            <p>It was pretty daunting at first. I started learning HTML/CSS and struggled in teaching myself how to learn. One day, I remember thinking that it would be impossible to remember everything I was learning and I wasn't ever going to really understand any of it.</p>
            <p>The next day, I sat down at my computer and picked up where I left off the day before. As I sat there, completing the lesson, everything began to click. I started connecting everything I learned and started to truly understand what I was reading and what it meant. I remember jumping out of my chair with joy when I fixed my first bug.</p>
            <p> When I felt that immense joy of putting my head down, working hard and solving a problem all on my own, I knew this was something I was truly passionate about.</p>
          </div>
        </div>

      </div>
    );
  }

}

export default About;
