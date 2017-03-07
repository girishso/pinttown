import React from 'react';
import { Link } from 'react-router';

const render_a_project = project => {
  return(
    <div key={project.id} className="card">

        <div className="image">
          <img src={ project.covers['230'] } />
        </div>
      <div className="content">
        <div className="header">
          <Link className="" to={`/projects/${project.id}`}>
            { project.name }
          </Link>
        </div>
        <div className="meta">
          <span className="date">by { project.owners[0].display_name }</span>
        </div>
        <div className="description">

        </div>
      </div>
      <div className="extra content">
        <span className="right floated">
          { project.fields[0] }
        </span>
        <span>
          <i className="thumbs up icon"></i>
          { project.stats.appreciations }
        </span>
      </div>
    </div>
  )
}

const render_projects_list = projects => projects.map( project => render_a_project(project) )

export default function(props) {
  return(
    <div className="row main">
    <div className="ui container grid home-main">
      <div className="ui link cards">
        { render_projects_list(props.projects) }
      </div>
    </div>
    </div>
    )
}
