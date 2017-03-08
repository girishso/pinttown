import React from 'react';
import Sidebar from './sidebar'
import CommentsContainer from '../containers/comments-container'

const getModuleMarkup = (mod) => {
  if(mod.type === 'image')
    return (<img alt='' className="ui fluid image" src={mod.src} />)
  else
    return (<div>{ mod.text_plain }</div>)
}

// Using "Stateless Functional Components"
const Project = function(props) {
  if(props.modules.length === 0) {
    return (
        <div className="ui segment load">
          <div className="ui active inverted dimmer">
            <div className="ui massive text loader">Loading</div>
          </div>
          <p></p>
          <p></p>
          <p></p>
        </div>
      );
  }

  const render_modules = props.modules.map((mod, ix) => {
    return (
          <div key={ix}>
            <div className="ui fluid">
              { getModuleMarkup(mod) }
            </div>
            <div className="ui divider"></div>
          </div>
      )})

  return (
    <div className="pusher">
      <div className="ui vertical stripe segment">
        <div className="ui middle aligned stackable grid container">
          <div className="row main">
            <div className="eleven wide column">
              <div className="ui segment">
                {render_modules}
              </div>
            </div>
            <div className="five wide column sb">
              <Sidebar fields={props.fields} published_on={props.published_on} owners={props.owners} />
            </div>
          </div>
          <div className="row">
            <h4 className="ui horizontal divider header">
            <i className="thumb circular up icon"></i>
            </h4>
          </div>
          <div className="row">
            <div className="column">
              <CommentsContainer project_id={props.project_id} />
            </div>
          </div>
        </div>
      </div>
    </div> )
}

Project.defaultProps = {
    project_id: 1,
    modules: [],
    fields: [],
    published_on: 1488953165,
    owners: [{
        images: {50: ''},
        display_name: ''
      }]
};

export default Project;
