import React from 'react';
import headshot from '../images/headshot.jpg';

function Profile() {
  return (
    <main className="profile">
      <div className="profile-header">
        <img src={headshot} alt="Quinn Fleur" className="profile-avatar" />
        <div className="profile-info">
          <h1>Quinn Fleur (he/him)</h1>
          <p>Application Engineer 2 at Vanguard</p>
          <p><i className="fas fa-envelope"></i> quinndelafleur@vanguard.com | <i className="fas fa-phone"></i> 919-278-7240</p>
          <a href="mailto:quinndelafleur@gmail.com" className="contact-button">
            <i className="fas fa-envelope"></i> Contact Quinn
          </a>
        </div>
      </div>
      
      <section className="profile-section">
        <h2>Education</h2>
        <p><strong>The University of North Carolina at Charlotte</strong></p>
        <p>Bachelor of Arts in Computer Science</p>
        <p>Graduation Date: December 2018</p>
      </section>

      <section className="profile-section">
        <h2>Skills</h2>
        <p>React, TypeScript, Jest, Java, SCSS, jQuery, NodeJS, Express, Linux, Splunk, Git, JIRA, Agile, Scrum, Kanban, Atlassian Tool Suite, Microsoft Office, SVG, Client Relationships</p>
      </section>

      <section className="profile-section">
        <h2>Work Experience</h2>
        <div className="work-experience">
          <h3>Application Engineer 2 - Phoenix Team</h3>
          <p>Vanguard, Charlotte, NC | January 2023 - Present</p>
          <ul>
            <li>Supported crew making transfers of assets by notifying users when their transfers were not in good order</li>
            <li>Worked with DynamoDB and aws-sdk to provide timely notifications to clients</li>
            <li>Implemented batch status update predicate to retrieve statuses of transfers</li>
            <li>Created a lambda microservice to clean up transfer records when no longer relevant</li>
          </ul>
        </div>
        <div className="work-experience">
          <h3>Application Engineer 2 - NavLab</h3>
          <p>Vanguard, Charlotte, NC | November 2021 - January 2023</p>
          <ul>
            <li>Continued work on Global Navigation that split from C3</li>
            <li>Doubled search queries by changing button prominence</li>
            <li>Redesigned Global Navigation into React web components</li>
            <li>Worked with designers to fulfill brand vision</li>
            <li>Used and adapted in-house tools like constellation to align with One Vanguard</li>
            <li>Went through decommission process for previous header taxonomy service</li>
          </ul>
        </div>
        <div className="work-experience">
          <h3>Application Engineer 1 & 2 - Cross Cutting Concerns (C3)</h3>
          <p>Vanguard, Charlotte, NC | March 2019 - November 2021</p>
          <ul>
            <li>Supported teams at Vanguard with essential page tools</li>
            <li>Reskinned global header and footer with visual, accessibility and brand updates</li>
            <li>Rewrote Splunk alerts to reduce resource load and false alert noise</li>
            <li>Developed UI with accessibility guidelines in mind</li>
            <li>Advocated for and implemented accessibility improvements</li>
            <li>Contributed to spreading best practices through blog writing</li>
          </ul>
        </div>
      </section>

      <section className="profile-section">
        <h2>Community Involvement</h2>
        <ul>
          <li>Lead organizer for T4Tclt, creating trans-centered spaces and resources in Charlotte</li>
          <li>Provide homemade meals for the houseless with dietary restrictions in mind</li>
          <li>Worked with Vanguard IT Women's Initiative for Leadership Success</li>
          <li>Participated with Vanguard's OPEN Initiative</li>
        </ul>
      </section>
    </main>
  );
}

export default Profile;