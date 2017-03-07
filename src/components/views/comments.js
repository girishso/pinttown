import React from 'react';

// Using "Stateless Functional Components"
export default function(props) {
  return(
      <div className="ui segment">
        <h2>Comments (8)</h2>
        <div className="ui comments">
          <div className="comment">
            <a className="avatar" rel="noreferrer">
              <img src="/images/avatar/small/joe.jpg" />
            </a>
            <div className="content">
              <a className="author" rel="noreferrer">Joe Henderson</a>
              <div className="metadata">
                <div className="date">1 day ago</div>
              </div>
              <div className="text">
                <p>The hours, minutes and seconds stand as visible reminders that your effort put them all there. </p>
                <p>Preserve until your next run, when the watch lets you see how Impermanent your efforts are.</p>
              </div>
              <div className="actions">
                <a className="reply" rel="noreferrer">Reply</a>
              </div>
            </div>
          </div>
          <div className="comment">
            <a className="avatar" rel="noreferrer">
              <img src="/images/avatar/small/christian.jpg" />
            </a>
            <div className="content">
              <a className="author" rel="noreferrer">Christian Rocha</a>
              <div className="metadata">
                <div className="date">2 days ago</div>
              </div>
              <div className="text">
                I re-tweeted this.
              </div>
              <div className="actions">
                <a className="reply" rel="noreferrer">Reply</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
