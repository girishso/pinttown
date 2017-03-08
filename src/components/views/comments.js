import React from 'react';
import {ObjectValues} from '../../utils/helpers'
import timeago from 'timeago.js';

const render_a_comment = comment => {
   return (<div key={comment.id} className="comment">
          <a className="avatar" rel="noreferrer">
            <img alt={comment.user.display_name} src={ObjectValues(comment.user.images)[0]} />
          </a>
          <div className="content">
            <a className="author" rel="noreferrer">{comment.user.display_name}</a>
            <div className="metadata">
              <div className="date">{ new timeago().format(comment.created_on*1000) }</div>
            </div>
            <div className="text">
              {comment.comment}
            </div>
            <div className="actions">
              &nbsp;
            </div>
          </div>
        </div>)
}

const render_comments = comments => comments.map(comment => render_a_comment(comment));

// Using "Stateless Functional Components"
export default function(props) {
  return(
      <div className="ui segment">
        <h2>Comments ({props.comments.length})</h2>
        <div className="ui comments">
          {render_comments(props.comments)}
        </div>
      </div>
    );
}
