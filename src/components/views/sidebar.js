import React from 'react';

// Using "Stateless Functional Components"
export default function(props) {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const published = new Date(props.published_on * 1000);
  const owner = props.owners[0];

  return(
      <div className="ui segment">
        <div className="ui cards">
          <div className="card">
            <div className="content">
              <img className="right floated mini ui image" src={Object.values(owner.images)[0]} />
              <div className="header">
                {owner.display_name}
              </div>
              <div className="meta">
                {owner.location}
              </div>
              <div className="description">

              </div>
            </div>
            <div className="extra content">
              <div className="ui blue button">Follow</div>
            </div>
          </div>
        </div>
        <div className="ui divider"></div>
        <div className="ui segment">
          <h3>{props.name}</h3>
          <p>
            <ul id="fields">
              {render_fields(props.fields)}
            </ul>
          </p>
          <p className="grey"><small>Published: {published.toLocaleDateString("en-US",options)}</small></p>
        </div>
      </div>
    );
}

const render_fields = (fields) => {
  if(typeof fields === 'undefined')
    return null;

  return fields.map((field, ix) => (<li key={ix}><a href="#">{field}</a></li>))
}
