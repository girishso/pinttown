import React from 'react';
import Sidebar from './sidebar'
import Comments from './comments'

// Using "Stateless Functional Components"
export default function(props) {
  if(typeof props.modules === 'undefined') {
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

  const modules = props.modules.map((module, ix) => {
    return (
          <div key={ix}>
            <div className="ui fluid">
              { getModuleMarkup(module) }
            </div>
            <div className="ui divider"></div>
          </div>
      )
  })
  return (
    <div className="pusher">
      <div className="ui vertical stripe segment">
        <div className="ui middle aligned stackable grid container">
          <div className="row main">
            <div className="eleven wide column">
              <div className="ui segment">
                {modules}
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
              <Comments />
            </div>
          </div>
        </div>
      </div>
    </div> )
}

const getModuleMarkup = (module) => {
  if(module.type === 'image')
    return (<img className="ui fluid image" src={module.src} />)
  else
    return (<div>{module.text_plain}</div>)
}
