import React from 'react';
import { Link } from 'react-router';
import NotificationContainer from '../containers/notification-container';

// Using "Stateless Functional Components"
export default function(props) {
  return (
      <div>
        <div className="ui fixed inverted menu">
          <div className="ui container">
            <a href="/" className="header item" rel="noreferrer">
              Pint Town
            </a>
            <a href="/" className="item" rel="noreferrer">Home</a>
            <div className="ui simple dropdown item">
              Discover <i className="dropdown icon"></i>
              <div className="menu inverted">
                <a className="item" href="#" rel="noreferrer"><i className="safari icon"></i>Search & Explore</a>
                <a className="item" href="#" rel="noreferrer"><i className="slideshare icon"></i>Curated Galleries</a>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <NotificationContainer />
          {props.children}
        </div>
      </div>
    );
}

